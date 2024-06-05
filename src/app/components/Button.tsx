import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import { cn } from '../utils/utils';


const buttonVariants = cva('inline-flex items-center justify-center border border-transparent text-base font-medium rounded-md shadow-sm text-white', 
    {
        variants: {
            variant: {
                primary: 'bg-indigo-600 hover:bg-indigo-700',
                secondary: 'bg-gray-600 hover:bg-gray-700',
                danger: 'bg-red-600 hover:bg-red-700',
            },
            size: {
                small: 'px-2.5 py-1.5 text-xs',
                medium: 'px-4 py-2 text-sm',
                large: 'px-4 py-2 text-base'
            }
        },
        defaultVariants: {
            variant: 'primary',
            size: 'medium'
        },
    }
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export default function Button({className, size, variant, ...props}: ButtonProps) {
    return (
        <button className={cn(buttonVariants({variant, size, className}))} {...props}>
           Button
        </button>
    )

    
}