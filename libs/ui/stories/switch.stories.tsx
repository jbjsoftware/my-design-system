import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Switch } from '../src/components/ui/switch';
import { Label } from '../src/components/ui/label';

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: 'Switch',
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onCheckedChange: { action: 'checked changed' },
  },
  args: {
    checked: false,
    disabled: false,
  },
};
export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Switch id="notifications" {...args} />
      <Label htmlFor="notifications">Enable notifications</Label>
    </div>
  ),
};

const InteractiveSwitch = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        maxWidth: 300,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Switch
          id="interactive-switch"
          checked={checked}
          onCheckedChange={setChecked}
        />
        <Label htmlFor="interactive-switch">
          {checked ? 'Enabled' : 'Disabled'}
        </Label>
      </div>
      <p style={{ fontSize: '14px', color: '#666' }}>
        Current state: {checked ? 'ON' : 'OFF'}
      </p>
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveSwitch />,
};

const FormExampleComponent = () => {
  const [settings, setSettings] = React.useState({
    notifications: true,
    marketing: false,
    analytics: true,
  });

  const updateSetting = (key: keyof typeof settings) => (checked: boolean) => {
    setSettings((prev) => ({ ...prev, [key]: checked }));
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
        Privacy Settings
      </h3>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Label htmlFor="notifications-switch">Push Notifications</Label>
        <Switch
          id="notifications-switch"
          checked={settings.notifications}
          onCheckedChange={updateSetting('notifications')}
        />
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Label htmlFor="marketing-switch">Marketing Emails</Label>
        <Switch
          id="marketing-switch"
          checked={settings.marketing}
          onCheckedChange={updateSetting('marketing')}
        />
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Label htmlFor="analytics-switch">Analytics Tracking</Label>
        <Switch
          id="analytics-switch"
          checked={settings.analytics}
          onCheckedChange={updateSetting('analytics')}
        />
      </div>
    </div>
  );
};

export const FormExample: Story = {
  render: () => <FormExampleComponent />,
};
