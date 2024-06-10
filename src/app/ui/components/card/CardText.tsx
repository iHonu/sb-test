import { cn } from '@/app/utils/utils';
import { Typography } from '../../typography/Typography';

interface CardTextProps {
    author: string;
    date: string;
    title: string;
    description: string;
}

export const CardText = ( { author, date, title, description} : CardTextProps) => {
    return (
        <div className={cn('py-6 w-[362px]')}>
      <Typography as="p" className="mb-2" textSize="medium" weight="regular" colorVariant="gray800">
        {author} • {date}
      </Typography>
      <Typography as="h2" className="mb-4 hover:text-gray-800" textSize="large" weight="bold" colorVariant="primary">
        {title}
      </Typography>
      <Typography as="p" className="mb-4 line-clamp-3" textSize="medium" weight="regular" colorVariant="gray500">
        {description}
      </Typography>
    </div>
    )
}