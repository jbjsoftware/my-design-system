import type { Meta, StoryObj } from '@storybook/react-vite';
import { Separator } from '../src/components/ui/separator';

const meta: Meta<typeof Separator> = {
  component: Separator,
  title: 'Separator',
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'radio', options: ['horizontal', 'vertical'] },
    decorative: { control: 'boolean' },
  },
  args: {
    orientation: 'horizontal',
    decorative: false,
  },
};
export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    style: { height: 100 },
  },
};
