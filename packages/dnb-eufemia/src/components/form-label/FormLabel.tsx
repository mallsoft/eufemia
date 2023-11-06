/**
 * Web FormLabel Component
 *
 */

import React from 'react'
import classnames from 'classnames'
import {
  extendPropsWithContext,
  isTrue,
  validateDOMAttributes,
} from '../../shared/component-helper'
import { createSpacingClasses } from '../space/SpacingHelper'
import {
  createSkeletonClass,
  skeletonDOMAttributes,
} from '../skeleton/SkeletonHelper'
import { pickFormElementProps } from '../../shared/helpers/filterValidProps'
import Context from '../../shared/Context'
import {
  DynamicElement,
  DynamicElementParams,
  SpacingProps,
} from '../../shared/types'
import { FieldHelpProps } from '../../extensions/forms'
import HelpButton from '../HelpButton'

export type FormLabelProps = {
  forId?: string
  element?: DynamicElement<HTMLLabelElement>
  text?: React.ReactNode
  size?: 'basis' | 'medium' | 'large'
  id?: string
  skeleton?: boolean
  label?: React.ReactNode
  vertical?: boolean
  srOnly?: boolean
  innerRef?: React.RefObject<HTMLElement>

  /** Is not a part of HTMLLabelElement and not documented as of now */
  disabled?: boolean

  /** @deprecated use forId instead */
  for_id?: string
  /** @deprecated use srOnly instead */
  sr_only?: boolean
  /** @deprecated use labelDirection instead (was not documented before) */
  label_direction?: 'vertical' | 'horizontal'
} & FieldHelpProps

export type FormLabelAllProps = FormLabelProps &
  React.HTMLAttributes<HTMLLabelElement> &
  SpacingProps

export default function FormLabel(localProps: FormLabelAllProps) {
  const context = React.useContext(Context)

  // use only the props from context, who are available here anyway
  const props = extendPropsWithContext(
    localProps,
    null,
    { skeleton: context?.skeleton },
    pickFormElementProps(context?.FormRow), // Deprecated – can be removed in v11
    pickFormElementProps(context?.formElement),
    context?.FormLabel
  )

  const {
    forId,
    text,
    srOnly,
    vertical,
    size,
    skeleton,
    element: Element = 'label',
    innerRef,
    className,
    children,
    help,

    /** @deprecated can be removed in v11 */
    for_id,
    sr_only,
    label_direction,

    ...attributes
  } = props

  const isInteractive =
    !props.disabled &&
    !srOnly &&
    (typeof props.onClick === 'function' || forId || for_id)

  const [helpContentElement, setHelpContentElement] = useState(null)
  useEffect(() => {
    setHelpContentElement(document.getElementById(help?.selector))
  }, [help])

  const isVertical = isTrue(vertical) || label_direction === 'vertical'

  const params = {
    className: classnames(
      'dnb-form-label',
      isVertical && `dnb-form-label--vertical`,
      (srOnly || isTrue(sr_only)) && 'dnb-sr-only',
      size && `dnb-h--${size}`,
      isInteractive && 'dnb-form-label--interactive',
      help && `dnb-form-label--has-help`,
      createSkeletonClass('font', skeleton, context),
      createSpacingClasses(props),
      className
    ),
    htmlFor: forId || for_id,
    ...(attributes as DynamicElementParams),
  }

  params['ref'] = innerRef

  skeletonDOMAttributes(params, skeleton, context)
  validateDOMAttributes(localProps, params)

  const content = (
    <>
      <Element {...params}>{text || children}</Element>
      {help && (
        <HelpButton
          title={help.title}
          displayMethod="inline"
          contentId={help.contentId}
        >
          {help.contents}
        </HelpButton>
      )}
    </>
  )

  return help && isVertical ? (
    <div
      className={classnames(
        'dnb-form-label-wrapper',
        isVertical && `dnb-form-label-wrapper--vertical`,
        isTrue(sr_only) && 'dnb-sr-only'
      )}
    >
      {content}
    </div>
  ) : (
    <>{content}</>
  )
}

FormLabel._supportsSpacingProps = true
