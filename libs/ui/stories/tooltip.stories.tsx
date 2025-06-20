import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '../src/components/ui/tooltip';

import { Button } from '../src/components/ui/button';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: 'Tooltip',
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
  },
  args: {
    open: false,
  },
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  args: {},
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger asChild>
        <Button>Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Tooltip content</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const Hover: Story = {
  args: {
    open: true,
  },
  render: (args) => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover for tooltip</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This tooltip appears on hover!</p>
      </TooltipContent>
    </Tooltip>
  ),
};
