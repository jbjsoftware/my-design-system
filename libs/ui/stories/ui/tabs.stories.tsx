import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '../../src/components/ui/tabs';

const meta = {
  title: 'UI/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="space-y-1 p-4">
          <h3 className="font-semibold">Account</h3>
          <p className="text-sm text-muted-foreground">
            Make changes to your account here. Click save when you're done.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="space-y-1 p-4">
          <h3 className="font-semibold">Password</h3>
          <p className="text-sm text-muted-foreground">
            Change your password here. After saving, you'll be logged out.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const ThreeTabs: Story = {
  render: () => (
    <Tabs defaultValue="general" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
      </TabsList>
      <TabsContent value="general">
        <div className="space-y-1 p-4">
          <h3 className="font-semibold">General Settings</h3>
          <p className="text-sm text-muted-foreground">
            General settings for your account.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="billing">
        <div className="space-y-1 p-4">
          <h3 className="font-semibold">Billing</h3>
          <p className="text-sm text-muted-foreground">
            Manage your billing settings.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="team">
        <div className="space-y-1 p-4">
          <h3 className="font-semibold">Team</h3>
          <p className="text-sm text-muted-foreground">
            Manage your team settings.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};
