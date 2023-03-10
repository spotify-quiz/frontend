// Button.stories.js|jsx

import React from 'react'

import { Button } from './Button'

export default {
  /* ๐ The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button
}

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <Button {...args} />

//๐ Each story then reuses that template
export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button'
}
