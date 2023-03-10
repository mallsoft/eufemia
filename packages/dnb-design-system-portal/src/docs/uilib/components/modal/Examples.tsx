/**
 * UI lib Component Example
 *
 */

import React from 'react'
import ComponentBox from '../../../../shared/tags/ComponentBox'

import { Modal, P, Button } from '@dnb/eufemia/src'

export const ExampleCard = ({ children }) => (
  <div
    id="example-card"
    style={{ padding: '2rem', backgroundColor: 'white' }}
  >
    {children}
  </div>
)

export const ModalExampleStandard = () => (
  <ComponentBox data-visual-test="modal-standard" scope={{ ExampleCard }}>
    <Modal>
      <ExampleCard>
        <P>This is a Modal that you can use to make custom variations</P>
      </ExampleCard>
    </Modal>
  </ComponentBox>
)

export const ModalExampleStateOnly = () => (
  <ComponentBox scope={{ ExampleCard }}>
    {() => {
      const Component = () => {
        const [modalIsActive, setModalState] = React.useState(false)
        return (
          <>
            <Button
              id="custom-triggerer"
              text="Custom trigger Button"
              on_click={() => setModalState((s) => !s)}
            />
            <Modal
              title="Modal Title"
              omit_trigger_button
              open_state={modalIsActive}
              labelled_by="custom-triggerer"
              on_close={() => setModalState(false)}
            >
              <ExampleCard>
                <P>This Modal was opened by a custom trigger button.</P>
              </ExampleCard>
            </Modal>
          </>
        )
      }

      return <Component />
    }}
  </ComponentBox>
)

export const ModalExampleCloseByHandler = () => (
  <ComponentBox scope={{ ExampleCard }}>
    <Modal
      title="Auto close"
      triggerAttributes={{ text: 'Click me' }}
      align_content="center"
      max_width="40rem"
      close_modal={(close) => {
        const timeout = setTimeout(close, 3e3)
        return () => clearTimeout(timeout)
      }}
    >
      <ExampleCard>
        <P>This Modal will close in 3 seconds.</P>
      </ExampleCard>
    </Modal>
  </ComponentBox>
)