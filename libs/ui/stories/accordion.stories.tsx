import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../src/components/ui/accordion';

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Accordion',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
    },
    collapsible: { control: 'boolean' },
  },
  args: {
    collapsible: true,
  },
};
export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
        <AccordionContent>
          Yes! When type is set to &quot;multiple&quot;, you can have multiple
          items open at the same time.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How does this work?</AccordionTrigger>
        <AccordionContent>
          Each accordion item can be opened independently of the others. This is
          useful for FAQ sections or settings panels.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Any limitations?</AccordionTrigger>
        <AccordionContent>
          No significant limitations! You can open as many items as you need.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const FAQ: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <h2 style={{ marginBottom: 16, fontSize: '24px', fontWeight: 600 }}>
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="shipping">
          <AccordionTrigger>What are your shipping options?</AccordionTrigger>
          <AccordionContent>
            We offer standard shipping (5-7 business days), express shipping
            (2-3 business days), and overnight shipping. Free standard shipping
            is available for orders over $75.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="returns">
          <AccordionTrigger>What is your return policy?</AccordionTrigger>
          <AccordionContent>
            We accept returns within 30 days of purchase. Items must be in
            original condition with tags attached. Return shipping is free for
            defective items or our errors.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="sizing">
          <AccordionTrigger>How do I find the right size?</AccordionTrigger>
          <AccordionContent>
            Each product page includes a detailed size chart. If you&apos;re
            between sizes, we generally recommend sizing up. Our customer
            service team is also available to help with sizing questions.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="care">
          <AccordionTrigger>How should I care for my items?</AccordionTrigger>
          <AccordionContent>
            Care instructions are included with each item and can be found on
            the product page. Generally, we recommend washing in cold water and
            air drying to maintain quality and color.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const LongContent: Story = {
  render: (args) => (
    <Accordion {...args} className="w-full max-w-lg">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is Lorem Ipsum?</AccordionTrigger>
        <AccordionContent>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
          <br />
          <br />
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Why do we use it?</AccordionTrigger>
        <AccordionContent>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &apos;Content here, content here&apos;,
          making it look like readable English.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
