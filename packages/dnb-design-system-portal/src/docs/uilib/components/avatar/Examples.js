/**
 * UI lib Component Example
 *
 */

import ComponentBox from 'dnb-design-system-portal/src/shared/tags/ComponentBox'
import {
  card as Card,
  account_card as AccountCard,
  confetti as Confetti,
} from '@dnb/eufemia/src/icons'

export const AvatarSizeDefault = () => (
  <ComponentBox hideCode data-visual-test="avatar-size-default">
    {() => /* jsx */ `
<Avatar>A</Avatar>
  `}
  </ComponentBox>
)

export const AvatarSizeSmall = () => (
  <ComponentBox hideCode data-visual-test="avatar-size-small">
    {() => /* jsx */ `
<Avatar size="small">A</Avatar>
  `}
  </ComponentBox>
)

export const AvatarSizeMedium = () => (
  <ComponentBox hideCode data-visual-test="avatar-size-medium">
    {() => /* jsx */ `
<Avatar size="medium">A</Avatar>
  `}
  </ComponentBox>
)

export const AvatarSizeLarge = () => (
  <ComponentBox hideCode data-visual-test="avatar-size-large">
    {() => /* jsx */ `
<Avatar size="large">A</Avatar>
  `}
  </ComponentBox>
)

export const AvatarSizeXLarge = () => (
  <ComponentBox hideCode data-visual-test="avatar-size-x-large">
    {() => /* jsx */ `
<Avatar size="x-large">A</Avatar>
  `}
  </ComponentBox>
)

export const AvatarVariantDefault = () => (
  <ComponentBox hideCode data-visual-test="avatar-variant-default">
    {() => /* jsx */ `
<Avatar>A</Avatar>
  `}
  </ComponentBox>
)

export const AvatarVariantPrimary = () => (
  <ComponentBox hideCode data-visual-test="avatar-variant-primary">
    {() => /* jsx */ `
<Avatar variant="primary">A</Avatar>
  `}
  </ComponentBox>
)

export const AvatarVariantSecondary = () => (
  <ComponentBox hideCode data-visual-test="avatar-variant-secondary">
    {() => /* jsx */ `
<Avatar variant="secondary">A</Avatar>
  `}
  </ComponentBox>
)

export const AvatarVariantTertiary = () => (
  <ComponentBox hideCode data-visual-test="avatar-variant-tertiary">
    {() => /* jsx */ `
<Avatar variant="tertiary">A</Avatar>
  `}
  </ComponentBox>
)

export const AvatarConfettiIcon = () => (
  <ComponentBox
    hideCode
    scope={{ Confetti }}
    data-visual-test="avatar-children-icon-primary"
  >
    {() => /* jsx */ `
<Avatar variant="primary">
  <Icon icon={Confetti} />
</Avatar>
  `}
  </ComponentBox>
)

export const AvatarCardIcon = () => (
  <ComponentBox
    hideCode
    scope={{ Card }}
    data-visual-test="avatar-children-icon-secondary"
  >
    {() => /* jsx */ `
<Avatar variant="secondary">
  <Icon icon={Card} />
</Avatar>
  `}
  </ComponentBox>
)

export const AvatarAccountCardIcon = () => (
  <ComponentBox
    hideCode
    scope={{ AccountCard }}
    data-visual-test="avatar-children-icon-tertiary"
  >
    {() => /* jsx */ `
<Avatar variant="tertiary">
  <Icon icon={AccountCard} />
</Avatar>
  `}
  </ComponentBox>
)

export const AvatarDNBLogo = () => (
  <ComponentBox hideCode data-visual-test="avatar-children-logo">
    {() => /* jsx */ `
<Avatar>
  <Logo/>
</Avatar>
  `}
  </ComponentBox>
)

export const AvatarImageDNB = () => (
  <ComponentBox hideCode data-visual-test="avatar-image-local-png">
    {() => /* jsx */ `
<Avatar 
  src="/android-chrome-192x192.png" 
  alt="DNB Logo" 
  size="x-large"
/>
  `}
  </ComponentBox>
)

export const AvatarImagePinnedTab = () => (
  <ComponentBox hideCode data-visual-test="avatar-image-local-svg">
    {() => /* jsx */ `
<Avatar 
  variant="tertiary"
  src="/safari-pinned-tab.svg" 
  alt="DNB Logo" 
/>
  `}
  </ComponentBox>
)

