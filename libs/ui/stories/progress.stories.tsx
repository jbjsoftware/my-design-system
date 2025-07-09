import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Progress } from '../src/components/ui/progress';

const meta: Meta<typeof Progress> = {
  component: Progress,
  title: 'Progress',
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    className: { control: 'text' },
  },
  args: {
    value: 50,
  },
};
export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 50,
  },
};

export const Empty: Story = {
  args: {
    value: 0,
  },
};

export const Complete: Story = {
  args: {
    value: 100,
  },
};

export const DifferentValues: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        width: '100%',
      }}
    >
      <div>
        <div style={{ marginBottom: 8, fontSize: '14px' }}>25% Progress</div>
        <Progress {...args} value={25} />
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: '14px' }}>50% Progress</div>
        <Progress {...args} value={50} />
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: '14px' }}>75% Progress</div>
        <Progress {...args} value={75} />
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: '14px' }}>100% Progress</div>
        <Progress {...args} value={100} />
      </div>
    </div>
  ),
};

const AnimatedProgress = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 500);

    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div style={{ width: '100%' }}>
      <div style={{ marginBottom: 8, fontSize: '14px' }}>
        Animated Progress: {progress}%
      </div>
      <Progress value={progress} />
    </div>
  );
};

export const Animated: Story = {
  render: () => <AnimatedProgress />,
};
