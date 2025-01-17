import React from 'react'
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Form, DataContext, Field } from '../../../'
import { Props as StringFieldProps } from '../../../Field/String/String'
import { JSONSchema7 } from 'json-schema'
import nbNO from '../../../../../shared/locales/nb-NO'

const nb = nbNO['nb-NO'].Forms

function TestField(props: StringFieldProps) {
  return <Field.String {...props} validateInitially continuousValidation />
}

describe('DataContext.Provider', () => {
  describe('props', () => {
    it('should provide value from defaultData but ignore changes', () => {
      const { rerender } = render(
        <DataContext.Provider defaultData={{ foo: 'original' }}>
          <Field.String path="/foo" />
        </DataContext.Provider>
      )

      expect(screen.getByDisplayValue('original')).toBeInTheDocument()

      rerender(
        <DataContext.Provider defaultData={{ foo: 'changed' }}>
          <Field.String path="/foo" />
        </DataContext.Provider>
      )

      expect(screen.queryByDisplayValue('original')).toBeInTheDocument()
      expect(screen.queryByDisplayValue('changed')).not.toBeInTheDocument()
    })

    it('should provide value from data and update based on changes', async () => {
      const { rerender } = render(
        <DataContext.Provider data={{ foo: 'original' }}>
          <Field.String path="/foo" />
        </DataContext.Provider>
      )

      expect(screen.getByDisplayValue('original')).toBeInTheDocument()

      rerender(
        <DataContext.Provider data={{ foo: 'changed' }}>
          <Field.String path="/foo" />
        </DataContext.Provider>
      )
      await waitFor(() => {
        expect(screen.queryByDisplayValue('changed')).toBeInTheDocument()
        expect(
          screen.queryByDisplayValue('original')
        ).not.toBeInTheDocument()
      })
    })

    it('should handle path change', async () => {
      const { rerender } = render(
        <DataContext.Provider data={{ foo: 'original' }}>
          <Field.String path="/foo" />
        </DataContext.Provider>
      )

      expect(screen.getByDisplayValue('original')).toBeInTheDocument()

      rerender(
        <DataContext.Provider data={{ fooBar: 'changed' }}>
          <Field.String path="/fooBar" />
        </DataContext.Provider>
      )

      await waitFor(() => {
        expect(screen.getByDisplayValue('changed')).toBeInTheDocument()
      })
    })

    it('should call "onChange" on internal value change', () => {
      const onChange = jest.fn()

      const { rerender } = render(
        <DataContext.Provider
          data={{ foo: 'original' }}
          onChange={onChange}
        >
          <Field.String path="/foo" value="Value" />
        </DataContext.Provider>
      )

      const element = document.querySelector('input')

      fireEvent.change(element, {
        target: { value: 'New Value' },
      })

      expect(onChange).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledWith({ foo: 'New Value' })

      rerender(
        <DataContext.Provider
          data={{ fooBar: 'changed-value' }}
          onChange={onChange}
        >
          <Field.String path="/fooBar" value="Rerendered Value" />
        </DataContext.Provider>
      )

      fireEvent.change(element, {
        target: { value: 'Second Value' },
      })

      expect(onChange).toHaveBeenCalledTimes(2)
      expect(onChange).toHaveBeenCalledWith({ fooBar: 'Second Value' })
    })

    it('should update data context with initially given "value"', () => {
      const onChange = jest.fn()
      const onSubmit = jest.fn()

      render(
        <DataContext.Provider
          data={{ other: 'original' }}
          onChange={onChange}
          onSubmit={onSubmit}
        >
          <Field.String path="/foo" value="include this" />
          <Form.SubmitButton />
        </DataContext.Provider>,
        { wrapper: React.StrictMode }
      )

      const element = document.querySelector('input')
      const button = document.querySelector('button')

      fireEvent.click(button)

      expect(onChange).toHaveBeenCalledTimes(0)
      expect(onSubmit).toHaveBeenCalledTimes(1)
      expect(onSubmit).toHaveBeenCalledWith(
        { foo: 'include this', other: 'original' },
        expect.anything()
      )

      fireEvent.change(element, {
        target: { value: 'New Value' },
      })

      expect(onSubmit).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledWith({
        foo: 'New Value',
        other: 'original',
      })
    })

    it('should work without any data provided, using an empty object as default when pointing to an object subkey', () => {
      const onChange = jest.fn()

      render(
        <DataContext.Provider onChange={onChange}>
          <Field.String path="/foo" value="Value" />
        </DataContext.Provider>
      )

      const element = document.querySelector('input')

      fireEvent.change(element, {
        target: { value: 'New Value' },
      })

      expect(onChange).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledWith({ foo: 'New Value' })
    })

    it('should work without any data provided, using an empty array as default when pointing to an array index subkey', () => {
      const onChange = jest.fn()

      render(
        <DataContext.Provider onChange={onChange}>
          <Field.String path="/0/foo" value="Value" />
        </DataContext.Provider>
      )

      const element = document.querySelector('input')

      fireEvent.change(element, {
        target: { value: 'New Value' },
      })

      expect(onChange).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledWith([{ foo: 'New Value' }])
    })

    it('should call "onPathChange" on path change', () => {
      const onPathChange = jest.fn()

      const { rerender } = render(
        <DataContext.Provider
          data={{ foo: 'original' }}
          onPathChange={onPathChange}
        >
          <Field.String path="/foo" value="Value" />
        </DataContext.Provider>
      )

      const element = document.querySelector('input')

      fireEvent.change(element, {
        target: { value: 'New Value' },
      })

      expect(onPathChange).toHaveBeenCalledTimes(1)
      expect(onPathChange).toHaveBeenCalledWith('/foo', 'New Value')

      rerender(
        <DataContext.Provider
          data={{ fooBar: 'changed' }}
          onPathChange={onPathChange}
        >
          <Field.String path="/fooBar" value="Rerendered Value" />
        </DataContext.Provider>
      )

      fireEvent.change(element, {
        target: { value: 'Second Value' },
      })

      expect(onPathChange).toHaveBeenCalledTimes(2)
      expect(onPathChange).toHaveBeenCalledWith('/fooBar', 'Second Value')
    })

    it('should call "onSubmit" on submit', () => {
      const onSubmit = jest.fn()

      const { rerender } = render(
        <DataContext.Provider
          data={{ foo: 'original' }}
          onSubmit={onSubmit}
        >
          <Field.String path="/foo" value="Value" />
          <Form.SubmitButton>Submit</Form.SubmitButton>
        </DataContext.Provider>
      )

      const inputElement = document.querySelector('input')
      const submitElement = document.querySelector('button')

      fireEvent.change(inputElement, {
        target: { value: 'New Value' },
      })
      fireEvent.click(submitElement)

      expect(onSubmit).toHaveBeenCalledTimes(1)
      expect(onSubmit).toHaveBeenCalledWith(
        { foo: 'New Value' },
        expect.anything()
      )

      rerender(
        <DataContext.Provider
          data={{ fooBar: 'changed' }}
          onSubmit={onSubmit}
        >
          <Field.String path="/fooBar" value="Rerendered Value" />
          <Form.SubmitButton>Submit</Form.SubmitButton>
        </DataContext.Provider>
      )

      fireEvent.change(inputElement, {
        target: { value: 'Second Value' },
      })
      fireEvent.click(submitElement)

      expect(onSubmit).toHaveBeenCalledTimes(2)
      expect(onSubmit).toHaveBeenCalledWith(
        { fooBar: 'Second Value' },
        expect.anything()
      )
    })

    it('should call "onSubmitRequest" on invalid submit', async () => {
      const onSubmitRequest = jest.fn()

      const { rerender } = render(
        <DataContext.Provider
          data={{ foo: 'original' }}
          onSubmitRequest={onSubmitRequest}
        >
          <Field.Number path="/foo" minimum={3} />
          <Form.SubmitButton>Submit</Form.SubmitButton>
        </DataContext.Provider>
      )

      const inputElement = document.querySelector('input')
      const submitElement = document.querySelector('button')

      await waitFor(() => {
        fireEvent.change(inputElement, {
          target: { value: '1' },
        })
        fireEvent.click(submitElement)

        expect(onSubmitRequest).toHaveBeenCalledTimes(1)
        expect(onSubmitRequest).toHaveBeenCalledWith()
      })

      rerender(
        <DataContext.Provider
          data={{ fooBar: 'changed' }}
          onSubmitRequest={onSubmitRequest}
        >
          <Field.Number path="/fooBar" minimum={3} />
          <Form.SubmitButton>Submit</Form.SubmitButton>
        </DataContext.Provider>
      )

      await waitFor(() => {
        fireEvent.change(inputElement, {
          target: { value: '2' },
        })
        fireEvent.click(submitElement)

        expect(onSubmitRequest).toHaveBeenCalledTimes(2)
        expect(onSubmitRequest).toHaveBeenCalledWith()
      })
    })

    it('should scroll on top when "scrollTopOnSubmit" is true', () => {
      const onSubmit = jest.fn()
      const scrollTo = jest.fn()

      jest.spyOn(window, 'scrollTo').mockImplementation(scrollTo)

      const { rerender } = render(
        <DataContext.Provider
          data={{ foo: 'original' }}
          onSubmit={onSubmit}
          scrollTopOnSubmit
        >
          <Field.String path="/foo" value="Value" />
          <Form.SubmitButton>Submit</Form.SubmitButton>
        </DataContext.Provider>
      )

      const inputElement = document.querySelector('input')
      const submitElement = document.querySelector('button')

      fireEvent.change(inputElement, {
        target: { value: 'New Value' },
      })
      fireEvent.click(submitElement)

      expect(onSubmit).toHaveBeenCalledTimes(1)
      expect(onSubmit).toHaveBeenCalledWith(
        { foo: 'New Value' },
        expect.anything()
      )
      expect(scrollTo).toHaveBeenCalledTimes(1)

      rerender(
        <DataContext.Provider
          data={{ fooBar: 'changed' }}
          onSubmit={onSubmit}
          scrollTopOnSubmit
        >
          <Field.String path="/fooBar" value="Rerendered Value" />
          <Form.SubmitButton>Submit</Form.SubmitButton>
        </DataContext.Provider>
      )

      fireEvent.change(inputElement, {
        target: { value: 'Second Value' },
      })
      fireEvent.click(submitElement)

      expect(onSubmit).toHaveBeenCalledTimes(2)
      expect(onSubmit).toHaveBeenCalledWith(
        { fooBar: 'Second Value' },
        expect.anything()
      )
      expect(scrollTo).toHaveBeenCalledTimes(2)
      expect(scrollTo).toHaveBeenCalledWith({
        behavior: 'smooth',
        top: 0,
      })
    })
  })

  describe('session storage', () => {
    it('should store data to session storage when sessionStorageId is provided, but only after changes', async () => {
      const setItem = jest.spyOn(
        Object.getPrototypeOf(window.sessionStorage),
        'setItem'
      )

      render(
        <DataContext.Provider
          defaultData={{ foo: 'original' }}
          sessionStorageId="test-data"
        >
          <Field.String path="/foo" />
        </DataContext.Provider>
      )

      expect(setItem).not.toHaveBeenCalledWith(
        'test-data',
        JSON.stringify({
          foo: 'original123',
        })
      )

      const inputElement = document.querySelector('input')
      await userEvent.type(inputElement, '123')

      expect(setItem).toHaveBeenCalledWith(
        'test-data',
        JSON.stringify({
          foo: 'original1',
        })
      )
      expect(setItem).toHaveBeenCalledWith(
        'test-data',
        JSON.stringify({
          foo: 'original12',
        })
      )
      expect(setItem).toHaveBeenCalledWith(
        'test-data',
        JSON.stringify({
          foo: 'original123',
        })
      )

      setItem.mockRestore()
    })

    it('should set initial data to data from session storage when sessionStorageId is provided', () => {
      window.sessionStorage.setItem(
        'sourcedata',
        JSON.stringify({
          lorem: 'Ipsum',
        })
      )

      render(
        <DataContext.Provider sessionStorageId="sourcedata">
          <Field.String path="/lorem" />
        </DataContext.Provider>
      )

      expect(screen.getByDisplayValue('Ipsum')).toBeInTheDocument()
    })

    it('should throw error if both data and sessionStorageId is provided', () => {
      const errorSpy = jest
        .spyOn(global.console, 'error')
        .mockImplementation()

      render(
        <DataContext.Provider
          data={{ foo: 'bar' }}
          sessionStorageId="sourcedata"
        >
          <Field.String path="/foo" />
        </DataContext.Provider>
      )

      expect(errorSpy).toHaveBeenCalled()
      errorSpy.mockRestore()
    })
  })

  describe('error handling', () => {
    it('should show and hide error messages as expected', async () => {
      render(
        <DataContext.Provider>
          <Field.String
            label="Field 1"
            path="/foo"
            errorMessages={{
              required: 'Required string',
            }}
            required
          />
          <Field.String
            label="Field 2"
            value="abc"
            minLength={5}
            errorMessages={{
              minLength: 'Min 5 chars',
            }}
          />
          <Field.Number
            label="Field 3"
            errorMessages={{
              required: 'Required number',
            }}
            required
          />
          <Form.SubmitButton>Submit</Form.SubmitButton>
        </DataContext.Provider>
      )

      const submitElement = document.querySelector('button')
      const field2 = screen.queryByLabelText('Field 2')

      // Should not show any error messages before clicking submit when no fields has been touched
      expect(screen.queryAllByRole('alert').length).toEqual(0)

      expect(screen.queryByText('Required string')).not.toBeInTheDocument()
      expect(screen.queryByText('Min 5 chars')).not.toBeInTheDocument()
      expect(screen.queryByText('Required number')).not.toBeInTheDocument()

      fireEvent.click(submitElement)

      // After clicking submit, all three fields should show errors
      expect(screen.queryAllByRole('alert').length).toEqual(3)

      expect(screen.getByText('Required string')).toBeInTheDocument()
      expect(screen.getByText('Min 5 chars')).toBeInTheDocument()
      expect(screen.getByText('Required number')).toBeInTheDocument()

      // Writing in one field should remove that error, while keeping the others visible
      await act(async () => {
        await userEvent.type(field2, 'de')
      })

      expect(screen.queryAllByRole('alert').length).toEqual(2)

      expect(screen.getByText('Required string')).toBeInTheDocument()
      expect(screen.queryByText('Min 5 chars')).not.toBeInTheDocument()
      expect(screen.getByText('Required number')).toBeInTheDocument()
    })

    it('should show errors for fields with no path-prop after clicking submit', async () => {
      // Make sure it still sets internal showAllError states, even if there is no fields with path triggering it
      render(
        <DataContext.Provider>
          <Field.String required />
          <Form.SubmitButton>Submit</Form.SubmitButton>
        </DataContext.Provider>
      )

      const submitElement = document.querySelector('button')
      fireEvent.click(submitElement)

      expect(screen.queryByRole('alert')).toBeInTheDocument()
    })

    describe('schema validation', () => {
      it('should handle errors from inner components and outer provider interchangeably', async () => {
        const schema: JSONSchema7 = {
          type: 'object',
          properties: {
            txt: {
              type: 'string',
              pattern: '^(one|two|three)$',
            },
          },
        }
        const { rerender } = render(
          <DataContext.Provider schema={schema} data={{ txt: 'one' }}>
            <TestField path="/txt" />
          </DataContext.Provider>
        )
        expect(screen.queryByRole('alert')).not.toBeInTheDocument()

        // Change value so field component and provider both have errors
        rerender(
          <DataContext.Provider
            schema={schema}
            data={{ txt: 'fooooooooo' }}
          >
            <TestField path="/txt" maxLength={5} />
          </DataContext.Provider>
        )
        expect(screen.queryByRole('alert')).toBeInTheDocument()

        // Change value so only provider has errors (ensuring removed field error does not remove provider error)
        rerender(
          <DataContext.Provider schema={schema} data={{ txt: 'fooo' }}>
            <TestField path="/txt" maxLength={5} />
          </DataContext.Provider>
        )
        expect(screen.queryByRole('alert')).toBeInTheDocument()

        // Change value so only field component has error
        rerender(
          <DataContext.Provider schema={schema} data={{ txt: 'three' }}>
            <TestField path="/txt" maxLength={1} />
          </DataContext.Provider>
        )
        await waitFor(() => {
          expect(screen.queryByRole('alert')).toBeInTheDocument()
        })

        // Change value back to one with no errors again
        rerender(
          <DataContext.Provider schema={schema} data={{ txt: 'three' }}>
            <TestField path="/txt" maxLength={5} />
          </DataContext.Provider>
        )
        await waitFor(() => {
          expect(screen.queryByRole('alert')).not.toBeInTheDocument()
        })
      })

      it('should show provided errorMessages based on outer schema validation with injected value', () => {
        const schema: JSONSchema7 = {
          type: 'object',
          properties: {
            val: {
              type: 'string',
              minLength: 7,
            },
          },
        }

        render(
          <DataContext.Provider schema={schema} data={{ val: 'abc' }}>
            <TestField
              path="/val"
              errorMessages={{
                minLength: 'Minimum {minLength} chars.',
              }}
            />
          </DataContext.Provider>
        )

        expect(screen.getByText('Minimum 7 chars.')).toBeInTheDocument()
      })
    })

    it('should show default errorMessages based on outer schema validation with injected value', () => {
      const schema: JSONSchema7 = {
        type: 'object',
        properties: {
          val: {
            type: 'string',
            minLength: 486,
          },
        },
      }

      render(
        <DataContext.Provider schema={schema} data={{ val: 'abc' }}>
          <TestField path="/val" />
        </DataContext.Provider>
      )

      expect(
        screen.getByText(
          nb.stringInputErrorMinLength.replace('{minLength}', '486')
        )
      ).toBeInTheDocument()
    })

    it('should call "onSubmitRequest" on invalid submit set by a schema', () => {
      const onSubmitRequest = jest.fn()

      const TestdataSchema: JSONSchema7 = {
        type: 'object',
        properties: {
          foo: { type: 'number', minimum: 3 },
        },
      }

      const { rerender } = render(
        <DataContext.Provider
          data={{ foo: 'original' }}
          onSubmitRequest={onSubmitRequest}
          schema={TestdataSchema}
        >
          <Field.Number path="/foo" />
          <Form.SubmitButton>Submit</Form.SubmitButton>
        </DataContext.Provider>
      )

      const inputElement = document.querySelector('input')
      const submitElement = document.querySelector('button')

      fireEvent.change(inputElement, {
        target: { value: '1' },
      })
      fireEvent.click(submitElement)

      expect(onSubmitRequest).toHaveBeenCalledTimes(1)
      expect(onSubmitRequest).toHaveBeenCalledWith()

      rerender(
        <DataContext.Provider
          data={{ foo: 'changed' }}
          onSubmitRequest={onSubmitRequest}
          schema={TestdataSchema}
        >
          <Field.Number path="/fooBar" required />
          <Form.SubmitButton>Submit</Form.SubmitButton>
        </DataContext.Provider>
      )

      fireEvent.change(inputElement, {
        target: { value: '2' },
      })
      fireEvent.click(submitElement)

      expect(onSubmitRequest).toHaveBeenCalledTimes(2)
      expect(onSubmitRequest).toHaveBeenCalledWith()
    })

    it('should revalidate with provided schema based on changes in external data', () => {
      const schema: JSONSchema7 = {
        type: 'object',
        properties: {
          somekey: {
            type: 'string',
          },
        },
      }
      const validData = {
        somekey: 'some-value',
      }
      const invalidData = {
        somekey: 123,
      }
      const { rerender } = render(
        <DataContext.Provider schema={schema} data={validData}>
          <Field.String
            path="/somekey"
            validateInitially
            continuousValidation
          />
        </DataContext.Provider>
      )
      expect(screen.queryByRole('alert')).not.toBeInTheDocument()

      rerender(
        <DataContext.Provider schema={schema} data={invalidData}>
          <Field.String
            path="/somekey"
            validateInitially
            continuousValidation
          />
        </DataContext.Provider>
      )

      expect(screen.queryByRole('alert')).toBeInTheDocument()

      rerender(
        <DataContext.Provider schema={schema} data={validData}>
          <Field.String
            path="/somekey"
            validateInitially
            continuousValidation
          />
        </DataContext.Provider>
      )

      expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    })

    it('should revalidate correctly based on changes in provided schema', () => {
      const schema1: JSONSchema7 = {
        type: 'object',
        properties: {
          somekey: {
            type: 'number',
          },
        },
      }
      const schema2: JSONSchema7 = {
        type: 'object',
        properties: {
          somekey: {
            type: 'string',
          },
        },
      }
      const data = {
        somekey: 'some-value',
      }
      const { rerender } = render(
        <DataContext.Provider schema={schema1} defaultData={data}>
          <Field.String
            path="/somekey"
            validateInitially
            continuousValidation
          />
        </DataContext.Provider>
      )
      expect(screen.queryByRole('alert')).toBeInTheDocument()

      rerender(
        <DataContext.Provider schema={schema2} defaultData={data}>
          <Field.String
            path="/somekey"
            validateInitially
            continuousValidation
          />
        </DataContext.Provider>
      )

      expect(screen.queryByRole('alert')).not.toBeInTheDocument()

      rerender(
        <DataContext.Provider schema={schema1} defaultData={data}>
          <Field.String
            path="/somekey"
            validateInitially
            continuousValidation
          />
        </DataContext.Provider>
      )

      expect(screen.queryByRole('alert')).toBeInTheDocument()
    })
  })
})
