/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import {
  dispatchCustomElementEvent,
  warn,
} from '../../../shared/component-helper'
import {
  calculatePercent,
  createMockDiv,
  percentToValue,
} from '../SliderHelpers'
import { SliderContext } from '../SliderProvider'

export function useSliderEvents() {
  const {
    isReverse,
    emitChange,
    trackRef,
    isVertical,
    setShouldAnimate,
    setThumbState,
    setThumbIndex,
    allProps,
  } = React.useContext(SliderContext)
  const { min, max, onDragStart, onDragEnd } = allProps

  const onTrackClickHandler = (event: MouseEvent | TouchEvent) => {
    const percent = calculatePercent(trackRef.current, event, isVertical)

    emitChange(event, percentToValue(percent, min, max, isReverse))
    setShouldAnimate(true)
  }

  const onThumbMouseDownHandler = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLButtonElement

    setThumbIndex(parseFloat(target.dataset.index))
    setThumbState('activated')
    setShouldAnimate(false)

    if (typeof onDragStart === 'function') {
      dispatchCustomElementEvent(allProps, 'onDragStart', {
        event,
      })
    }

    if (typeof document !== 'undefined') {
      try {
        document.body.addEventListener(
          'touchmove',
          onTrackTouchMoveHandler
        )
        document.body.addEventListener('touchend', onTrackTouchEndHandler)
        document.body.addEventListener(
          'mousemove',
          onTrackMouseMoveHandler
        )
        document.body.addEventListener('mouseup', onTrackMouseUpHandler)
      } catch (e) {
        warn(e)
      }
    }
  }

  const onThumbMouseUpHandler = () => {
    setThumbState('released')
  }

  const onTrackTouchEndHandler = (event: TouchEvent) =>
    onTrackMouseUpHandler(event)

  const removeEvents = () => {
    if (typeof document !== 'undefined') {
      try {
        document.body.removeEventListener(
          'touchmove',
          onTrackTouchMoveHandler
        )
        document.body.removeEventListener(
          'touchend',
          onTrackTouchEndHandler
        )
        document.body.removeEventListener(
          'mousemove',
          onTrackMouseMoveHandler
        )
        document.body.removeEventListener('mouseup', onTrackMouseUpHandler)
      } catch (e) {
        warn(e)
      }
    }
  }

  const onTrackMouseUpHandler = (event: MouseEvent | TouchEvent) => {
    removeEvents()

    setThumbIndex(-1)
    setThumbState('normal')

    if (typeof onDragEnd === 'function') {
      dispatchCustomElementEvent(allProps, 'onDragEnd', {
        event,
      })
    }
  }

  const onTrackTouchMoveHandler = (event: MouseEvent) =>
    onTrackMouseMoveHandler(event)
  const onTrackMouseMoveHandler = (event: MouseEvent) => {
    event.preventDefault() // ensures correct cursor in Safari (dekstop)

    let elem = trackRef.current

    // we have to mock this for jsdom.
    if (process.env.NODE_ENV === 'test') {
      // @ts-ignore
      elem = createMockDiv(event.detail)
      // @ts-ignore
      event = event.detail
    }

    if (elem) {
      const percent = calculatePercent(elem, event, isVertical)
      emitChange(event, percentToValue(percent, min, max, isReverse))
    }
  }

  const onThumbFocusHandler = () => {
    setThumbState('focused')
  }
  const onThumbBlurHandler = () => {
    setThumbState('normal')
  }

  const onHelperChangeHandler = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const emitEvent = event as unknown
    emitChange(
      emitEvent as MouseEvent,
      parseFloat(event.currentTarget.value)
    )
  }

  const onHelperFocusHandler = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const target = event.target as HTMLInputElement
    setThumbIndex(parseFloat(target.dataset.index))
  }

  return {
    onThumbMouseDownHandler,
    onThumbMouseUpHandler,
    onTrackClickHandler,
    onThumbFocusHandler,
    onThumbBlurHandler,
    onHelperChangeHandler,
    onHelperFocusHandler,
    removeEvents,
  }
}