import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton } from '../src/components/ui/skeleton';

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  title: 'Skeleton',
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
    style: { control: 'object' },
  },
  args: {
    className: '',
    style: { width: 120, height: 24 },
  },
};
export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Basic: Story = {
  args: {},
};
