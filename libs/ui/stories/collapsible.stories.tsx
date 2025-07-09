import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '../src/components/ui/collapsible';
import { Button } from '../src/components/ui/button';
import { ChevronsUpDown } from 'lucide-react';

const meta: Meta<typeof Collapsible> = {
  component: Collapsible,
  title: 'Collapsible',
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    open: false,
    disabled: false,
  },
};
export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: () => (
    <Collapsible className="w-full max-w-md space-y-2">
      <div className="flex items-center space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon" className="size-8">
            <ChevronsUpDown />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
};

const InteractiveCollapsible = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full max-w-md space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">Settings</h4>
        <CollapsibleTrigger asChild>
          <Button variant="outline" size="sm">
            {isOpen ? 'Hide' : 'Show'} Options
          </Button>
        </CollapsibleTrigger>
      </div>

      <div className="rounded-md border px-4 py-3 text-sm">
        Always visible content
      </div>

      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 text-sm">
          Advanced Setting 1
        </div>
        <div className="rounded-md border px-4 py-3 text-sm">
          Advanced Setting 2
        </div>
        <div className="rounded-md border px-4 py-3 text-sm">
          Advanced Setting 3
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveCollapsible />,
};

export const Disabled: Story = {
  render: () => (
    <Collapsible disabled className="w-full max-w-md space-y-2">
      <div className="flex items-center space-x-4 px-4">
        <h4 className="text-sm font-semibold">Disabled Section</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" disabled>
            Can't Toggle
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm opacity-50">
        This content cannot be toggled
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm opacity-50">
          Hidden content
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
};
