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
        customColor: '',
    },
}