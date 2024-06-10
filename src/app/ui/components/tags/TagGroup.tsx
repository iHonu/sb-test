import { cn } from '@/app/utils/utils';
import { Tag, TagProps } from './Tag';

interface TagsGroupProps {
  tags: TagProps[];
  className?: string;
}

export const TagsGroup = ({ tags, className } : TagsGroupProps) => {
  return (
    <div className={cn('flex gap-2', className)}>
      {tags.slice(0, 3).map((tag, index) => (
        <Tag key={index} {...tag} />
      ))}
    </div>
  );
};
