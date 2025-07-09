import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Label } from '../src/components/ui/label';
import { Input } from '../src/components/ui/input';

const meta: Meta<typeof Label> = {
  component: Label,
  title: 'Label',
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    children: 'Label text',
  },
};
export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Email',
  },
};

export const WithInput: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        maxWidth: 300,
      }}
    >
      <Label htmlFor="email" {...args}>
        Email Address
      </Label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </div>
  ),
  args: {
    children: undefined,
  },
};

export const Required: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        maxWidth: 300,
      }}
    >
      <Label htmlFor="required-field" {...args}>
        Password <span style={{ color: 'red' }}>*</span>
      </Label>
      <Input id="required-field" type="password" placeholder="Enter password" />
    </div>
  ),
  args: {
    children: undefined,
  },
};

export const MultipleFields: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        maxWidth: 400,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Label htmlFor="firstname" {...args}>
          First Name
        </Label>
        <Input id="firstname" placeholder="John" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Label htmlFor="lastname" {...args}>
          Last Name
        </Label>
        <Input id="lastname" placeholder="Doe" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Label htmlFor="age" {...args}>
          Age
        </Label>
        <Input id="age" type="number" placeholder="25" />
      </div>
    </div>
  ),
  args: {
    children: undefined,
  },
};

export const Disabled: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        maxWidth: 300,
      }}
      data-disabled="true"
    >
      <Label htmlFor="disabled-field" {...args}>
        Disabled Field
      </Label>
      <Input id="disabled-field" disabled placeholder="Cannot edit" />
    </div>
  ),
  args: {
    children: undefined,
  },
};
