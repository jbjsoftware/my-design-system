import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Progress } from '../../src/components/ui/progress';

const meta = {
  title: 'UI/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
    className: 'w-[60%]',
  },
};

export const Empty: Story = {
  args: {
    value: 0,
    className: 'w-[60%]',
  },
};

export const Full: Story = {
  args: {
    value: 100,
    className: 'w-[60%]',
  },
};

export const Small: Story = {
  args: {
    value: 25,
    className: 'w-[60%]',
  },
};

export const Large: Story = {
  args: {
    value: 75,
    className: 'w-[60%]',
  },
};
