import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { Checkbox } from '../src/components/ui/checkbox';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Checkbox',
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    'aria-invalid': {
      control: 'boolean',
      description: 'Whether the checkbox is in an invalid state',
    },
    className: {
      control: 'text',
      description: 'Custom class names for the checkbox',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    checked: false,
    'aria-invalid': true,
  },
};

// Interactive component to handle state properly
const InteractiveCheckbox = (args: any) => {
  const [checked, setChecked] = useState(args.checked || false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Checkbox
          {...args}
          checked={checked}
          onCheckedChange={setChecked}
          id="interactive-checkbox"
        />
        <label
          htmlFor="interactive-checkbox"
          style={{ cursor: 'pointer', userSelect: 'none' }}
        >
          Interactive checkbox (click to toggle)
        </label>
      </div>
      <p style={{ color: '#666', fontSize: '14px' }}>
        Checked: {checked ? 'Yes' : 'No'}
      </p>
    </div>
  );
};

export const Interactive: Story = {
  render: (args) => <InteractiveCheckbox {...args} />,
  args: {
    checked: false,
  },
};

export const WithLabels: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Checkbox {...args} id="terms" />
        <label
          htmlFor="terms"
          style={{ cursor: 'pointer', userSelect: 'none' }}
        >
          I agree to the terms and conditions
        </label>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Checkbox {...args} id="newsletter" defaultChecked />
        <label
          htmlFor="newsletter"
          style={{ cursor: 'pointer', userSelect: 'none' }}
        >
          Subscribe to newsletter
        </label>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Checkbox {...args} id="notifications" disabled />
        <label
          htmlFor="notifications"
          style={{
            cursor: 'not-allowed',
            userSelect: 'none',
            opacity: 0.5,
          }}
        >
          Enable notifications (disabled)
        </label>
      </div>
    </div>
  ),
  args: {},
};

export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          alignItems: 'center',
        }}
      >
        <Checkbox {...args} checked={false} />
        <span style={{ fontSize: '12px', color: '#666' }}>Unchecked</span>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          alignItems: 'center',
        }}
      >
        <Checkbox {...args} checked={true} />
        <span style={{ fontSize: '12px', color: '#666' }}>Checked</span>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          alignItems: 'center',
        }}
      >
        <Checkbox {...args} checked={false} disabled />
        <span style={{ fontSize: '12px', color: '#666' }}>Disabled</span>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          alignItems: 'center',
        }}
      >
        <Checkbox {...args} checked={true} disabled />
        <span style={{ fontSize: '12px', color: '#666' }}>
          Disabled Checked
        </span>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          alignItems: 'center',
        }}
      >
        <Checkbox {...args} checked={false} aria-invalid />
        <span style={{ fontSize: '12px', color: '#666' }}>Invalid</span>
      </div>
    </div>
  ),
  args: {},
};
