import { title } from 'process';
import type { Meta, StoryObj } from '@storybook/react';
import { NewsCard } from '@/app/ui/components/NewsCard';

const meta: Meta<typeof NewsCard> = {
    title: 'Organism/NewsCard',
    component: NewsCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
      author: { control: 'text' },
        date: { control: 'text' },
        title: { control: 'text' },
        description: { control: 'text' },
        imageSrc: { control: 'text' },
        imageAlt: { control: 'text' },
        tags: {
            control: 'object',
        },
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
        imageSrc: '/image1.png',
        imageAlt: 'image1',
        tags: [
            { label: 'Development', iconColor: 'primary' },
            { label: 'Marketing', iconColor: 'blue' },
            { label: 'Blockchain', iconColor: 'pink' },
        ],
    },
};