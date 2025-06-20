import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from './card';
import { Button } from './button';
import type { ComponentProps } from 'react';

// Custom Storybook args type
interface CardStoryArgs extends ComponentProps<typeof Card> {
  cardTitle: string;
  cardDescription: string;
  cardContent: string;
}

const meta = {
  component: Card,
  title: 'Card',
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Custom class names for the Card',
    },
    style: { control: 'object', description: 'Custom styles for the Card' },
    cardTitle: { control: 'text', description: 'Title of the card' },
    cardDescription: {
      control: 'text',
      description: 'Description of the card',
    },
    cardContent: { control: 'text', description: 'Main content of the card' },
  },
  args: {
    className: '',
    style: {},
    cardTitle: 'Card Title',
    cardDescription: 'This is a description for the card.',
    cardContent: 'Card content goes here. You can put any React node here.',
  },
} as Meta<CardStoryArgs>;
export default meta;
type Story = StoryObj<CardStoryArgs>;

export const Basic: Story = {
  args: {},
  render: (args) => (
    <Card className={args.className} style={args.style}>
      <CardHeader>
        <CardTitle>{args.cardTitle}</CardTitle>
        <CardDescription>{args.cardDescription}</CardDescription>
        <CardAction>
          <Button size="sm">Action</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>{args.cardContent}</p>
      </CardContent>
      <CardFooter>
        <Button variant="secondary">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithLongContent: Story = {
  args: {
    cardTitle: 'Card with Long Content',
    cardDescription: 'Demonstrates how the card handles lots of content.',
    cardContent:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. More content here...',
  },
  render: (args) => (
    <Card className={args.className} style={args.style}>
      <CardHeader>
        <CardTitle>{args.cardTitle}</CardTitle>
        <CardDescription>{args.cardDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{args.cardContent}</p>
      </CardContent>
      <CardFooter>
        <Button>OK</Button>
      </CardFooter>
    </Card>
  ),
};
