"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[60983],{8129:function(n,t,e){e.r(t);var i=e(52322),o=e(45392),r=e(49938);function c(n){const t=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",strong:"strong"},(0,o.ah)(),n.components),{VisibilityByTheme:e}=t;return e||function(n,t){throw new Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("VisibilityByTheme",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:"Demos"}),"\n",(0,i.jsx)(t.h3,{children:"Primary button"}),"\n",(0,i.jsx)(r.DF,{}),"\n",(0,i.jsx)(t.h3,{children:"Secondary button"}),"\n",(0,i.jsx)(r.PL,{}),"\n",(0,i.jsx)(t.h3,{children:"Primary button with icon"}),"\n",(0,i.jsx)(r.ij,{}),"\n",(0,i.jsx)(t.h3,{children:"Primary button with icon on left"}),"\n",(0,i.jsx)(r.y,{}),"\n",(0,i.jsx)(t.h3,{children:"Tertiary button"}),"\n",(0,i.jsxs)(t.p,{children:["The tertiary button variant does support newlines while the icon is placed top aligned. You can enable multiline support with the ",(0,i.jsx)(t.code,{children:"wrap"})," property."]}),"\n",(0,i.jsx)(r.oM,{}),"\n",(0,i.jsxs)(t.p,{children:["Tertiary button with ",(0,i.jsx)(t.strong,{children:"top"})," placed icon."]}),"\n",(0,i.jsx)(r.zh,{}),"\n",(0,i.jsxs)(t.p,{children:["Tertiary button with long text and text ",(0,i.jsx)(t.code,{children:"wrap"})," enabled."]}),"\n",(0,i.jsx)(r.iE,{}),"\n",(0,i.jsx)(t.h3,{children:"Anchor button"}),"\n",(0,i.jsx)(r.zx,{}),"\n",(0,i.jsx)(t.h3,{children:"Disabled buttons"}),"\n",(0,i.jsx)(r.Eq,{}),"\n",(0,i.jsx)(t.h3,{children:"Error state"}),"\n",(0,i.jsx)(t.p,{children:"Buttons can have an error state"}),"\n",(0,i.jsx)(r.jm,{}),"\n",(0,i.jsxs)(e,{hidden:"sbanken",children:[(0,i.jsx)(t.h3,{children:"Signal button"}),(0,i.jsxs)(t.p,{children:["Medium is equivalent to 24, but responsive. To import custom icons, use: ",(0,i.jsx)(t.code,{children:"import { bell_medium as Bell } from '@dnb/eufemia/icons'"})]}),(0,i.jsx)(r.Cr,{}),(0,i.jsx)(t.h3,{children:"Large Signal button"}),(0,i.jsxs)(t.p,{children:["Large Signal button with medium sized icon. To import custom icons, use: ",(0,i.jsx)(t.code,{children:"import { bell_medium as Bell } from '@dnb/eufemia/icons'"})]}),(0,i.jsx)(r.CG,{})]}),"\n",(0,i.jsx)(t.h3,{children:"Icon button"}),"\n",(0,i.jsx)(r.Ei,{}),"\n",(0,i.jsx)(t.h3,{children:"Custom button content"}),"\n",(0,i.jsx)(t.p,{children:"This is, as all of the demos, only an example of how to achieve various needs, and not that you should do it."}),"\n",(0,i.jsx)(r.RS,{})]})}t.default=function(n){void 0===n&&(n={});const{wrapper:t}=Object.assign({},(0,o.ah)(),n.components);return t?(0,i.jsx)(t,Object.assign({},n,{children:(0,i.jsx)(c,n)})):c(n)}},49938:function(n,t,e){e.d(t,{CG:function(){return p},Cr:function(){return B},DF:function(){return l},Ei:function(){return m},Eq:function(){return u},Gb:function(){return D},HL:function(){return Z},LS:function(){return w},PL:function(){return s},RS:function(){return f},a1:function(){return j},fb:function(){return L},iE:function(){return v},ij:function(){return h},jm:function(){return d},oM:function(){return x},oq:function(){return z},pP:function(){return T},qS:function(){return k},y:function(){return b},zM:function(){return _},zh:function(){return g},zx:function(){return y}});var i=e(58901),o=e(84385),r=e(46515),c=e(49502),a=e(52322);const l=()=>(0,a.jsx)(i.Z,{children:'<Button\n  text="Primary button with text only"\n  on_click={() => {\n    console.log(\'on_click\')\n  }}\n  data-visual-test="button-primary"\n/>\n'}),s=()=>(0,a.jsx)(i.Z,{children:'<Button\n  variant="secondary"\n  onClick={() => {\n    console.log(\'onClick\')\n  }}\n  data-visual-test="button-secondary"\n>\n  Secondary button with text only\n</Button>\n'}),u=()=>(0,a.jsx)(i.Z,{"data-visual-test":"button-disabled",children:'\n<Button text="Disabled primary button" disabled right />\n<Button\n  text="Disabled secondary button"\n  variant="secondary"\n  disabled\n  right\n/>\n<Button\n  text="Disabled tertiary button"\n  variant="tertiary"\n  disabled\n  right\n/>\n<Button title="Disabled Icon Button" icon="calendar" disabled right />\n\n'}),d=()=>(0,a.jsx)(i.Z,{scope:{question:o.Z},"data-visual-test":"button-error",children:'\n<Button\n  text="Primary button error"\n  status="error"\n  data-visual-test="button-error-primary"\n/>\n<Button\n  text="Secondary button error"\n  variant="secondary"\n  status="error"\n  left\n  data-visual-test="button-error-secondary"\n/>\n<Button\n  title="Primary icon button error"\n  variant="primary"\n  icon={question}\n  size="default"\n  status="error"\n  left\n/>\n<Button\n  title="Secondary icon button error"\n  icon={question}\n  size="default"\n  status="error"\n  left\n/>\n\n'}),h=()=>(0,a.jsx)(i.Z,{children:'<Button text="Primary button with icon" icon="chevron_right" />\n'}),b=()=>(0,a.jsx)(i.Z,{children:'<Button icon_position="left" icon="chevron_left">\n  Primary button with icon on left\n</Button>\n'}),x=()=>(0,a.jsx)(i.Z,{"data-visual-test":"button-tertiary-all",children:'\n<Button\n  variant="tertiary"\n  text="Tertiary button with icon on left"\n  icon_position="left"\n  icon="chevron_left"\n  data-visual-test="button-tertiary"\n/>\n<Button\n  variant="tertiary"\n  text={<span>Text inside additional span</span>}\n  icon_position="left"\n  icon="chevron_left"\n  left\n/>\n\n'}),g=()=>(0,a.jsx)(i.Z,{"data-visual-test":"button-tertiary-top",children:'\n<Button\n  variant="tertiary"\n  icon_position="top"\n  icon="close"\n  text="Button text"\n/>\n<Button\n  variant="tertiary"\n  icon_position="top"\n  icon="close"\n  text="Large button"\n  size="large"\n/>\n\n'}),f=()=>(0,a.jsx)(i.Z,{"data-visual-test":"button-custom-content",children:'<Button\n  icon="close"\n  icon_position="right"\n  text="Button with custom content"\n  custom_content={<IconPrimary icon="check" right="small" />}\n/>\n'}),v=()=>(0,a.jsx)(i.Z,{"data-visual-test":"button-tertiary-wrap",children:'<Button\n  wrap\n  variant="tertiary"\n  text="A long text where wrap is enabled magnis rutrum netus neque ridiculus euismod sit dictum laoreet libero"\n  icon="chevron_left"\n  icon_position="left"\n/>\n'}),y=()=>(0,a.jsx)(i.Z,{"data-visual-test":"button-anchor",children:'\n<Button\n  text="Primary with href"\n  href="/uilib/components/button/demos"\n  icon_position="right"\n  icon="chevron_right"\n  on_click={({ event }) => {\n    event.preventDefault()\n  }}\n  right\n/>\n<Button\n  variant="secondary"\n  text="Secondary with href"\n  href="/uilib/components/button/demos"\n  target="_blank"\n  right\n/>\n<Button\n  href="/uilib/components/button/demos"\n  title="This is a link"\n  icon="chevron_right"\n  size="default"\n  right\n/>\n\n'}),B=()=>(0,a.jsx)(i.Z,{scope:{Bell:r.Z},children:'<Button\n  variant="signal"\n  text="Signal Button"\n  icon={Bell}\n  data-visual-test="button-signal"\n/>\n'}),p=()=>(0,a.jsx)(i.Z,{scope:{Bell:r.Z},children:'<Button\n  variant="signal"\n  text="Large Signal Button"\n  icon={<Bell />}\n  size="large"\n  icon_size="medium"\n/>\n'}),m=()=>(0,a.jsx)(i.Z,{scope:{question:o.Z,VisibilityByTheme:c.Z},"data-visual-test":"button-icons",children:'\n<Button\n  title="Disabled Icon only Button"\n  icon="calendar"\n  disabled\n  right\n/>\n<Button\n  title="Button with Icon only"\n  icon="calendar"\n  data-visual-test="button-icon"\n/>\n<Button title="Small sized icon button" icon="add" size="small" left />\n<Button\n  title="Large sized icon button"\n  icon={question}\n  size="large"\n  left\n/>\n<Button\n  title="Icon button with status"\n  icon={question}\n  status="error"\n  left\n/>\n<VisibilityByTheme visible="sbanken">\n  <Button\n    title="Tertiary icon button"\n    size="large"\n    icon={question}\n    variant="tertiary"\n    data-visual-test="button-icon-tertiary"\n  />\n</VisibilityByTheme>\n\n'}),_=()=>(0,a.jsx)(i.Z,{"data-visual-test":"button-tertiary-no-icon",children:'<Button text="Tertiary button with no icon" variant="tertiary" />\n'}),j=()=>(0,a.jsx)(i.Z,{"data-visual-test":"button-unstyled",children:'<Button text="Unstyled button with icon" icon="bell" variant="unstyled" />\n'}),k=()=>(0,a.jsx)(i.Z,{scope:{Bell:r.Z},children:'<Button\n  text="A stretched button"\n  icon={<Bell />}\n  size="large"\n  data-visual-test="button-stretch"\n/>\n'}),z=()=>(0,a.jsx)(i.Z,{scope:{Bell:r.Z},hideCode:!0,children:'\n<Button\n  text="Default button"\n  on_click={() => {\n    console.log(\'on_click\')\n  }}\n/>\n<Button\n  text="Large button"\n  on_click={() => {\n    console.log(\'on_click\')\n  }}\n  size="large"\n  left\n/>\n<Button\n  text="Default button icon"\n  on_click={() => {\n    console.log(\'on_click\')\n  }}\n  icon="chevron_right"\n  left\n/>\n<Button\n  text="Large button icon"\n  on_click={() => {\n    console.log(\'on_click\')\n  }}\n  size="large"\n  icon="chevron_right"\n  left\n/>\n\n'}),w=()=>(0,a.jsx)(i.Z,{scope:{Bell:r.Z},hideCode:!0,children:'\n<Button\n  text="Default button"\n  on_click={() => {\n    console.log(\'on_click\')\n  }}\n  variant="secondary"\n/>\n<Button\n  text="Large button"\n  on_click={() => {\n    console.log(\'on_click\')\n  }}\n  size="large"\n  variant="secondary"\n  left\n/>\n<Button\n  text="Default button icon"\n  on_click={() => {\n    console.log(\'on_click\')\n  }}\n  icon="chevron_right"\n  variant="secondary"\n  left\n/>\n<Button\n  text="Large button icon"\n  on_click={() => {\n    console.log(\'on_click\')\n  }}\n  size="large"\n  icon="chevron_right"\n  variant="secondary"\n  left\n/>\n\n'}),Z=()=>(0,a.jsx)(i.Z,{scope:{Bell:r.Z},hideCode:!0,children:'\n<Button\n  text="Default button"\n  on_click={() => {\n    console.log(\'on_click\')\n  }}\n  icon="chevron_right"\n  variant="tertiary"\n/>\n<Button\n  text="Button large"\n  on_click={() => {\n    console.log(\'on_click\')\n  }}\n  icon="chevron_right"\n  variant="tertiary"\n  size="large"\n  left\n/>\n<Button\n  text="Button text"\n  on_click={() => {\n    console.log(\'on_click\')\n  }}\n  icon="bell"\n  icon_position="top"\n  variant="tertiary"\n  left\n/>\n\n'}),D=()=>(0,a.jsx)(i.Z,{scope:{Bell:r.Z},hideCode:!0,children:'\n<Button\n  text="Default button"\n  on_click={() => {\n    console.log(\'on_click\')\n  }}\n  variant="signal"\n/>\n<Button\n  text="Large button"\n  on_click={() => {\n    console.log(\'on_click\')\n  }}\n  size="large"\n  variant="signal"\n  left\n/>\n<Button\n  text="Default button icon"\n  on_click={() => {\n    console.log(\'on_click\')\n  }}\n  icon="chevron_right"\n  variant="signal"\n  left\n/>\n<Button\n  text="Large button icon"\n  on_click={() => {\n    console.log(\'on_click\')\n  }}\n  size="large"\n  icon="chevron_right"\n  variant="signal"\n  left\n/>\n\n'}),T=()=>(0,a.jsx)(i.Z,{hideCode:!0,children:'\n<Button\n  title="Small sized button with add icon"\n  icon="add"\n  size="small"\n/>\n<Button\n  title="Medium sized button with add icon (default)"\n  icon="add"\n  size="medium"\n  left\n/>\n<Button\n  title="Default sized button with add icon (not default)"\n  icon="add"\n  size="default"\n  left\n/>\n<Button\n  title="Large sized button with add icon"\n  icon="add"\n  size="large"\n  left\n/>\n\n'}),L=()=>(0,a.jsx)(i.Z,{"data-visual-test":"button-tertiary-alignment",children:'\n<span className="dnb-p">text</span>{\' \'}\n<Button text="right" variant="tertiary" icon="chevron_right" />\n<Button\n  text="left"\n  variant="tertiary"\n  icon_position="left"\n  icon="chevron_left"\n/>\n<br />\n<Button\n  text="right medium"\n  variant="tertiary"\n  icon="chevron_right"\n  icon_size="medium"\n/>\n<Button\n  text="left medium"\n  variant="tertiary"\n  icon_position="left"\n  icon="chevron_left"\n  icon_size="medium"\n/>\n<br />\n<Button\n  text="right large"\n  variant="tertiary"\n  icon="chevron_right"\n  icon_size="large"\n/>\n<Button\n  text="left large"\n  variant="tertiary"\n  icon_position="left"\n  icon="chevron_left"\n  icon_size="large"\n/>\n<br />\n<Button variant="tertiary" icon="chevron_right" />\n<Button variant="tertiary" icon="chevron_right" icon_size="medium" />\n<Button variant="tertiary" icon="chevron_right" icon_size="large" />{\' \'}\n<span className="dnb-p">text</span>\n\n'})}}]);
//# sourceMappingURL=component---src-docs-uilib-components-button-demos-mdx-932b5720d2f479594320.js.map