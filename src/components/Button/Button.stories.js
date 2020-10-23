import React from 'react';

import Button from './';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    type: {
      control: {
        type: 'radio',
        options: {
          'Default': '',
          'Primary': 'primary',
          'Secondary': 'secondary',
          'Tertiary': 'tertiary',
        },
      },
    },
    variant: {
      control: {
        type: 'check',
        options: {
          'Large': 'large',
          'Slim': 'slim',
          'Wide': 'wide',
        },
      },
    },
  },
};

const Template = (args) => <Button {...args} >{args.label}</Button>;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  type: '',
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  type: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Button',
  type: 'tertiary',
};
