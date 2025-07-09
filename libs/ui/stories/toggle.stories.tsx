import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Toggle } from '../src/components/ui/toggle';
import { BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react';

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: 'Toggle',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
    pressed: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onPressedChange: { action: 'pressed changed' },
  },
  args: {
    children: 'Toggle',
    variant: 'default',
    size: 'default',
    pressed: false,
    disabled: false,
  },
};
export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    children: 'Toggle me',
  },
};

export const Pressed: Story = {
  args: {
    children: 'Pressed',
    pressed: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Toggle {...args} variant="default">
        Default
      </Toggle>
      <Toggle {...args} variant="outline">
        Outline
      </Toggle>
    </div>
  ),
  args: {
    children: undefined,
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Toggle {...args} size="sm">
        Small
      </Toggle>
      <Toggle {...args} size="default">
        Default
      </Toggle>
      <Toggle {...args} size="lg">
        Large
      </Toggle>
    </div>
  ),
  args: {
    children: undefined,
  },
};

export const WithIcons: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Toggle {...args} size="sm">
        <BoldIcon />
      </Toggle>
      <Toggle {...args}>
        <ItalicIcon />
      </Toggle>
      <Toggle {...args} size="lg">
        <UnderlineIcon />
      </Toggle>
    </div>
  ),
  args: {
    children: undefined,
  },
};

const ToolbarExample = () => {
  const [textFormat, setTextFormat] = React.useState({
    bold: false,
    italic: false,
    underline: false,
  });

  const updateFormat =
    (format: keyof typeof textFormat) => (pressed: boolean) => {
      setTextFormat((prev) => ({ ...prev, [format]: pressed }));
    };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        maxWidth: 400,
      }}
    >
      <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>
        Text Formatting Toolbar
      </h3>

      <div style={{ display: 'flex', gap: 4 }}>
        <Toggle
          pressed={textFormat.bold}
          onPressedChange={updateFormat('bold')}
          variant="outline"
          size="sm"
        >
          <BoldIcon />
        </Toggle>
        <Toggle
          pressed={textFormat.italic}
          onPressedChange={updateFormat('italic')}
          variant="outline"
          size="sm"
        >
          <ItalicIcon />
        </Toggle>
        <Toggle
          pressed={textFormat.underline}
          onPressedChange={updateFormat('underline')}
          variant="outline"
          size="sm"
        >
          <UnderlineIcon />
        </Toggle>
      </div>

      <div
        style={{
          padding: 12,
          border: '1px solid #ccc',
          borderRadius: 4,
          fontWeight: textFormat.bold ? 'bold' : 'normal',
          fontStyle: textFormat.italic ? 'italic' : 'normal',
          textDecoration: textFormat.underline ? 'underline' : 'none',
        }}
      >
        Sample text with formatting applied
      </div>
    </div>
  );
};

export const Toolbar: Story = {
  render: () => <ToolbarExample />,
};
