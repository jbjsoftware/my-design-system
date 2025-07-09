import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../src/components/ui/dialog';
import { Button } from '../src/components/ui/button';
import { Input } from '../src/components/ui/input';
import { Label } from '../src/components/ui/label';

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  title: 'Dialog',
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    modal: { control: 'boolean' },
  },
  args: {
    modal: true,
  },
};
export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const Confirmation: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Delete Account</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const CustomSize: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Large Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogDescription>
            Please read our terms of service carefully.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div className="max-h-[300px] overflow-y-auto text-sm">
            <h4 className="font-medium mb-2">1. Acceptance of Terms</h4>
            <p className="mb-4">
              By accessing and using this service, you accept and agree to be
              bound by the terms and provision of this agreement.
            </p>

            <h4 className="font-medium mb-2">2. Use License</h4>
            <p className="mb-4">
              Permission is granted to temporarily download one copy of the
              materials on this website for personal, non-commercial transitory
              viewing only.
            </p>

            <h4 className="font-medium mb-2">3. Disclaimer</h4>
            <p className="mb-4">
              The materials on this website are provided on an 'as is' basis. We
              make no warranties, expressed or implied, and hereby disclaim and
              negate all other warranties including without limitation, implied
              warranties or conditions of merchantability, fitness for a
              particular purpose, or non-infringement of intellectual property
              or other violation of rights.
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Decline</Button>
          <Button>Accept</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

const ControlledDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');

  const handleSave = () => {
    console.log('Saving:', name);
    setOpen(false);
  };

  return (
    <div className="space-y-4">
      <Button onClick={() => setOpen(true)}>Open Controlled Dialog</Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create New Item</DialogTitle>
            <DialogDescription>
              Enter a name for your new item. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="item-name" className="text-right">
                Name
              </Label>
              <Input
                id="item-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="col-span-3"
                placeholder="Enter item name"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={!name.trim()}>
              Save Item
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {name && (
        <p className="text-sm text-muted-foreground">Last saved item: {name}</p>
      )}
    </div>
  );
};

export const Controlled: Story = {
  render: () => <ControlledDialog />,
};

export const WithoutCloseButton: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Important Notice</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false} className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Important Notice</DialogTitle>
          <DialogDescription>
            This is an important notice that requires your attention. You must
            acknowledge this message to continue.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm">
            Please confirm that you have read and understood this message.
          </p>
        </div>
        <DialogFooter>
          <Button className="w-full">I Understand</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
