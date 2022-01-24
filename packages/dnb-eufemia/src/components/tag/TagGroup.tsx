import React from 'react'
import classnames from 'classnames'

// Components
import { createSpacingClasses } from '../space/SpacingHelper'

// Shared
import Context from '../../shared/Context'
import { ISpacingProps } from '../../shared/interfaces'
import { extendPropsWithContext } from '../../shared/component-helper'
import Tag, { TagProps } from './Tag'

export interface TagGroupProps {
  /**
   * Aria label to describe the tag group
   * Default: null
   */
  label: string

  /**
   * Pass in a list of Tag objects.
   * Default: null
   */
  data?: TagProps[]

  /**
   * Custom className on the component root
   * Default: null
   */
  className?: string

  /**
   * The tags to group.
   * Default: null
   */
  children?: React.ReactNode
}

export const defaultProps = {
  label: null,
  className: null,
  children: null,
}

export const TagGroupContext = React.createContext(null)

function TagGroup(localProps: TagGroupProps & ISpacingProps) {
  // Every component should have a context
  const context = React.useContext(Context)
  // Extract additional props from global context
  const {
    label,
    className,
    children: childrenProp,
    data,
    ...props
  } = extendPropsWithContext(
    { ...defaultProps, ...localProps },
    defaultProps,
    context?.TagGroup
  )

  let children = childrenProp

  if (Array.isArray(childrenProp)) {
    children = [...childrenProp].map((child) => {
      return child
    })
  }

  const spacingClasses = createSpacingClasses(props)

  return (
    <TagGroupContext.Provider value={props}>
      <div
        className={classnames('dnb-tag--group', spacingClasses, className)}
        data-testid="tag-group"
        {...props}
      >
        <span data-testid="tag-group-label" className="dnb-sr-only">
          {label}
        </span>
        {data?.map((tag) => (
          <Tag key={`${tag.text}`} {...tag} />
        ))}
        {children}
      </div>
    </TagGroupContext.Provider>
  )
}

export default TagGroup