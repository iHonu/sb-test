import type { Meta, StoryObj } from '@storybook/react';
import { CardText } from '@/app/ui/components/card/CardText';

const meta: Meta<typeof CardText> = {
  title: 'Molecule/CardText',
  component: CardText,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    author: { control: 'text' },
    date: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    author: 'Lara Malta',
    date: '23 Apr 2024',
    title: 'Exploring the blockchain',
    description: 'Vestibulum ultrices elementum eros, sed interdum orci scelerisque et. Suspendisse potenti dolor sol amit ultrices elementum. Vestibulum ultrices elementum eros, sed interdum orci scelerisque et. Suspendisse potenti dolor sol amit ultrices elementum...',
  },
};