export const AvatarImageTobias = () => (
  <ComponentBox hideCode data-visual-test="avatar-image-external">
    {() => /* jsx */ `
<Avatar 
  src="https://avatars.githubusercontent.com/u/1501870?v=4" 
  alt="Profile picture" 
  size="large"
/>
  `}
  </ComponentBox>
)

export const AvatarImageProps = () => (
  <ComponentBox
    hideCode
    noFragments={false}
    data-visual-test="avatar-image-props"
  >
    {() => /* jsx */ `
() => {
  const imgProps = {
    width: "48", 
    height: "48", 
    src: "/android-chrome-192x192.png" , 
    alt: "DNB Logo"
  };
  
  return (
    <Avatar 
      variant="secondary"
      size="large" 
      imgProps={imgProps} 
    />
  )
}
`}
  </ComponentBox>
)

export const GroupedAvatarsSmall = () => (
  <ComponentBox hideCode data-visual-test="avatar-grouped-small">
    {() => /* jsx */ `
<Avatar.Group size="small" variant="primary" maxElements={6}>
  <Avatar>A</Avatar>
  <Avatar>B</Avatar>
  <Avatar>C</Avatar>
  <Avatar>D</Avatar>
  <Avatar>E</Avatar>
  <Avatar>F</Avatar>
  <Avatar>G</Avatar>
</Avatar.Group>
  `}
  </ComponentBox>
)

export const GroupedAvatarsMedium = () => (
  <ComponentBox hideCode data-visual-test="avatar-grouped-medium">
    {() => /* jsx */ `
<Avatar.Group size="medium" maxElements={5}>
  <Avatar>A</Avatar>
  <Avatar>B</Avatar>
  <Avatar>C</Avatar>
  <Avatar>D</Avatar>
  <Avatar>E</Avatar>
  <Avatar>F</Avatar>
  <Avatar>G</Avatar>
</Avatar.Group>
  `}
  </ComponentBox>
)

export const GroupedAvatarsLarge = () => (
  <ComponentBox hideCode data-visual-test="avatar-grouped-large">
    {() => /* jsx */ `
<Avatar.Group size="large" variant="tertiary" maxElements={4}>
  <Avatar>A</Avatar>
  <Avatar>B</Avatar>
  <Avatar>C</Avatar>
  <Avatar>D</Avatar>
  <Avatar>E</Avatar>
  <Avatar>F</Avatar>
  <Avatar>G</Avatar>
</Avatar.Group>
  `}
  </ComponentBox>
)

export const GroupedAvatarsXLarge = () => (
  <ComponentBox hideCode data-visual-test="avatar-grouped-x-large">
    {() => /* jsx */ `
<Avatar.Group size="x-large" variant="secondary" maxElements={3}>
  <Avatar>A</Avatar>
  <Avatar>B</Avatar>
  <Avatar>C</Avatar>
  <Avatar>D</Avatar>
  <Avatar>E</Avatar>
  <Avatar>F</Avatar>
  <Avatar>G</Avatar>
</Avatar.Group>
  `}
  </ComponentBox>
)

export const GroupedAvatarsImg = () => (
  <ComponentBox hideCode data-visual-test="avatar-grouped-image">
    {() => /* jsx */ `
<Avatar.Group size="large" maxElements={5}>
  <Avatar src="https://avatars.githubusercontent.com/u/1501870?v=4" alt="Profile picture"/>
  <Avatar src="https://avatars.githubusercontent.com/u/35217511?v=4" alt="Profile picture"/>
  <Avatar src="https://avatars.githubusercontent.com/u/21338570?v=4" alt="Profile picture"/>
  <Avatar src="https://avatars.githubusercontent.com/u/1359205?v=4" alt="Profile picture"/>
  <Avatar src="https://avatars.githubusercontent.com/u/1501870?v=4" alt="Profile picture"/>
  <Avatar src="https://avatars.githubusercontent.com/u/1501870?v=4" alt="Profile picture"/>
  <Avatar src="https://avatars.githubusercontent.com/u/1501870?v=4" alt="Profile picture"/>
</Avatar.Group>
  `}
  </ComponentBox>
)