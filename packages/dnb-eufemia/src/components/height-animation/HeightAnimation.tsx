import React from 'react'
import classnames from 'classnames'
import { DynamicElement, SpacingProps } from '../../shared/types'
import {
  useHeightAnimation,
  useHeightAnimationOptions,
} from './useHeightAnimation'
import Space from '../space/Space'

export type HeightAnimationProps = {
  /**
   * Wheter the nested children content should be kept in the DOM or not.
   * Default: false
   */
  keepInDOM?: boolean

  /**
   * Set to `true` ensure the nested children content will be kept in the DOM.
   * Default: 400
   */
  duration?: number

  /**
   * Define a custom HTML Element.
   * Default: div
   */
  element?: DynamicElement

  /**
   * Send along a custom React Ref.
   * Default: null
   */
  innerRef?: React.RefObject<HTMLElement>

  className?: React.ReactNode
} & useHeightAnimationOptions

export default function HeightAnimation({
  open = false,
  animate = true,
  keepInDOM = false,
  element,
  duration,
  className,
  innerRef,
  children,
  onInit = null,
  onOpen = null,
  onAnimationEnd = null,
  ...props
}: HeightAnimationProps & SpacingProps) {
  const ref = React.useRef<HTMLElement>()

  const { isInDOM, isVisible, isVisibleParallax, isAnimating } =
    useHeightAnimation(innerRef || ref, {
      open,
      animate,
      children,
      onInit,
      onOpen,
      onAnimationEnd,
    })

  if (!isInDOM && !keepInDOM) {
    return null
  }

  const style: React.CSSProperties = {}
  if (duration) {
    style['--duration'] = `${duration}ms`
  }

  return (
    <Space
      innerRef={innerRef || ref}
      element={element || 'div'}
      className={classnames(
        'dnb-height-animation',
        isInDOM && 'dnb-height-animation--is-in-dom',
        isVisible && 'dnb-height-animation--is-visible',
        isVisibleParallax && 'dnb-height-animation--parallax',
        isAnimating && 'dnb-height-animation--animating',
        !isVisible &&
          !isAnimating &&
          !open &&
          'dnb-height-animation--hidden',
        className
      )}
      style={style}
      aria-hidden={keepInDOM ? !open : undefined}
      {...props}
    >
      {children}
    </Space>
  )
}