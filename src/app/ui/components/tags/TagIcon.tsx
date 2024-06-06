import { cn } from '@/app/utils/utils';

const iconColorVariants = {
    primary: 'bg-[#D4FF00]',
    blue: 'bg-[#0D75FD]',
    pink: 'bg-[#FF878D]',
    green: 'bg-[#22C55E]',
    };

interface TagIconProps {
    iconColor: 'primary' | 'blue' | 'pink' | 'green';
    customColor?: string;
}

export const TagIcon = ({ iconColor, customColor} : TagIconProps) => {
    const color = customColor ? customColor : iconColorVariants[iconColor];
    return (
        <div className={cn('w-2 h-2 rounded-full', color)}></div>
    )
}