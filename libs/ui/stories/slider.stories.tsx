import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Slider } from '../src/components/ui/slider';
import { Label } from '../src/components/ui/label';

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: 'Slider',
  tags: ['autodocs'],
  argTypes: {
    defaultValue: { control: 'object' },
    value: { control: 'object' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    disabled: { control: 'boolean' },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    orientation: 'horizontal',
  },
};
export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    defaultValue: [50],
  },
};

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: [50],
    disabled: true,
  },
};

export const CustomRange: Story = {
  args: {
    defaultValue: [20],
    min: 0,
    max: 200,
    step: 10,
  },
};

export const WithLabels: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        maxWidth: 400,
      }}
    >
      <div>
        <Label>Volume: 50%</Label>
        <Slider {...args} defaultValue={[50]} />
      </div>
    </div>
  ),
};

export const MultipleSliders: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        maxWidth: 400,
      }}
    >
      <div>
        <Label>Volume</Label>
        <Slider defaultValue={[75]} />
      </div>
      <div>
        <Label>Brightness</Label>
        <Slider defaultValue={[60]} />
      </div>
      <div>
        <Label>Temperature</Label>
        <Slider defaultValue={[20, 80]} min={-10} max={100} />
      </div>
    </div>
  ),
};

const InteractiveSlider = () => {
  const [value, setValue] = React.useState([50]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        maxWidth: 400,
      }}
    >
      <Label>Interactive Slider: {value[0]}%</Label>
      <Slider value={value} onValueChange={setValue} max={100} step={1} />
      <div style={{ fontSize: '14px', color: '#666' }}>
        Current value: {value[0]}
      </div>
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveSlider />,
};

const RangeSlider = () => {
  const [range, setRange] = React.useState([20, 80]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        maxWidth: 400,
      }}
    >
      <Label>
        Price Range: ${range[0]} - ${range[1]}
      </Label>
      <Slider value={range} onValueChange={setRange} max={100} step={1} />
      <div style={{ fontSize: '14px', color: '#666' }}>
        Selected range: ${range[0]} to ${range[1]}
      </div>
    </div>
  );
};

export const RangeSelection: Story = {
  render: () => <RangeSlider />,
};

export const Vertical: Story = {
  render: (args) => (
    <div
      style={{ height: 200, display: 'flex', alignItems: 'center', gap: 24 }}
    >
      <Slider {...args} orientation="vertical" defaultValue={[30]} />
      <Slider {...args} orientation="vertical" defaultValue={[20, 80]} />
    </div>
  ),
  args: {
    orientation: 'vertical',
  },
};
