import React from 'react'
import { render, waitFor, screen, fireEvent } from '@testing-library/react'
import Date from '..'
import userEvent from '@testing-library/user-event'
import { axeComponent } from '../../../../../core/jest/jestSetup'

describe('Field.Date', () => {
  it('should render with props', () => {
    render(<Date />)
  })

  it('should show required warning', async () => {
    render(<Date value="2023-12-07" required />)

    const datepicker = document.querySelector('.dnb-date-picker')
    const [, , year]: Array<HTMLInputElement> = Array.from(
      datepicker.querySelectorAll('.dnb-date-picker__input')
    )

    expect(datepicker.classList).not.toContain(
      'dnb-date-picker__status--error'
    )
    expect(
      datepicker.querySelector('.dnb-form-status__text')
    ).not.toBeInTheDocument()

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()

    fireEvent.focus(year)
    await userEvent.type(year, '{Backspace>2}')
    fireEvent.blur(year)

    expect(screen.queryByRole('alert')).toBeInTheDocument()

    await userEvent.keyboard('20231207')

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()

    await userEvent.click(
      document.querySelector('.dnb-input__submit-button__button')
    )

    await userEvent.click(
      document
        .querySelector('.dnb-date-picker__footer')
        .querySelectorAll('.dnb-button--tertiary ')[0]
    )

    expect(screen.queryByRole('alert')).toBeInTheDocument()
  })

  describe('error handling', () => {
    describe('with validateInitially', () => {
      it('should show error message initially', async () => {
        render(<Date required validateInitially />)
        await waitFor(() => {
          expect(screen.getByRole('alert')).toBeInTheDocument()
        })
      })
    })

    describe('with validateUnchanged', () => {
      it('should show error message when blurring without any changes', async () => {
        jest.spyOn(console, 'log').mockImplementationOnce(jest.fn()) // because of the invalid date
        render(
          <Date
            value="2023-12-0"
            schema={{ type: 'string', minLength: 10 }}
            validateUnchanged
          />
        )
        const input = document.querySelector('input')
        expect(screen.queryByRole('alert')).not.toBeInTheDocument()
        input.focus()
        fireEvent.blur(input)
        await waitFor(() => {
          expect(screen.getByRole('alert')).toBeInTheDocument()
        })
      })
    })
  })

  describe('ARIA', () => {
    it('should validate with ARIA rules', async () => {
      const result = render(
        <Date label="Label" required validateInitially />
      )

      expect(await axeComponent(result)).toHaveNoViolations()
    })
  })
})
