import NextImage from 'next/image';
import { cva } from 'class-variance-authority';
import { cn } from '@/app/utils/utils';

const imageVariants = cva('relative rounded-2xl overflow-hidden', {
  variants: {
    size: {
      small: 'w-[180px] h-[120px]',
      medium: 'w-[362px] h-[240px]',
      large: 'w-[500px] h-[333px]',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

interface ImageProps {
  src: string;
  alt: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const Image = ({ src, alt, size, className, ...props } : ImageProps) => {
  return (
    <div className={cn(imageVariants({ size }), className)}>
      <NextImage
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="rounded-2xl"
        {...props}
      />
    </div>
  );
};

