"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[2985],{32045:function(e,n,s){s.r(n);var i=s(52322),t=s(45392);function r(e){const n=Object.assign({h1:"h1",p:"p",a:"a",ul:"ul",li:"li",h2:"h2",code:"code",em:"em",h3:"h3",pre:"pre",strong:"strong"},(0,t.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"Maintaining themes"}),"\n",(0,i.jsx)(n.p,{children:"This section contains documentation about how to maintain and create a theme."}),"\n",(0,i.jsxs)(n.p,{children:["You may also check out the section about ",(0,i.jsx)(n.a,{href:"/uilib/usage/customisation/theming/",children:"how to use a theme in your application"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#maintaining-themes",children:"Maintaining themes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#basis-information",children:"Basis information"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#the-building-blocks",children:"The building blocks"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#defining-a-fallback",children:"Defining a fallback"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#main-theming-file",children:"Main theming file"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#creating-a-new-main-theme",children:"Creating a new main theme"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#run-the-portal-with-a-different-theme",children:"Run the Portal with a different theme"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#show-theme-tag-in-portal",children:"Show theme tag in Portal"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#component-theming",children:"Component theming"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#button-as-an-example",children:"Button as an example"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#css-custom-properties-and-root",children:"CSS custom properties and :root"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#local-theming-setup",children:"Local Theming setup"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#yarn-link-and-sass",children:"yarn link and SASS"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#chrome-extension-eufemia-theme-manager",children:"Chrome Extension: Eufemia Theme Manager"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{children:"Basis information"}),"\n",(0,i.jsxs)(n.p,{children:["The default DNB brand theme is called: ",(0,i.jsx)(n.code,{children:"ui"})," which stands for ",(0,i.jsx)(n.em,{children:"universal identity"}),"."]}),"\n",(0,i.jsx)(n.h2,{children:"The building blocks"}),"\n",(0,i.jsx)(n.p,{children:"A theme consists of several files, which again includes SASS import declarations to single component styles."}),"\n",(0,i.jsxs)(n.p,{children:["To include new or update component themes, run ",(0,i.jsx)(n.code,{children:"yarn build"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"It will find all related theme styles and put it inside the main theme file so they can get compiled to one CSS bundle."}),"\n",(0,i.jsx)(n.h3,{children:"Defining a fallback"}),"\n",(0,i.jsx)(n.p,{children:"Depending on the need of a theme, you can define a fallback to another theme."}),"\n",(0,i.jsx)(n.p,{children:"It will use that fallback theme as a basis, but use your new theme styles instead – as soon as one exists with the same name."}),"\n",(0,i.jsx)(n.p,{children:"Define a fallback inside a theme set:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"dnb-eufemia/src/style/themes/theme-sbanken/sbanken-theme-components.scss"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scss",children:'/**\n * ATTENTION: This file is auto generated by using "themeFactory".\n * But you still can change the content of this file on the very top.\n */\n\n$THEME_FALLBACK: \'ui\';\n\n/**\n * NB: The content below is auto generated by the "themeFactory".\n * You may want to update it by running "yarn build" locally.\n */\n\n@import \'<auto-generated>/dnb-button-theme-ui.scss\';\n'})}),"\n",(0,i.jsxs)(n.p,{children:["and as soon as e.g. ",(0,i.jsx)(n.code,{children:"dnb-button-theme-sbanken.scss"})," exists – it will be used instead of ",(0,i.jsx)(n.code,{children:"dnb-button-theme-ui.scss"}),"."]}),"\n",(0,i.jsx)(n.h2,{children:"Main theming file"}),"\n",(0,i.jsxs)(n.p,{children:["There is one ",(0,i.jsx)(n.strong,{children:"Main Theme File"}),", that includes all properties and element styles:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"dnb-eufemia/src/style/themes/theme-ui/ui-theme-basis.scss"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{children:"Creating a new main theme"}),"\n",(0,i.jsx)(n.p,{children:"First, duplicate or create new SCSS files:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"dnb-eufemia/src/style/themes/theme-<YOUR-THEME>/<YOUR-THEME>-theme-basis.scss"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Do the same with every component (button etc.) you want to customize:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"dnb-eufemia/src/components/button/style/themes/dnb-button-theme-<YOUR-THEME>.scss"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["and run ",(0,i.jsx)(n.code,{children:"yarn build"}),". All the related component theme file will then be created or updated."]}),"\n",(0,i.jsx)(n.h3,{children:"Run the Portal with a different theme"}),"\n",(0,i.jsxs)(n.p,{children:["What theme gets imported is handled in the Gatsby Plugin ",(0,i.jsx)(n.code,{children:"gatsby-plugin-eufemia-theme-handler"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"In the Portal Tools you can switch to a different theme (runtime)."}),"\n",(0,i.jsxs)(n.li,{children:["You can also define a different theme in the url itself ",(0,i.jsx)(n.code,{children:"path/?eufemia-theme=eiendom"})," (runtime)."]}),"\n",(0,i.jsxs)(n.li,{children:["Change the theme ",(0,i.jsx)(n.code,{children:"defaultTheme"})," name in the plugin options inside ",(0,i.jsx)(n.code,{children:"gatsby-config"})," (build-time)."]}),"\n",(0,i.jsxs)(n.li,{children:["Create a new ",(0,i.jsx)(n.code,{children:"/packages/dnb-design-system-portal/.env"})," file that includes e.g. ",(0,i.jsx)(n.code,{children:"GATSBY_EUFEMIA_THEME=eiendom"})," (build-time)."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{children:"Show theme tag in Portal"}),"\n",(0,i.jsxs)(n.p,{children:["Add the property ",(0,i.jsx)(n.code,{children:"theme: 'sbanken'"})," to the main ",(0,i.jsx)(n.code,{children:".mdx"})," file for a Portal page to show a tag next to it when that theme is selected. This is currently mainly intended for Sbanken."]}),"\n",(0,i.jsxs)(n.p,{children:["Example: ",(0,i.jsx)(n.code,{children:"/docs/components/button.mdx"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mdx",children:"---\ntitle: 'Button'\ndescription: 'The Button component should be used as the primary call-to-action in a form, or as a user interaction mechanism.'\nshowTabs: true\ntheme: 'sbanken'\n---\n"})}),"\n",(0,i.jsx)(n.h2,{children:"Component theming"}),"\n",(0,i.jsx)(n.p,{children:"All components have a style separation of:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"layout"})," where positioning and raw shapes are defined."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"skinning"})," where colors and peculiarity are defined."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This way we can create more easily custom skinned themes."}),"\n",(0,i.jsx)(n.h3,{children:"Button as an example"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["All the raw ",(0,i.jsx)(n.em,{children:"layout"})," related CSS properties are in this one file ",(0,i.jsx)(n.code,{children:"dnb-button.scss"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["While the theme file ",(0,i.jsx)(n.code,{children:"dnb-button-theme-ui.scss"})," contains colorization and font sizes (",(0,i.jsx)(n.em,{children:"skinning"}),")."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"/button/style/dnb-button.scss // layout styles\n/button/style/themes/dnb-button-theme-ui.scss // main theme styles\n/button/style/themes/dnb-button-theme-eiendom.scss// additional theme styles\n"})}),"\n",(0,i.jsxs)(n.p,{children:["How ",(0,i.jsx)(n.code,{children:"eiendom"})," is set up does not matter. It could either import parts from ",(0,i.jsx)(n.code,{children:"ui"})," or be maintained independently."]}),"\n",(0,i.jsx)(n.h3,{children:"CSS custom properties and :root"}),"\n",(0,i.jsx)(n.p,{children:"Whenever possible use Eufemia Properties inside Eufemia components."}),"\n",(0,i.jsxs)(n.p,{children:["When defining custom properties for a component, ",(0,i.jsx)(n.strong,{children:"prefer"})," to put them inside the component scope:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".dnb-button {\n  --text-size: var(--font-size-medium);\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In some circumstances, you may make them share-able and place them inside ",(0,i.jsx)(n.code,{children:":root"}),". They should then contain the component-name as a prefix."]}),"\n",(0,i.jsx)(n.h2,{children:"Local Theming setup"}),"\n",(0,i.jsxs)(n.p,{children:["There are several solutions to ",(0,i.jsx)(n.strong,{children:"create a new theme"}),".\nOne of which is by using the ",(0,i.jsx)(n.a,{href:"https://yarnpkg.com/lang/en/docs/cli/link/",children:"linking feature of Yarn"}),"."]}),"\n",(0,i.jsx)(n.h3,{children:"yarn link and SASS"}),"\n",(0,i.jsxs)(n.p,{children:["Make sure your project can handle ",(0,i.jsx)(n.strong,{children:"*.scss"})," files."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"1."})," make a copy of the ",(0,i.jsx)(n.a,{href:"https://github.com/dnbexperience/eufemia",children:"repository"}),". Place it somewhere locally on your machine"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"2."})," change your command line (Terminal) directory to the sub package ",(0,i.jsx)(n.code,{children:"@dnb/eufemia"})," (",(0,i.jsx)(n.em,{children:"eufemia/packages/eufemia"}),")"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"3."})," make the package ready for development by running:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ yarn install && yarn build && yarn link\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"4."})," on your application root directory, run:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'$ yarn link "@dnb/eufemia"\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"5."})," That's it. Now you can use (import/require) the NPM module in your application like:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { Button } from 'dnb-eufemia/components'\n\n// See the \"src\" in the path?\nimport 'dnb-eufemia/src/style/themes/theme-ui/ui-theme-[MY THEME].scss'\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"6."})," Don't forget to add ",(0,i.jsx)(n.code,{children:'"@dnb/eufemia": "*"'})," with the respective version (alongside React) to your dependencies:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'  "dependencies": {\n    "@dnb/eufemia": "x",\n    "react": "x",\n    "react-dom": "x",\n    ...\n  }\n'})}),"\n",(0,i.jsx)(n.h2,{children:"Chrome Extension: Eufemia Theme Manager"}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.a,{href:"https://chrome.google.com/webstore/detail/eufemia-theme-manager/pijolaebmeacaekbhoefjmhogckdcclb",children:"Chrome Browser Extension"})," to:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"test themes on web applications"}),"\n",(0,i.jsx)(n.li,{children:"create new possible themes"}),"\n",(0,i.jsx)(n.li,{children:"look how the outcome would be if a theme would be used"}),"\n",(0,i.jsx)(n.li,{children:"and create areas where a different or a modified theme would make more sense"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You can also download the ",(0,i.jsx)(n.a,{href:"https://github.com/dnbexperience/eufemia-theme-manager/raw/main/eufemia-theme-manager-extension/web-ext-artifacts/eufemia_theme_manager-latest.zip",children:"Chrome Browser Extension (ZIP)"}),", and install it manually in your browser. To do so, go to ",(0,i.jsx)(n.code,{children:"chrome://extensions"})," and drag & drop the downloaded ZIP file in the opened extensions tab."]}),"\n",(0,i.jsxs)(n.p,{children:["Contributions are welcome. Heres the ",(0,i.jsx)(n.a,{href:"https://github.com/dnbexperience/eufemia-theme-manager",children:"source code"}),"."]})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(r,e)})):r(e)}}}]);
//# sourceMappingURL=component---src-docs-contribute-style-guides-theming-mdx-af584d17c26fe4ca6ecc.js.map