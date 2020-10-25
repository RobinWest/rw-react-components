import React from 'react';

import Input from './';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    type: {
      control: {
        type: 'radio',
        options: {
          'Text': 'text',
          'Number': 'number',
        },
      },
    },
    disabled: false,
    error: false,
    // variant: {
    //   control: {
    //     type: 'check',
    //     options: {
    //       'Large': 'large',
    //       'Slim': 'slim',
    //       'Wide': 'wide',
    //       'Full width': 'full-width',
    //     },
    //   },
    // },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  type: 'text',
};

// export const Primary = Template.bind({});
// Primary.args = {
//   label: 'Button',
//   type: 'text',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
//   type: 'secondary',
// };

// export const Tertiary = Template.bind({});
// Tertiary.args = {
//   label: 'Button',
//   type: 'tertiary',
// };
