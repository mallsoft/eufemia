"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[33901],{10028:function(e,n,s){s.r(n);var i=s(52322),t=s(45392),o=s(40185);function r(e){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",ul:"ul",li:"li",h3:"h3",a:"a",strong:"strong",pre:"pre"},(0,t.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"The Basics"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"@dnb/eufemia"})," is hosted on the global NPM registry. It includes all the necessary parts to build an independent layer on top of a frontend framework of your choice."]}),"\n",(0,i.jsx)(n.p,{children:"It is recommended to have an application setup with a compiling/build process in place."}),"\n",(0,i.jsx)(n.h2,{children:"HTML Elements and styling"}),"\n",(0,i.jsx)(n.p,{children:"There are three things going on once an HTML element is displayed and up-and-running:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Syntax as HTML"}),"\n",(0,i.jsx)(n.li,{children:"Styling by CSS"}),"\n",(0,i.jsx)(n.li,{children:"Internal states by JavaScript"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"From here we can redefine the properties of the HTML elements in order to customize them.\nWe can also bind event listeners to work together with your application."}),"\n",(0,i.jsx)(n.h3,{children:"Pixel Perfect"}),"\n",(0,i.jsx)(n.p,{children:"One of the most important reasons why Eufemia exists, is to make it easier to get a pixel perfect result when developing WEB Applications."}),"\n",(0,i.jsxs)(n.p,{children:["You will have come a long way to achieve this by using ",(0,i.jsx)(n.code,{children:"@dnb/eufemia"})," correctly:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Make sure you ",(0,i.jsx)(n.a,{href:"/uilib/usage/customisation/styling",children:"import the style packages correctly"})," (with or without CSS reset depending on your legacy code situation)"]}),"\n",(0,i.jsxs)(n.li,{children:["Always (mostly) use ",(0,i.jsx)(n.code,{children:"rem"}),' to the nearest "8px" value, like ',(0,i.jsx)(n.strong,{children:"1px = 0.0625rem"})," (1/16)"]}),"\n",(0,i.jsxs)(n.li,{children:["Always use the ",(0,i.jsx)(n.a,{href:"/uilib/elements",children:"HTML Elements"})," or ",(0,i.jsx)(n.a,{href:"/uilib/components",children:"UI Components"})]}),"\n",(0,i.jsxs)(n.li,{children:["Follow these ",(0,i.jsx)(n.a,{href:"/uilib/usage/best-practices/for-styling",children:"useful tips on styling"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Make sure you test your layout and styles for various conditions during and after development:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Up two 3x times in ",(0,i.jsx)(n.strong,{children:"font-size"})," (change the Web Browser default font size)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Zoom"})," the Web Browser up to 3x times"]}),"\n",(0,i.jsxs)(n.li,{children:["Make your layout ",(0,i.jsx)(n.strong,{children:"responsive"}),", either with CSS Grid or Media Queries"]}),"\n",(0,i.jsx)(n.li,{children:"Check the different screen sizes"}),"\n",(0,i.jsx)(n.li,{children:"Test your app on different devices and operating systems"}),"\n",(0,i.jsxs)(n.li,{children:["Pixel perfection is good for many, for the rest, make everything ",(0,i.jsx)(n.a,{href:"/uilib/usage/accessibility",children:"accessible for everyone"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{children:"States"}),"\n",(0,i.jsxs)(n.p,{children:["All the UI Components (and some HTML Elements) have individual interaction states. The look and feel is defined in the default ",(0,i.jsx)(n.a,{href:"/uilib/usage/customisation/theming",children:"theming file"})," (",(0,i.jsx)(n.strong,{children:"theme-ui"}),")."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"hover"}),"\n",(0,i.jsx)(n.li,{children:"active (TouchStart)"}),"\n",(0,i.jsx)(n.li,{children:"focus"}),"\n",(0,i.jsx)(n.li,{children:"disabled"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{children:"CSS Styles"}),"\n",(0,i.jsxs)(n.p,{children:["Read about ",(0,i.jsx)(n.a,{href:"/uilib/usage/customisation/styling",children:"how the styles are setup"})," and ",(0,i.jsx)(n.a,{href:"/uilib/usage/customisation/styling/consume-styles",children:"how to import the CSS"}),"."]}),"\n",(0,i.jsx)(n.h2,{children:"Compiler"}),"\n",(0,i.jsxs)(n.p,{children:["With ",(0,i.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," as our JavaScript runtime in place, we may use ES6 (ECMAScript 2015) to write our application. There are many frameworks and libraries to build user interfaces. If we take ",(0,i.jsx)(n.a,{href:"https://reactjs.org/docs/add-react-to-a-website.html#optional-try-react-with-jsx",children:"React JSX"})," as an starting point, we basically ",(0,i.jsx)(n.a,{href:"/uilib/usage/first-steps/react",children:"do this"}),":"]}),"\n",(0,i.jsx)(o.Vo,{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"// Define the imports\nimport { Button } from '@dnb/eufemia'\n\n// And consume the Component in your markup render method\nrender(<Button text=\"Primary Button\" />)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You also may ",(0,i.jsx)(n.a,{href:"/uilib/usage/customisation/styling/consume-styles",children:"import the styles"})," on a higher level in your application:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// e.g. in the App root\nimport '@dnb/eufemia/style'\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can also import a single style of one component at a time:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// Imports only the Button CSS and Main DNB Theme\nimport '@dnb/eufemia/components/button/style'\nimport '@dnb/eufemia/components/button/style/themes/ui'\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'<Button text="Button" on_click={myClickHandler} />\n'})}),"\n",(0,i.jsx)(n.h2,{children:"Importing components and elements"}),"\n",(0,i.jsxs)(n.p,{children:["By default, you can import ",(0,i.jsx)(n.code,{children:"components"})," and ",(0,i.jsx)(n.code,{children:"elements"})," from the root:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { Button } from '@dnb/eufemia'\n"})}),"\n",(0,i.jsxs)(n.p,{children:["As the ",(0,i.jsx)(n.code,{children:"@dnb/eufemia"})," uses ",(0,i.jsx)(n.a,{href:"/uilib/usage/first-steps/module-formats#default-module-format",children:"ESM"})," as its default module format, we get a good tree shaking with most of the bundler tools commonly used."]}),"\n",(0,i.jsx)(n.p,{children:"But you can be more specific if you want to:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { Button } from '@dnb/eufemia/components'\n"})}),"\n",(0,i.jsx)(n.p,{children:"And even go further:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import Button from '@dnb/eufemia/components/Button'\n\n// or\n\nimport Button from '@dnb/eufemia/components/button/Button'\n"})}),"\n",(0,i.jsx)(n.h3,{children:"Importing extensions"}),"\n",(0,i.jsxs)(n.p,{children:["Extensions you would have to import explicitly from ",(0,i.jsx)(n.code,{children:"/extensions"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { ... } from '@dnb/eufemia/extensions'\n"})}),"\n",(0,i.jsx)(n.h3,{children:"Importing icons"}),"\n",(0,i.jsxs)(n.p,{children:["The same applies to icons, you would have to import them explicitly from ",(0,i.jsx)(n.code,{children:"/icons"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { bell_medium as Bell } from '@dnb/eufemia/icons'\n\n// or\n\nimport Bell from '@dnb/eufemia/icons/bell'\nimport BellMedium from '@dnb/eufemia/icons/bell_medium'\n"})}),"\n",(0,i.jsx)(n.h2,{children:"UMD"}),"\n",(0,i.jsxs)(n.p,{children:["In case you don't have a compiling/build process, you can use the UMD packed version of the ",(0,i.jsx)(n.code,{children:"@dnb/eufemia"}),". Take a look into this repo and the ",(0,i.jsx)(n.a,{href:"https://github.com/dnbexperience/eufemia-examples/tree/main/packages/example-html/static",children:"UMD example usage"}),". But this will not optimize your code for the best user experience."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<html>\n  <head>\n    ...\n    <link\n      rel="stylesheet"\n      href="https://unpkg.com/@dnb/eufemia@latest/style/dnb-ui-core.min.css"\n    />\n    <link\n      rel="stylesheet"\n      href="https://unpkg.com/@dnb/eufemia@latest/style/themes/theme-ui/ui-theme-components.min.css"\n    />\n    <link\n      rel="stylesheet"\n      href="https://unpkg.com/@dnb/eufemia@latest/style/themes/theme-ui/ui-theme-basis.min.css"\n    />\n  </head>\n  <body>\n    ...\n    <script src="https://unpkg.com/@dnb/eufemia@latest/umd/dnb-ui-icons.min.js"><\/script>\n    <script src="https://unpkg.com/@dnb/eufemia@latest/umd/dnb-ui-lib.min.js"><\/script>\n  </body>\n</html>\n'})})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(r,e)})):r(e)}},40185:function(e,n,s){s.d(n,{CQ:function(){return o},SM:function(){return r},Vo:function(){return l}});var i=s(58901),t=s(52322);const o=()=>(0,t.jsx)(i.Z,{children:'<Button text="Basic Button" />\n'}),r=()=>(0,t.jsx)(i.Z,{children:"<Button text=\"Button\" on_click={() => console.log('click')} />\n"}),l=()=>(0,t.jsx)(i.Z,{hideCode:!0,hideToolbar:!0,children:'<Button text="Primary Button" />\n'})}}]);
//# sourceMappingURL=component---src-docs-uilib-usage-first-steps-the-basics-mdx-8ebebaa02cb522ee4515.js.map