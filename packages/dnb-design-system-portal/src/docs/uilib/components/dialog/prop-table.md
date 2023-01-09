| Properties         | Description                                                                                                                                                                                                                                  |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `variant`          | _(optional)_ The dialog variant. Can either be `information` or `confirmation`. Defaults to `information`.                                                                                                                                   |
| `title`            | _(optional)_ The dialog title. Displays on the very top of the content.                                                                                                                                                                      |
| `minWidth`         | _(optional)_ The minimum Dialog content width, defined by a CSS width value like `50vw` (50% of the viewport). Be careful on using fixed `minWidth` so you don't break responsiveness. Defaults to `30rem` (average width is set to `60vw`). |
| `maxWidth`         | _(optional)_ The maximum Dialog content width, defined by a CSS width value like `20rem`. Defaults to `60rem` (average width is set to `60vw`).                                                                                              |
| `className`        | _(optional)_ Give the Dialog content a class name (maps to `dnb-dialog`).                                                                                                                                                                    |
| `spacing`          | _(optional)_ If set to `false` then the dialog content will be shown without any spacing. Defaults to `true`.                                                                                                                                |
| `preventCoreStyle` | _(optional)_ By default the dialog content gets added the core style class `dnb-core-style`. Use `false` to disable this behavior.                                                                                                           |
| `navContent`       | _(optional)_ The content which will appear in the navigation, above the header, and side-by-side the close button.                                                                                                                           |
| `headerContent`    | _(optional)_ The content which will appear in the header of the dialog.                                                                                                                                                                      |
| `modalContent`     | _(optional)_ The content which will appear when triggering the dialog.                                                                                                                                                                       |
| `description`      | _(optional)_ A description will be positioned below the title, but before the content. Used for Dialog variant `confirmation` to further describe what the actions will do.                                                                  |
| `alignContent`     | _(optional)_ Define the inner horizontal alignment of the content. Can be set to `left`, `center`, `right` and `centered`. If `centered`, then the content will also be centered vertically. Defaults to `left`.                             |
| `fullscreen`       | _(optional)_ If set to `true` then the dialog content will be shown as fullscreen, without showing the original content behind. Can be set to `false` to omit the auto fullscreen. Defaults to `auto`.                                       |
| `icon`             | _(optional)_ An icon to display at the top of the component. Should be of size medium, so make sure you import the `_medium` version of the Eufemia icon.                                                                                    |
| `confirmType`      | _(optional)_ For variant confirmation, the dialog is either an informational (`info`) or a warning (`warning`) message. Defaults to 'info'.                                                                                                  |
| `declineText`      | _(optional)_ For dialog actions, give a custom text for the decline button.                                                                                                                                                                  |
| `confirmText`      | _(optional)_ For dialog actions, give a custom text for the confirmation button.                                                                                                                                                             |
| `hideDecline`      | _(optional)_ For variant confirmation, hide the default decline button and only show the confirmation button.                                                                                                                                |
| `scrollRef`        | _(optional)_ To get the scroll Element, pass in your own React ref.                                                                                                                                                                          |
| `contentRef`       | _(optional)_ To get the inner content Element, pass in your own React ref.                                                                                                                                                                   |