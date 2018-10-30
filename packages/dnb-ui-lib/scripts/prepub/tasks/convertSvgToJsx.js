/**
 * Prepublish Task
 *
 */

// import fs from 'fs-extra'
import path from 'path'
// import del from 'del'
import gulp from 'gulp'
import file from 'gulp-file'
import rename from 'gulp-rename'
import transform from 'gulp-transform'
import svgr from '@svgr/core'
import { iconCase } from '../../../src/components/icon'
import camelCase from 'camelcase'
import { log } from '../../lib'

export default ({
  // preventDelete = false,
  srcPath = './src/assets/icons/*.svg',
  destPath = './src/icons'
} = {}) =>
  new Promise(async (resolve, reject) => {
    // if (!preventDelete) {
    //   await del([`${destPath}/**/*`, `!${destPath}`], {
    //     force: true
    //   })
    // }
    // make sure transformSvgToReact runs first, so icons gets filled before we run makeIndexFileWithAllIcons
    try {
      const icons = await transformSvgToReact({ srcPath, destPath })
      await makeIndexFileWithAllIcons({ icons, destPath })
    } catch (e) {
      reject(e)
    }
    resolve()
  })

const transformSvgToReact = ({ srcPath, destPath }) => {
  log.text = '> PrePublish: converting svg to jsx'
  const icons = []
  const transformToJsx = (content, file) => {
    try {
      let basename = path
        .basename(file.path)
        .replace(path.extname(file.path), '')
      const name = iconCase(basename)
      const componentName = camelCase(basename, {
        pascalCase: false
      })
      icons.push({
        name,
        basename
      })
      return new Promise((resolve, reject) =>
        svgr(content, {
          ids: true, //do not remove IDs from the syntax
          prettier: false,
          componentName
        })
          .then(res => {
            resolve(
              '/** This file is auto generated by convertSvgToJsx.js */\n\n' +
                res
            )
          })
          .catch(reject)
      )
    } catch (e) {
      console.log('Error in transformToJsx:', e)
      throw e
    }
  }
  return new Promise((resolve, reject) => {
    try {
      gulp
        .src(srcPath, { cwd: process.env.ROOT_DIR })
        .pipe(transform('utf8', transformToJsx))
        .pipe(
          rename({
            extname: '.js'
          })
        )
        .pipe(gulp.dest(destPath, { cwd: process.env.ROOT_DIR }))
        .on('end', () => resolve(icons))
        .on('error', reject)
    } catch (e) {
      reject(e)
    }
  })
}

const makeIndexFileWithAllIcons = ({ icons, destPath }) => {
  const _imports = icons
    .map(({ name, basename }) => `import ${name} from './${basename}.js'`)
    .join('\n')
  // const _exports = icons
  //   .map(
  //     ({ name, basename }) =>
  //       `export { default as ${name} } from './${basename}.js'`
  //   )
  //   .join('\n')
  const _keys = icons.map(({ name }) => name).join(', ')
  // const _exports = icons.map(({ name }) => `export {${name}}`).join('\n')
  const index = `/** This file is auto generated by convertSvgToJsx.js */

${_imports}

export { ${_keys} }

  `
  const allIcons = `/** This file is auto generated by convertSvgToJsx.js */

${_imports}

export default { ${_keys} }

  `

  return new Promise((resolve, reject) => {
    try {
      file('index.js', index, { src: true })
        .pipe(gulp.dest(destPath, { cwd: process.env.ROOT_DIR }))
        .on('end', resolve)
        .on('error', reject)
    } catch (e) {
      reject(e)
    }
    try {
      file('allIcons.js', allIcons, { src: true })
        .pipe(gulp.dest(destPath, { cwd: process.env.ROOT_DIR }))
        .on('end', resolve)
        .on('error', reject)
    } catch (e) {
      reject(e)
    }
  })
}
