import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '../src/components/ui/input';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Input',
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
  },
  args: {
    placeholder: 'Type here...',
    disabled: false,
    value: '',
  },
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
};
