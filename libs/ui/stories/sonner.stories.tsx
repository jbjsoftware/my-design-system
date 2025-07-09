import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { toast } from 'sonner';
import { Toaster } from '../src/components/ui/sonner';
import { Button } from '../src/components/ui/button';

const meta: Meta<typeof Toaster> = {
  component: Toaster,
  title: 'Sonner',
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ],
    },
    richColors: { control: 'boolean' },
    closeButton: { control: 'boolean' },
  },
  args: {
    position: 'bottom-right',
    richColors: false,
    closeButton: false,
  },
};
export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: (args) => (
    <div className="space-y-4">
      <Toaster {...args} />
      <div className="space-y-2">
        <Button onClick={() => toast('This is a basic toast message')}>
          Show Basic Toast
        </Button>
        <Button onClick={() => toast.success('This is a success message')}>
          Success Toast
        </Button>
        <Button onClick={() => toast.error('This is an error message')}>
          Error Toast
        </Button>
        <Button onClick={() => toast.warning('This is a warning message')}>
          Warning Toast
        </Button>
        <Button onClick={() => toast.info('This is an info message')}>
          Info Toast
        </Button>
      </div>
    </div>
  ),
};

export const BasicToasts: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <div className="grid grid-cols-2 gap-4">
        <Button onClick={() => toast('Event has been created')}>
          Basic Toast
        </Button>
        <Button
          onClick={() =>
            toast('Event has been created', {
              description: 'Sunday, December 03, 2023 at 9:00 AM',
            })
          }
        >
          With Description
        </Button>
        <Button
          onClick={() =>
            toast('Event has been created', {
              action: {
                label: 'Undo',
                onClick: () => console.log('Undo'),
              },
            })
          }
        >
          With Action
        </Button>
        <Button
          onClick={() =>
            toast.promise(new Promise((resolve) => setTimeout(resolve, 2000)), {
              loading: 'Loading...',
              success: 'Data loaded successfully!',
              error: 'Error loading data',
            })
          }
        >
          Promise Toast
        </Button>
      </div>
    </div>
  ),
};

export const TypedToasts: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster richColors />
      <div className="grid grid-cols-2 gap-4">
        <Button
          variant="outline"
          onClick={() => toast.success('Account created successfully')}
        >
          Success
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.error('Failed to save changes')}
        >
          Error
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.warning('Storage space is running low')}
        >
          Warning
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.info('New update available')}
        >
          Info
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.loading('Processing...', { duration: 2000 })}
        >
          Loading
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast('Custom styled toast', {
              style: {
                background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
                color: 'white',
              },
            })
          }
        >
          Custom Style
        </Button>
      </div>
    </div>
  ),
};

export const CustomActions: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <div className="space-y-2">
        <Button
          onClick={() =>
            toast('File uploaded successfully', {
              action: {
                label: 'View',
                onClick: () => console.log('View file'),
              },
            })
          }
        >
          Toast with Action
        </Button>
        <Button
          onClick={() =>
            toast('Are you sure you want to delete this?', {
              action: {
                label: 'Delete',
                onClick: () => toast.success('Item deleted'),
              },
              cancel: {
                label: 'Cancel',
                onClick: () => console.log('Cancelled'),
              },
            })
          }
        >
          Toast with Cancel
        </Button>
        <Button
          onClick={() => {
            const toastId = toast('This will auto-dismiss in 5 seconds', {
              duration: 5000,
              action: {
                label: 'Dismiss now',
                onClick: () => toast.dismiss(toastId),
              },
            });
          }}
        >
          Dismissible Toast
        </Button>
      </div>
    </div>
  ),
};

const ToastDemo = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="space-y-4">
      <Toaster position="top-center" closeButton richColors />
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Interactive Toast Demo</h3>
        <p className="text-sm text-muted-foreground">
          Try different toast types and see them in action.
        </p>
        <div className="grid grid-cols-2 gap-2">
          <Button
            size="sm"
            onClick={() => {
              setCount((c) => c + 1);
              toast(`Toast #${count + 1}`, {
                description: `This is toast number ${count + 1}`,
              });
            }}
          >
            Increment Toast ({count})
          </Button>
          <Button
            size="sm"
            variant="destructive"
            onClick={() => toast.dismiss()}
          >
            Dismiss All
          </Button>
          <Button
            size="sm"
            onClick={() =>
              toast.promise(
                fetch('https://jsonplaceholder.typicode.com/posts/1').then(
                  (res) => res.json()
                ),
                {
                  loading: 'Fetching data...',
                  success: (data) => `Loaded post: ${data.title}`,
                  error: 'Failed to fetch data',
                }
              )
            }
          >
            Fetch Promise
          </Button>
          <Button
            size="sm"
            onClick={() =>
              toast('Persistent toast', {
                duration: Infinity,
                action: {
                  label: 'Close',
                  onClick: () => toast.dismiss(),
                },
              })
            }
          >
            Persistent Toast
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Interactive: Story = {
  render: () => <ToastDemo />,
};
