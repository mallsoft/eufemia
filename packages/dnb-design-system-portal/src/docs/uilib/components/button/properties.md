---
showTabs: true
---

## Properties

| Properties                                  | Description                                                                                                                                                                                                                                                            |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                      | _(optional)_ `button`, `reset` or `submit` for the `type` HTML attribute (default to `button`) .                                                                                                                                                                       |
| `text` or `children`                        | _(optional)_ the content of the button can be a string or a React Element.                                                                                                                                                                                             |
| `title`                                     | _(optional)_ title of the button. Optional, but should always be included because of accessibility.                                                                                                                                                                    |
| `variant`                                   | _(optional)_ defines the kind of button. Possible values are `primary`, `secondary`, `tertiary` and `signal`.                                                                                                                                                          |
| `size`                                      | _(optional)_ the size of the button. For now there is **medium**, **default** and **large**.                                                                                                                                                                           |
| `icon`                                      | _(optional)_ to be included in the button. [Primary Icons](/icons/primary) can be set as a string (e.g. `icon="chevron_right"`), other icons should be set as React elements.                                                                                          |
| `icon_position`                             | _(optional)_ position of icon inside the button. Set to `left` or `right`. Tertiary button variant also supports `top`. Defaults to `right` if not set.                                                                                                                |
| `icon_size`                                 | _(optional)_ define icon width and height. Defaults to 16px                                                                                                                                                                                                            |
| `class`                                     | _(optional)_ any extra modifying class.                                                                                                                                                                                                                                |
| `href`                                      | _(optional)_ if you want the button to behave as a link. Use with caution! A link should normally visually be a link and not a button.                                                                                                                                 |
| `to`                                        | _(optional)_ use this prop only if you are using a router Link component as the `element` that uses the `to` property to declare the navigation url.                                                                                                                   |
| `wrap`                                      | _(optional)_ if set to `true` the button text will wrap in to new lines if the overflow point is reached. Defaults to `false`.                                                                                                                                         |
| `stretch`                                   | _(optional)_ set it to `true` in order to stretch the button to the available space. Defaults to false.                                                                                                                                                                |
| `bounding`                                  | _(optional)_ set it to `true` in order to extend the bounding box (above the visual button background). You may also look into the HTML class `dnb-button__bounding` if it needs some CSS customization in order to get the particular button right for your use-case. |
| `element`                                   | _(optional)_ only meant to be used for special use cases. Defaults to `button` or `a` depending if href is set or not.                                                                                                                                                 |
| `custom_content`                            | _(optional)_ if you need to inject completely custom markup (React Element) into the button component. You have then to handle alignment and styling by yourself.                                                                                                      |
| `skeleton`                                  | _(optional)_ if set to `true`, an overlaying skeleton with animation will be shown.                                                                                                                                                                                    |
| `tooltip`                                   | _(optional)_ Provide a string or a React Element to be shown as the tooltip content.                                                                                                                                                                                   |
| `status`                                    | _(optional)_ set it to either `status="error"` or a text with a status message. The style defaults to an error message. You can use `true` to only get the status color, without a message.                                                                            |
| `status_state`                              | _(optional)_ defines the state of the status. Currently there are two statuses `[error, info]`. Defaults to `error`.                                                                                                                                                   |
| `status_props`                              | _(optional)_ use an object to define additional FormStatus properties.                                                                                                                                                                                                 |
| `global_status_id`                          | _(optional)_ the `status_id` used for the target [GlobalStatus](/uilib/components/global-status).                                                                                                                                                                      |
| [Space](/uilib/components/space/properties) | _(optional)_ spacing properties like `top` or `bottom` are supported.                                                                                                                                                                                                  |