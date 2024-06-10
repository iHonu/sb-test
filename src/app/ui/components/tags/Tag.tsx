import { cva } from 'class-variance-authority';
import { cn } from '@/app/utils/utils';
import { TagIcon } from './TagIcon';

export const tagVariants = cva('inline-flex items-center gap-1.5 px-2 rounded-md bg-transparent border border-[#333741] h-[26px] hover:text-black', {
  variants: {
    textSize: {
      small: 'text-xs',
      medium: 'text-sm',
      large: 'text-base',
    },
    textColor: {
      primary: 'text-[#0C111D]',
      secondary: 'text-[#1F242F]',
      gray500: 'text-gray-500',
      gray800: 'text-gray-800',
    },
    uppercase: {
      true: 'uppercase',
    },
    weight: {
      regular: 'font-normal',
      semiBold: 'font-semibold',
      bold: 'font-bold',
    },
    containerHeight: {
      fixed: 'h-[26px]',
      auto: 'h-auto',
    },
  }, 
  defaultVariants: {
    textSize: 'medium',
    textColor: 'gray500',
    uppercase: false,
    weight: 'regular',
    containerHeight: 'fixed',
  },
});

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  textSize?: 'small' | 'medium' | 'large';
  textColor?: 'primary' | 'secondary' | 'gray500' | 'gray800';
  uppercase?: boolean;
  weight?: 'regular' | 'semiBold' | 'bold';
  containerHeight?: 'fixed' | 'auto';
  label: string;
  iconColor?: 'primary' | 'blue' | 'pink' | 'green';
}

export const Tag = ({
  label,
  textSize,
  textColor,
  uppercase,
  weight,
  containerHeight,
  iconColor = 'primary',
  className,
  ...props
} : TagProps) => {
  return (
    <div className={cn(tagVariants({ textSize, textColor, uppercase, weight, containerHeight }), className)} {...props}>
      <TagIcon iconColor={iconColor}/>
      {label}
    </div>
  );
};
