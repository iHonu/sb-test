import type { Meta, StoryObj } from '@storybook/react';
import {Typography} from '@/app/ui/typography/Typography';

const meta = {
    title: "Atom/Typography",
    component: Typography,
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;
 
export const ParagraphMedium: Story = {
    args: {
        as: 'p',
        textSize: 'medium',
        weight: 'regular',
        colorVariant: 'regular',
        children: 'This is a medium paragraph with regular weight and regular color.',
    },
}

export const ParagraphSmall: Story = {
    args: {
        as: 'p',
        textSize: 'small',
        weight: 'regular',
        colorVariant: 'gray500',
        children: 'This is a small paragraph with regular weight and gray500 color.',
    },
}

export const ParagraphSmallSemi: Story = {
    args: {
        as: 'p',
        textSize: 'small',
        weight: 'semiBold',
        colorVariant: 'gray800',
        children: 'This is a small paragraph with semiBold weight and gray800 color.',
    },
}

export const HeadingSmall: Story = {
    args: {
        as: 'h3',
        textSize: 'large',
        weight: 'bold',
        colorVariant: 'primary',
        children: 'This is a large heading with bold weight and primary color.',
    },
}
