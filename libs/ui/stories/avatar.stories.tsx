import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from '../src/components/ui/avatar';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Avatar',
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const Fallback: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://broken-image-url.jpg" alt="Broken" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
};

export const WithoutImage: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>UI</AvatarFallback>
    </Avatar>
  ),
};

export const DifferentSizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Avatar {...args} className="h-6 w-6">
        <AvatarImage src="https://github.com/shadcn.png" alt="Small" />
        <AvatarFallback className="text-xs">S</AvatarFallback>
      </Avatar>
      <Avatar {...args}>
        <AvatarImage src="https://github.com/shadcn.png" alt="Default" />
        <AvatarFallback>M</AvatarFallback>
      </Avatar>
      <Avatar {...args} className="h-12 w-12">
        <AvatarImage src="https://github.com/shadcn.png" alt="Large" />
        <AvatarFallback>L</AvatarFallback>
      </Avatar>
      <Avatar {...args} className="h-16 w-16">
        <AvatarImage src="https://github.com/shadcn.png" alt="Extra Large" />
        <AvatarFallback className="text-lg">XL</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const MultipleFallbacks: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Avatar {...args}>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar {...args}>
        <AvatarFallback>CD</AvatarFallback>
      </Avatar>
      <Avatar {...args}>
        <AvatarFallback>EF</AvatarFallback>
      </Avatar>
      <Avatar {...args}>
        <AvatarFallback>
          <span role="img" aria-label="user">
            👤
          </span>
        </AvatarFallback>
      </Avatar>
    </div>
  ),
};
