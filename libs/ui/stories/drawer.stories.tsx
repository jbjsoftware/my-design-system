import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../src/components/ui/drawer';
import { Button } from '../src/components/ui/button';
import { Input } from '../src/components/ui/input';
import { Label } from '../src/components/ui/label';

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  title: 'Drawer',
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    open: { control: 'boolean' },
  },
  args: {
    direction: 'bottom',
  },
};
export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: (args) => (
    <Drawer {...args}>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4 pb-0">
          <p className="text-sm text-muted-foreground">
            This will permanently delete your account and remove your data from
            our servers.
          </p>
        </div>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const BottomDrawer: Story = {
  render: () => (
    <Drawer direction="bottom">
      <DrawerTrigger asChild>
        <Button>Bottom Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Profile Settings</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="Pedro Duarte" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" defaultValue="pedro@example.com" />
          </div>
        </div>
        <DrawerFooter>
          <Button>Save changes</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const RightDrawer: Story = {
  render: () => (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline">Right Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Navigation Menu</DrawerTitle>
          <DrawerDescription>
            Browse through the different sections of the application.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <nav className="space-y-2">
            <a
              href="#"
              className="block px-2 py-1 text-sm hover:bg-accent rounded"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block px-2 py-1 text-sm hover:bg-accent rounded"
            >
              Projects
            </a>
            <a
              href="#"
              className="block px-2 py-1 text-sm hover:bg-accent rounded"
            >
              Team
            </a>
            <a
              href="#"
              className="block px-2 py-1 text-sm hover:bg-accent rounded"
            >
              Settings
            </a>
          </nav>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const LeftDrawer: Story = {
  render: () => (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="outline">Left Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Filters</DrawerTitle>
          <DrawerDescription>
            Apply filters to refine your search results.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4 space-y-4">
          <div>
            <Label className="text-sm font-medium">Category</Label>
            <div className="mt-2 space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Electronics</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Books</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Clothing</span>
              </label>
            </div>
          </div>
          <div>
            <Label className="text-sm font-medium">Price Range</Label>
            <div className="mt-2 space-y-2">
              <Input placeholder="Min price" />
              <Input placeholder="Max price" />
            </div>
          </div>
        </div>
        <DrawerFooter>
          <Button>Apply Filters</Button>
          <DrawerClose asChild>
            <Button variant="outline">Clear</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const TopDrawer: Story = {
  render: () => (
    <Drawer direction="top">
      <DrawerTrigger asChild>
        <Button variant="outline">Top Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Notifications</DrawerTitle>
          <DrawerDescription>
            You have 3 unread notifications.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <p className="text-sm font-medium">New message received</p>
                <p className="text-xs text-muted-foreground">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
              <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
              <div>
                <p className="text-sm font-medium">
                  Project deployed successfully
                </p>
                <p className="text-xs text-muted-foreground">1 hour ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
              <div className="w-2 h-2 rounded-full bg-orange-500 mt-2"></div>
              <div>
                <p className="text-sm font-medium">
                  System maintenance scheduled
                </p>
                <p className="text-xs text-muted-foreground">3 hours ago</p>
              </div>
            </div>
          </div>
        </div>
        <DrawerFooter>
          <Button variant="outline">Mark all as read</Button>
          <DrawerClose asChild>
            <Button variant="ghost">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

const ControlledDrawer = () => {
  const [open, setOpen] = React.useState(false);
  const [goal, setGoal] = React.useState(350);

  return (
    <div className="space-y-4">
      <Button onClick={() => setOpen(true)}>Edit Goal</Button>

      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => setGoal(Math.max(200, goal - 10))}
                disabled={goal <= 200}
              >
                -
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                  {goal}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  Calories/day
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => setGoal(Math.min(400, goal + 10))}
                disabled={goal >= 400}
              >
                +
              </Button>
            </div>
          </div>
          <DrawerFooter>
            <Button onClick={() => setOpen(false)}>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <div className="text-sm text-muted-foreground">
        Current goal: {goal} calories/day
      </div>
    </div>
  );
};

export const Controlled: Story = {
  render: () => <ControlledDrawer />,
};
