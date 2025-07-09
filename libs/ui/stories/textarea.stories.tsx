import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Textarea } from '../src/components/ui/textarea';
import { Label } from '../src/components/ui/label';

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  title: 'Textarea',
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    value: { control: 'text' },
    rows: { control: 'number' },
  },
  args: {
    placeholder: 'Type your message here...',
    disabled: false,
    readOnly: false,
  },
};
export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        maxWidth: 400,
      }}
    >
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" {...args} />
    </div>
  ),
};

export const WithValue: Story = {
  args: {
    value:
      'This is some pre-filled content in the textarea. You can edit this text.',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'This textarea is disabled and cannot be edited.',
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    value: 'This textarea is read-only. You cannot edit this content.',
  },
};

export const DifferentSizes: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        maxWidth: 500,
      }}
    >
      <div>
        <Label htmlFor="small">Small (3 rows)</Label>
        <Textarea
          id="small"
          {...args}
          rows={3}
          placeholder="Small textarea with 3 rows"
        />
      </div>
      <div>
        <Label htmlFor="medium">Medium (6 rows)</Label>
        <Textarea
          id="medium"
          {...args}
          rows={6}
          placeholder="Medium textarea with 6 rows"
        />
      </div>
      <div>
        <Label htmlFor="large">Large (10 rows)</Label>
        <Textarea
          id="large"
          {...args}
          rows={10}
          placeholder="Large textarea with 10 rows"
        />
      </div>
    </div>
  ),
  args: {
    placeholder: undefined,
  },
};

export const WithLongContent: Story = {
  args: {
    value: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.

Vivamus euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.

This demonstrates how the textarea handles longer content with multiple paragraphs and automatic resizing based on the field-sizing-content class.`,
    rows: 8,
  },
};
