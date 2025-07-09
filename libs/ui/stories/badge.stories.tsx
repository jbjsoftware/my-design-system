import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Badge } from '../src/components/ui/badge';
import { AlertTriangleIcon, BellIcon, StarIcon } from 'lucide-react';

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: 'Badge',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
    asChild: { control: 'boolean' },
  },
  args: {
    children: 'Badge',
    variant: 'default',
    asChild: false,
  },
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Default Badge',
  },
};

export const Variants: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    >
      <Badge {...args} variant="default">
        Default
      </Badge>
      <Badge {...args} variant="secondary">
        Secondary
      </Badge>
      <Badge {...args} variant="destructive">
        Destructive
      </Badge>
      <Badge {...args} variant="outline">
        Outline
      </Badge>
    </div>
  ),
  args: {
    children: undefined,
  },
};

export const WithIcons: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    >
      <Badge {...args} variant="default">
        <StarIcon />
        Featured
      </Badge>
      <Badge {...args} variant="secondary">
        <BellIcon />
        Notification
      </Badge>
      <Badge {...args} variant="destructive">
        <AlertTriangleIcon />
        Warning
      </Badge>
    </div>
  ),
  args: {
    children: undefined,
  },
};

export const AsChild: Story = {
  args: {
    asChild: true,
    children: (
      <a href="#" style={{ textDecoration: 'none' }}>
        Badge as Link
      </a>
    ),
    variant: 'outline',
  },
};
