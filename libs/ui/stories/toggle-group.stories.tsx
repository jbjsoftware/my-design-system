import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import {
  ToggleGroup,
  ToggleGroupItem,
} from '../src/components/ui/toggle-group';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpDownIcon,
  BoldIcon,
  ItalicIcon,
  RulerIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from 'lucide-react';

const meta: Meta<typeof ToggleGroup> = {
  component: ToggleGroup,
  title: 'ToggleGroup',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
    },
    variant: {
      control: 'select',
      options: ['default', 'outline'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
    disabled: { control: 'boolean' },
  },
  args: {
    type: 'single',
    variant: 'default',
    size: 'default',
    disabled: false,
  },
};
export default meta;
type Story = StoryObj<typeof ToggleGroup>;

export const Default: Story = {
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
      <ToggleGroupItem value="center">Center</ToggleGroupItem>
      <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Single: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left">
        <span role="img" aria-label="align left">
          ↤
        </span>
      </ToggleGroupItem>
      <ToggleGroupItem value="center">
        <span role="img" aria-label="align center">
          ↕
        </span>
      </ToggleGroupItem>
      <ToggleGroupItem value="right">
        <span role="img" aria-label="align right">
          ↦
        </span>
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Multiple: Story = {
  render: () => (
    <ToggleGroup type="multiple" defaultValue={['bold']}>
      <ToggleGroupItem value="bold">
        <strong>B</strong>
      </ToggleGroupItem>
      <ToggleGroupItem value="italic">
        <em>I</em>
      </ToggleGroupItem>
      <ToggleGroupItem value="underline">
        <u>U</u>
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-medium mb-2">Default</h4>
        <ToggleGroup type="single" variant="default">
          <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
          <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
          <ToggleGroupItem value="option3">Option 3</ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Outline</h4>
        <ToggleGroup type="single" variant="outline">
          <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
          <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
          <ToggleGroupItem value="option3">Option 3</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-medium mb-2">Small</h4>
        <ToggleGroup type="single" size="sm" variant="outline">
          <ToggleGroupItem value="sm1">Sm</ToggleGroupItem>
          <ToggleGroupItem value="sm2">Sm</ToggleGroupItem>
          <ToggleGroupItem value="sm3">Sm</ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Default</h4>
        <ToggleGroup type="single" size="default" variant="outline">
          <ToggleGroupItem value="def1">Default</ToggleGroupItem>
          <ToggleGroupItem value="def2">Default</ToggleGroupItem>
          <ToggleGroupItem value="def3">Default</ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Large</h4>
        <ToggleGroup type="single" size="lg" variant="outline">
          <ToggleGroupItem value="lg1">Large</ToggleGroupItem>
          <ToggleGroupItem value="lg2">Large</ToggleGroupItem>
          <ToggleGroupItem value="lg3">Large</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  ),
};

const EditorToolbar = () => {
  const [alignment, setAlignment] = React.useState('left');
  const [formatting, setFormatting] = React.useState<string[]>([]);

  return (
    <div className="space-y-4 w-full max-w-md">
      <h3 className="text-lg font-medium">Text Editor Toolbar</h3>

      <div className="space-y-2">
        <label className="text-sm font-medium">Text Alignment</label>
        <ToggleGroup
          type="single"
          value={alignment}
          onValueChange={(value) => value && setAlignment(value)}
          variant="outline"
        >
          <ToggleGroupItem value="left">
            <ArrowLeftIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="center">
            <ArrowUpDownIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="right">
            <ArrowRightIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="justify">
            <RulerIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Text Formatting</label>
        <ToggleGroup
          type="multiple"
          value={formatting}
          onValueChange={setFormatting}
          variant="outline"
        >
          <ToggleGroupItem value="bold">
            <BoldIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <ItalicIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <UnderlineIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="strikethrough">
            <StrikethroughIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="text-sm text-muted-foreground">
        <p>Alignment: {alignment}</p>
        <p>
          Formatting: {formatting.length > 0 ? formatting.join(', ') : 'None'}
        </p>
      </div>
    </div>
  );
};

export const EditorExample: Story = {
  render: () => <EditorToolbar />,
};
