import { Primary } from './../Button.stories';
import Button  from '@/app/components/Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Atom/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Prime: Story = {
    args: {
        variant: 'primary',
        size: 'medium',
        children: 'Primary Button',
    },
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        size: 'medium',
        children: 'Secondary Button',
    },
}

export const Danger: Story = {
    args: {
        variant: 'danger',
        size: 'medium',
        children: 'Danger Button',
    },
}

export const Small: Story = {
    args: {
        variant: 'primary',
        size: 'small',
        children: 'Small Button',
    },
}

export const Large: Story = {
    args: {
        variant: 'primary',
        size: 'large',
        children: 'Large Button',
    },
}



