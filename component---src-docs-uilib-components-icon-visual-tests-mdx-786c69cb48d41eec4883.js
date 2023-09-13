"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[91706],{46676:function(n,e,o){o.r(e);var i=o(52322),t=o(45392),l=o(69100);function c(n){const{VisibleWhenVisualTest:e}=Object.assign({},(0,t.ah)(),n.components);return e||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("VisibleWhenVisualTest",!0),(0,i.jsxs)(e,{children:[(0,i.jsx)(l.f7,{}),(0,i.jsx)(l.aL,{}),(0,i.jsx)(l.ym,{})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(c,n)})):c(n)}},69100:function(n,e,o){o.d(e,{QL:function(){return a},aL:function(){return I},bM:function(){return m},f7:function(){return h},ym:function(){return b},zA:function(){return u},zo:function(){return p}});o(2784);var i=o(58901),t=o(79357),l=o(46515),c=o(26531),r=o(25592),s=o(7260),d=o(52322);const a=()=>(0,d.jsx)(i.Z,{"data-visual-test":"icon-default",scope:{Bell:t.Z,BellMedium:l.Z},children:'\n<Icon icon={Bell} title="Give Icons a Title, or ..." />\n<Icon icon={BellMedium} aria-hidden />\n<Bell title="I\'m not responsive!" />\n{/* <- Not responsive! */}\n\n'}),u=()=>(0,d.jsx)(i.Z,{"data-visual-test":"icon-border",scope:{Bell:t.Z,BellMedium:l.Z},children:'<P>\n  <Icon border={true} icon={Bell} right />\n  <Icon border={true} icon={BellMedium} size="medium" right />\n  <IconPrimary border={true} icon={\'information\'} right />\n  <IconPrimary border={true} icon={\'information\'} size="medium" right />\n  <Button icon={<IconPrimary icon="add" border />} text="Button" />\n</P>\n'}),m=()=>(0,d.jsx)(i.Z,{"data-visual-test":"icon-inherit-sized",scope:{Bell:t.Z,BellMedium:l.Z},children:'<h1 className="dnb-h--xx-large">\n  h1 with auto sized <Icon icon={BellMedium} size="auto" aria-hidden />{\' \'}\n  icon\n</h1>\n'}),I=()=>(0,d.jsx)(i.Z,{"data-visual-test":"icon-medium",scope:{Bell:t.Z,BellMedium:l.Z},children:'\n<Icon icon={BellMedium} size="16" title="force default size" />\n<Icon icon={BellMedium} title="is medium anyway" />\n<Icon icon={Bell} size="medium" title="force medium size" />\n<Icon icon={Bell} size="24" title="custom size: size=24" />\n<Icon icon={Bell} width="24" height="24" title="not responsive" />\n\n'}),h=()=>(0,d.jsx)(i.Z,{"data-visual-test":"icon-alignment",scope:{Bell:t.Z,BellMedium:l.Z},noInline:!0,children:'const ColoredP = styled(P)`\n  display: inline-block;\n  background-color: yellowgreen;\n`\nconst ColoredH = styled(H2)`\n  display: inline-block;\n  margin: 0 0 0.5rem 0 !important;\n  background-color: yellowgreen;\n`\nconst ColoredIcon = styled(Icon)`\n  background-color: yellow;\n`\nrender(\n  <div className="dnb-core-style">\n    <ColoredH>\n      <ColoredIcon icon={Bell} />\n      Text\n    </ColoredH>\n    <br />\n    <ColoredP>\n      <ColoredIcon icon={Bell} />\n      Text\n    </ColoredP>\n  </div>,\n)\n'}),f=()=>(0,d.jsx)(i.Z,{"data-visual-test":"icon-all-primary",scope:{getListOfIcons:s.x,PrimaryIconsMedium:c},noInline:!0,children:'const Icons = () => (\n  <>\n    {getListOfIcons(PrimaryIconsMedium).map(({ iconName, Svg }) => {\n      return (\n        <Icon\n          title={iconName}\n          key={iconName}\n          icon={Svg}\n          size="medium"\n          right="small"\n          bottom="small"\n        />\n      )\n    })}\n  </>\n)\nrender(<Icons />)\n'}),g=()=>(0,d.jsx)(i.Z,{"data-visual-test":"icon-all-secondary",scope:{getListOfIcons:s.x,SecondaryIconsMedium:r},noInline:!0,children:'const uniqueList = {}\nconst Icons = () => (\n  <>\n    {getListOfIcons(SecondaryIconsMedium).map(({ iconName, Svg }) => {\n      if (uniqueList[iconName]) {\n        console.warn(\'The icon is already used:\', iconName, Svg)\n      }\n      uniqueList[iconName] = true\n      return (\n        <Icon\n          title={iconName}\n          key={iconName}\n          icon={Svg}\n          size="medium"\n          right="small"\n          bottom="small"\n        />\n      )\n    })}\n  </>\n)\nrender(<Icons />)\n'}),p=()=>(0,d.jsx)(i.Z,{"data-visual-test":"icon-colors",scope:{BellMedium:l.Z},children:'\n<Icon\n  icon={BellMedium}\n  color="var(--color-fire-red)"\n  title="CSS variable"\n/>\n<Icon icon={BellMedium} color="#DC2A2A" title="Hex" />\n<Icon icon={BellMedium} color="rgb(220,42,42)" title="RGB" />\n\n'});function b(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(f,{}),(0,d.jsx)(g,{})]})}}}]);
//# sourceMappingURL=component---src-docs-uilib-components-icon-visual-tests-mdx-786c69cb48d41eec4883.js.map