/**
 * @dnb/eufemia Component Story
 *
 */

import React, { useEffect } from 'react'
import { Wrapper, Box } from 'storybook-utils/helpers'
import { Upload } from '../..'

export default {
  title: 'Eufemia/Components/Upload',
}

export const UploadSandbox = () => {
  const { files: files1 } = Upload.useUpload('upload-example-1')
  Upload.useUpload('upload-example-6')

  useEffect(() => {
    console.log(files1)
  }, [files1])

  return (
    <Wrapper>
      <Box>
        <Upload id="upload-example-1" acceptedFileTypes={['pdf']} />
      </Box>
      <Box>
        <Upload id="upload-example-2" acceptedFileTypes={['jpg', 'pdf']} />
      </Box>
      <Box>
        <Upload
          title="Upload multiple files"
          id="upload-example-3"
          multipleFiles={true}
          acceptedFileTypes={['jpg', 'pdf', 'png']}
        />
      </Box>
      <Box>
        <Upload
          id="upload-example-4"
          fileMaxSize={123}
          acceptedFileTypes={['jpg', 'png']}
        />
      </Box>
      <Box>
        <Upload
          id="upload-example-5"
          acceptedFileTypes={['jpg', 'pdf', 'png']}
          title="custom title"
          text="custom text"
          formatsDescription="custom formatsDescription"
          fileSizeDescription="custom fileSizeDescription"
          fileSizeContent="custom fileSizeContent"
          uploadButtonText="custom uploadButtonText"
          uploadLoadingText="custom uploadingLoadingText"
          deleteButton="custom deleteButton"
        />
      </Box>
      <Box>
        Two Upload components can be controlled using the same id
        <Upload
          id="upload-example-6"
          acceptedFileTypes={['jpg', 'pdf', 'png']}
        />
        <Upload
          top="x-small"
          id="upload-example-6"
          acceptedFileTypes={['jpg', 'pdf', 'png']}
        />
      </Box>
    </Wrapper>
  )
}