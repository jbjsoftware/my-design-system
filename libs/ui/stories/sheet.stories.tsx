import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '../src/components/ui/sheet';
import { Button } from '../src/components/ui/button';

const meta: Meta<typeof Sheet> = {
  component: Sheet,
  title: 'Sheet',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Sheet>;

export const Basic: Story = {
  args: {},
  render: (args) => (
    <Sheet {...args}>
      <SheetTrigger asChild>
        <Button>Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>Sheet content here</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
};
