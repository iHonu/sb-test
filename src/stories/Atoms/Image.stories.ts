import type { Meta, StoryObj } from '@storybook/react';
import { Image } from '@/app/ui/components/Image';

const meta: Meta<typeof Image> = {
  title: 'Atom/Image',
  component: Image,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    src: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: '/image1.png', 
    alt: 'Placeholder Image',
    
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    src: '/image1.png',
    alt: 'Placeholder Image',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    src: '/image1.png',
    alt: 'Placeholder Image',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    src: '/image1.png',
    alt: 'Placeholder Image',
  },
};



