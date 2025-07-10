import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '../../src/components/ui/tooltip';
import { Button } from '../../src/components/ui/button';

const meta = {
  title: 'UI/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const WithArrow: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover for tooltip</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip with an arrow</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Long tooltip</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a much longer tooltip that might wrap to multiple lines</p>
      </TooltipContent>
    </Tooltip>
  ),
};
