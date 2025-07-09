import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '../src/components/ui/tabs';
import { Button } from '../src/components/ui/button';
import { Input } from '../src/components/ui/input';
import { Label } from '../src/components/ui/label';
import { CreditCardIcon, LockIcon, SettingsIcon } from 'lucide-react';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: 'Tabs',
  tags: ['autodocs'],
  argTypes: {
    defaultValue: { control: 'text' },
    value: { control: 'text' },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
  args: {
    defaultValue: 'tab1',
    orientation: 'horizontal',
  },
};
export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: (args) => (
    <Tabs {...args} className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="tab1">Account</TabsTrigger>
        <TabsTrigger value="tab2">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Account Settings</h3>
          <p className="text-sm text-muted-foreground">
            Make changes to your account here. Click save when you're done.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Password Settings</h3>
          <p className="text-sm text-muted-foreground">
            Change your password here. After saving, you'll be logged out.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" defaultValue="Pedro Duarte" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" defaultValue="@peduarte" />
        </div>
        <Button>Save changes</Button>
      </TabsContent>
      <TabsContent value="password" className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="current">Current password</Label>
          <Input id="current" type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="new">New password</Label>
          <Input id="new" type="password" />
        </div>
        <Button>Save password</Button>
      </TabsContent>
    </Tabs>
  ),
};

export const MultipleTabs: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-full max-w-2xl">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="space-y-4">
        <h3 className="text-lg font-medium">Overview</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border p-4">
            <h4 className="text-sm font-medium">Total Revenue</h4>
            <p className="text-2xl font-bold">$45,231.89</p>
          </div>
          <div className="rounded-lg border p-4">
            <h4 className="text-sm font-medium">Subscriptions</h4>
            <p className="text-2xl font-bold">+2350</p>
          </div>
          <div className="rounded-lg border p-4">
            <h4 className="text-sm font-medium">Sales</h4>
            <p className="text-2xl font-bold">+12,234</p>
          </div>
          <div className="rounded-lg border p-4">
            <h4 className="text-sm font-medium">Active Now</h4>
            <p className="text-2xl font-bold">+573</p>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="analytics" className="space-y-4">
        <h3 className="text-lg font-medium">Analytics</h3>
        <p className="text-muted-foreground">
          View detailed analytics and insights about your application.
        </p>
      </TabsContent>
      <TabsContent value="reports" className="space-y-4">
        <h3 className="text-lg font-medium">Reports</h3>
        <p className="text-muted-foreground">
          Generate and download reports for your business.
        </p>
      </TabsContent>
      <TabsContent value="notifications" className="space-y-4">
        <h3 className="text-lg font-medium">Notifications</h3>
        <p className="text-muted-foreground">
          Manage your notification preferences.
        </p>
      </TabsContent>
    </Tabs>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="general" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="general">
          <SettingsIcon />
          General
        </TabsTrigger>
        <TabsTrigger value="security">
          <LockIcon />
          Security
        </TabsTrigger>
        <TabsTrigger value="billing">
          <CreditCardIcon />
          Billing
        </TabsTrigger>
      </TabsList>
      <TabsContent value="general" className="space-y-4">
        <h3 className="text-lg font-medium">General Settings</h3>
        <p className="text-sm text-muted-foreground">
          Configure your general application settings.
        </p>
      </TabsContent>
      <TabsContent value="security" className="space-y-4">
        <h3 className="text-lg font-medium">Security Settings</h3>
        <p className="text-sm text-muted-foreground">
          Manage your security and privacy settings.
        </p>
      </TabsContent>
      <TabsContent value="billing" className="space-y-4">
        <h3 className="text-lg font-medium">Billing Settings</h3>
        <p className="text-sm text-muted-foreground">
          Manage your subscription and billing information.
        </p>
      </TabsContent>
    </Tabs>
  ),
};
