import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from '@/app/ui/components/tags/Tag';

const meta = {
    title: "Atom/Tag",
    component: Tag,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Development',
        textSize: 'medium',
        textColor: 'primary',
        uppercase: false,
        weight: 'regular',
        containerHeight: 'fixed',
        iconColor: 'primary',
    },
}

export const Large: Story = {
    args: {
        label: 'Marketing',
        textSize: 'large',
        textColor: 'secondary',
        uppercase: true,
        weight: 'bold',
        containerHeight: 'auto',
        iconColor: 'pink',
    },
}

export const Small: Story = {
    args: {
        label: 'Blockchain',
        textSize: 'small',
        textColor: 'gray500',
        uppercase: true,
        weight: 'semiBold',
        containerHeight: 'auto',
        iconColor: 'green',
    },
}

export const Uppercase: Story = {
    args: {
        label: 'Development',
        textSize: 'medium',
        textColor: 'primary',
        uppercase: true,
        weight: 'regular',
        containerHeight: 'fixed',
        iconColor: 'primary',
    },
}

export const Bold: Story = {
    args: {
        label: 'Marketing',
        textSize: 'large',
        textColor: 'secondary',
        uppercase: false,
        weight: 'bold',
        containerHeight: 'auto',
        iconColor: 'pink',
    },
}