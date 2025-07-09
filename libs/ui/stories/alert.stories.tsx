import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import {
  Alert,
  AlertTitle,
  AlertDescription,
} from '../src/components/ui/alert';
import { AlertTriangleIcon, InfoIcon, LightbulbIcon } from 'lucide-react';

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: 'Alert',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
    },
  },
  args: {
    variant: 'default',
  },
};
export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: (args) => (
    <Alert {...args} variant="destructive">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
  args: {
    variant: 'destructive',
  },
};

export const WithIcon: Story = {
  render: (args) => (
    <Alert {...args}>
      <LightbulbIcon />

      <AlertTitle>Pro tip!</AlertTitle>
      <AlertDescription>
        You can use keyboard shortcuts to navigate faster.
      </AlertDescription>
    </Alert>
  ),
};

export const DestructiveWithIcon: Story = {
  render: (args) => (
    <Alert {...args} variant="destructive">
      <AlertTriangleIcon />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        This action cannot be undone. This will permanently delete your data.
      </AlertDescription>
    </Alert>
  ),
  args: {
    variant: 'destructive',
  },
};

export const LongContent: Story = {
  render: (args) => (
    <Alert {...args}>
      <InfoIcon />
      <AlertTitle>Important Information</AlertTitle>
      <AlertDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget
        aliquam massa nisl quis neque. Etiam euismod, urna eu tincidunt
        consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.
        Vivamus euismod, urna eu tincidunt consectetur.
      </AlertDescription>
    </Alert>
  ),
};
