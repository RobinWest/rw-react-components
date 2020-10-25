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
          'Default (Secondary)': '',
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
          'Full width': 'full-width',
        },
      },
    },
  },
};

const Template = (args) => <Button type={args.type} variant={args.variant} >{args.label}</Button>;

export const Default = Template.bind({});
Default.storyName = 'Default (secondary)';
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
