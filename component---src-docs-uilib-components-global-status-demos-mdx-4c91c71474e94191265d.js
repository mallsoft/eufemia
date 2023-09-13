"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[24037],{47304:function(t,n,e){e.r(n);var s=e(52322),o=e(45392),a=e(46463);function i(t){const n=Object.assign({h2:"h2",h3:"h3",p:"p",strong:"strong",code:"code"},(0,o.ah)(),t.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{children:"Demos"}),"\n",(0,s.jsx)(n.h3,{children:"GlobalStatus displaying error status"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"NB:"})," Keep in mind, the ",(0,s.jsx)(n.code,{children:"items"})," are handled automatically by all form components! This is just an example of how to define the content manually."]}),"\n",(0,s.jsx)(a.ve,{}),"\n",(0,s.jsx)(n.h3,{children:"GlobalStatus displaying info status"}),"\n",(0,s.jsx)(a.Ru,{}),"\n",(0,s.jsx)(n.h3,{children:"GlobalStatus displaying warning status"}),"\n",(0,s.jsx)(a.O4,{}),"\n",(0,s.jsx)(n.h3,{children:"GlobalStatus displaying success status"}),"\n",(0,s.jsx)(a.tb,{}),"\n",(0,s.jsxs)(n.h3,{children:["To showcase the automated coupling between ",(0,s.jsx)(n.strong,{children:"FormStatus"})," and ",(0,s.jsx)(n.strong,{children:"GlobalStatus"})]}),"\n",(0,s.jsx)(a.Hm,{}),"\n",(0,s.jsx)(n.h3,{children:"GlobalStatus and update routines"}),"\n",(0,s.jsx)(a.Vo,{}),"\n",(0,s.jsxs)(n.h3,{children:["To showcase the custom ",(0,s.jsx)(n.strong,{children:"Update"})," and ",(0,s.jsx)(n.strong,{children:"Remove"})," possibility"]}),"\n",(0,s.jsx)(a.kP,{}),"\n",(0,s.jsx)(n.h3,{children:"To showcase the scrolling"}),"\n",(0,s.jsx)(a.cQ,{})]})}n.default=function(t){void 0===t&&(t={});const{wrapper:n}=Object.assign({},(0,o.ah)(),t.components);return n?(0,s.jsx)(n,Object.assign({},t,{children:(0,s.jsx)(i,t)})):i(t)}},46463:function(t,n,e){e.d(n,{Am:function(){return p},Hm:function(){return u},NP:function(){return g},O4:function(){return l},O9:function(){return f},Oz:function(){return x},Pe:function(){return h},RV:function(){return _},Ru:function(){return i},Vo:function(){return m},Yz:function(){return b},cQ:function(){return c},kP:function(){return d},tb:function(){return r},ve:function(){return a}});e(2784);var s=e(58901),o=e(52322);const a=()=>(0,o.jsx)(s.Z,{"data-visual-test":"global-status",children:"<GlobalStatus\n  title=\"Custom Title\"\n  text=\"Failure text\"\n  items={[\n    {\n      text: 'List item',\n      status_anchor_url: '/uilib/components/global-status',\n      status_anchor_label: 'eksempel',\n    },\n  ]}\n  show={true}\n  autoscroll={false}\n  no_animation={true}\n  omit_set_focus={true}\n  id=\"demo-1\"\n/>\n"}),i=()=>(0,o.jsx)(s.Z,{"data-visual-test":"global-status-info",children:'<GlobalStatus\n  state="info"\n  title="Custom info title ..."\n  text="Long info nisl tempus hendrerit tortor dapibus nascetur taciti porta risus cursus fusce platea enim curabitur proin nibh ut luctus magnis metus"\n  items={[\'Status text 1\', \'Status text 2\']}\n  show={true}\n  autoscroll={false}\n  no_animation={true}\n  omit_set_focus={true}\n  id="demo-4"\n/>\n'}),l=()=>(0,o.jsx)(s.Z,{children:'<GlobalStatus\n  state="warning"\n  title="Custom warning title ..."\n  text="A string of text providing a warning or semi-urgent message of some kind to the user"\n  show={true}\n  autoscroll={false}\n  no_animation={true}\n  omit_set_focus={true}\n  id="demo-5"\n/>\n'}),r=()=>(0,o.jsx)(s.Z,{children:'<GlobalStatus\n  state="success"\n  title="Custom success title ..."\n  text="A string of text providing a success message of some kind to the user"\n  show={true}\n  autoscroll={false}\n  no_animation={true}\n  omit_set_focus={true}\n  id="demo-6"\n/>\n'}),u=()=>(0,o.jsx)(s.Z,{noInline:!0,children:"const InputWithError = () => {\n  const [errorMessage, setErrorMessage] = React.useState(null)\n  return (\n    <Input\n      label=\"Input:\"\n      placeholder=\"Write less than 5 chars and dismiss the focus to show the GlobalStatus ...\"\n      stretch\n      status={errorMessage}\n      on_blur={({ value }) => {\n        setErrorMessage(value.length <= 4 ? 'With a message shown' : null)\n      }}\n      globalStatus={{\n        id: 'main-status',\n      }}\n    />\n  )\n}\nrender(<InputWithError />)\n"}),d=()=>(0,o.jsx)(s.Z,{hideCode:!0,noInline:!0,children:'function AddRemoveItems() {\n  const [count, toggleUpdateStatus] = React.useState(0)\n  return (\n    <>\n      <GlobalStatus\n        id="custom-status"\n        autoscroll={false}\n        on_close={() => toggleUpdateStatus(0)}\n        on_hide={() => toggleUpdateStatus(0)}\n      />\n      <Button\n        text={\'Show step #\' + count}\n        on_click={() => {\n          toggleUpdateStatus(count + 1)\n          if (count >= 3) {\n            toggleUpdateStatus(0)\n          }\n        }}\n        top="small"\n      />\n      {count === 1 && (\n        <>\n          <GlobalStatus.Add\n            id="custom-status"\n            status_id="custom-id-1"\n            title="New title"\n            text="First long info text ..."\n            item="Item from status #1"\n            on_close={({ status_id }) => {\n              console.log(\'on_close 1\', status_id)\n            }}\n          />\n          <GlobalStatus.Add\n            id="custom-status"\n            status_id="custom-id-2"\n            text="Second long info text ..."\n            item="Item from status #2"\n            on_close={({ status_id }) => {\n              console.log(\'on_close 2\', status_id)\n            }}\n          />\n        </>\n      )}\n      {count === 2 && (\n        <GlobalStatus.Remove id="custom-status" status_id="custom-id-2" />\n      )}\n      {count === 3 && (\n        <GlobalStatus.Remove id="custom-status" status_id="custom-id-1" />\n      )}\n    </>\n  )\n}\nrender(<AddRemoveItems />)\n'}),c=()=>(0,o.jsx)(s.Z,{hideCode:!0,children:"<Button\n  text=\"Scroll to main GlobalStatus\"\n  on_click={() => {\n    GlobalStatus.Update({\n      id: 'main-status',\n      text: 'Dui consectetur viverra aenean vestibulum ac tristique sem ligula condimentum',\n    })\n  }}\n/>\n"}),m=()=>(0,o.jsx)(s.Z,{hideCode:!0,noInline:!0,children:'const Context = React.createContext(null)\nconst UpdateDemo = () => {\n  const [errorA, setErrorA] = React.useState(false)\n  const [errorB, setErrorB] = React.useState(false)\n  const [isVisible, setVisibility] = React.useState(false)\n  return (\n    <Context.Provider\n      value={{\n        errorA,\n        errorB,\n        setErrorA,\n        setErrorB,\n        isVisible,\n        setVisibility,\n      }}\n    >\n      <UpdateDemoStatus />\n      <UpdateDemoTools />\n    </Context.Provider>\n  )\n}\nconst UpdateDemoStatus = () => {\n  const { errorA, errorB, setErrorA, setErrorB } =\n    React.useContext(Context)\n  return (\n    <>\n      <GlobalStatus title="Custom Title" text="Failure text" id="demo-2" />\n      <Input\n        top\n        right\n        label="Label A:"\n        placeholder="Placeholder A"\n        status={errorA}\n        globalStatus={{\n          id: \'demo-2\',\n        }}\n        on_change={({ value }) => {\n          setErrorA(value)\n        }}\n      />\n      <Input\n        top\n        label="Label B:"\n        placeholder="Placeholder B"\n        status={errorB}\n        globalStatus={{\n          id: \'demo-2\',\n        }}\n        on_change={({ value }) => {\n          setErrorB(value)\n        }}\n      />\n    </>\n  )\n}\nconst UpdateDemoTools = () => {\n  const {\n    errorA,\n    errorB,\n    setErrorA,\n    setErrorB,\n    isVisible,\n    setVisibility,\n  } = React.useContext(Context)\n\n  // Only to demonstrate the usage of an interceptor situation\n  const inst = React.useRef(null)\n  React.useEffect(() => {\n    if (!inst.current) {\n      inst.current = GlobalStatus.create({\n        id: \'demo-2\',\n        title: \'New Title\',\n        text: \'New Text\',\n        status_id: \'custom-item\',\n        show: false,\n      })\n      inst.current.update({\n        on_show: () => {\n          console.log(\'on_show\')\n          if (!isVisible) {\n            setVisibility(true)\n          }\n        },\n        on_hide: () => {\n          console.log(\'on_hide\')\n          setVisibility(false)\n        },\n        on_close: () => {\n          console.log(\'on_close\')\n          setVisibility(false)\n        },\n      })\n    }\n    inst.current.update({\n      show: isVisible,\n    })\n  }, [isVisible])\n  React.useEffect(() => () => inst.current.remove(), [])\n  return (\n    <Section top spacing style_type="divider">\n      <ToggleButton\n        text="Toggle"\n        variant="checkbox"\n        right\n        checked={isVisible}\n        on_change={({ checked }) => {\n          setVisibility(checked)\n        }}\n      />\n      <Button\n        text="Reset"\n        variant="tertiary"\n        icon="reset"\n        disabled={!(errorA || errorB)}\n        on_click={() => {\n          setErrorA(null)\n          setErrorB(null)\n        }}\n      />\n    </Section>\n  )\n}\nrender(<UpdateDemo />)\n'}),h=()=>(0,o.jsx)(s.Z,{hidePreview:!0,hideToolbar:!0,children:'<GlobalStatus id="other-global-status" />\n'}),b=()=>(0,o.jsx)(s.Z,{hidePreview:!0,hideToolbar:!0,children:"\n<GlobalStatus id=\"other-global-status\" />\n<Input\n  globalStatus={{\n    id: 'other-global-status',\n  }}\n/>\n\n"}),g=()=>(0,o.jsx)(s.Z,{hidePreview:!0,hideToolbar:!0,children:'\n<GlobalStatus id="other-global-status" />\n<FormSet\n  globalStatus={{\n    id: \'other-global-status\',\n  }}\n>\n  <Input status="Message" />\n</FormSet>\n\n'}),x=()=>(0,o.jsx)(s.Z,{hidePreview:!0,hideToolbar:!0,noInline:!0,children:"// 1. Update / extend the the status like so:\n\nconst statusOne = GlobalStatus.create({\n  id: 'other-global-status',\n  // or main\n  status_id: 'custom-id-1',\n  text: 'New Text',\n  item: 'Item from status #1',\n  title: 'New Title',\n  show: true,\n})\n\n// 2. and removes \"custom-id-1\" again if needed\n\nstatusOne.update({\n  text: 'Updated Text',\n})\n\n// 3. and removes \"custom-id-1\" again if needed\nstatusOne.remove()\nrender(<GlobalStatus id=\"other-global-status\" />)\n"}),_=()=>(0,o.jsx)(s.Z,{hidePreview:!0,hideToolbar:!0,children:'\n{/* 1. Place it under the header bar */}\n<GlobalStatus text="Optional default text" />\n{/* 2. later on, you can show a message */}\n<GlobalStatus.Add\n  id="custom-id"\n  status_id="custom-id-1"\n  title="New title"\n  text="First long info text ..."\n  item="Item from status #1"\n  on_close={({ status_id }) => {\n    console.log(\'on_close\', status_id)\n  }}\n/>\n{/* 3. and remove it again */}\n<GlobalStatus.Remove id="custom-id" status_id="custom-id-1" />\n\n'}),p=()=>(0,o.jsx)(s.Z,{hidePreview:!0,hideToolbar:!0,children:'\n{/* 1. Place it somewhere in your application */}\n<GlobalStatus id="custom-status" />\n{/* 2. later on, you can show a message */}\n<GlobalStatus.Add\n  id="custom-status"\n  status_id="custom-id-1"\n  title="New title"\n  text="First long info text ..."\n  item="Item from status #1"\n  on_close={({ status_id }) => {\n    console.log(\'on_close\', status_id)\n  }}\n/>\n{/* 3. and remove it again */}\n<GlobalStatus.Remove id="custom-status" status_id="custom-id-1" />\n\n'}),f=()=>(0,o.jsx)(s.Z,{hidePreview:!0,hideToolbar:!0,children:'\n{/* Place the status where ever you have to.*/}\n<GlobalStatus id="custom-id" />\n{/* Manipulate the status later on. Every property is optional.*/}\n<GlobalStatus.Add\n  id="custom-id"\n  status_id="status-1"\n  item="Item #1"\n  text="New Text"\n  on_close={({ status_id }) => {\n    console.log(\'on_close\', status_id)\n  }}\n/>\n<GlobalStatus.Add\n  id="custom-id"\n  status_id="status-2"\n  item="Item #2"\n  text="New Text"\n  title="New Title"\n  on_close={({ status_id }) => {\n    console.log(\'on_close\', status_id)\n  }}\n/>\n<GlobalStatus.Add\n  id="custom-id"\n  status_id="status-3"\n  item="Item #3"\n  text="Text #3"\n  on_close={({ status_id }) => {\n    console.log(\'on_close\', status_id)\n  }}\n/>\n{/* or update the status.*/}\n<GlobalStatus.Update id="custom-id" text="text" />\n{/* Later you can remove a resolved item.*/}\n<GlobalStatus.Remove id="custom-id" status_id="status-3" />\n\n'})}}]);
//# sourceMappingURL=component---src-docs-uilib-components-global-status-demos-mdx-4c91c71474e94191265d.js.map