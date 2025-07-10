import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Label } from '../../src/components/ui/label';

const meta = {
  title: 'UI/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Label',
  },
};

export const WithHtmlFor: Story = {
  args: {
    htmlFor: 'email',
    children: 'Email Address',
  },
};

export const Required: Story = {
  args: {
    children: 'Required Field *',
  },
};
