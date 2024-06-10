import { cn } from '@/app/utils/utils';
import { Image } from './Image';
import { CardText } from './card/CardText';
import { TagsGroup } from './tags/TagGroup';
import { TagProps } from './tags/Tag';

export interface NewsCardProps {
    author: string;
    date: string;
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    tags: TagProps[];
}

const data = {
    author: 'Lara Malta',
    date: '23 Apr 2024',
    title: 'Exploring the blockchain',
    description: 'Vestibulum ultrices elementum eros, sed interdum orci scelerisque et. Suspendisse potenti dolor sol amit ultrices elementum. Vestibulum ultrices elementum eros, sed interdum orci scelerisque et. Suspendisse potenti dolor sol amit ultrices elementum...',
    imageSrc: '/image1.png',
    imageAlt: 'image1',
    tags: [
        { label: 'Development', iconColor: 'primary' },
        { label: 'Marketing', iconColor: 'blue' },
        { label: 'Blockchain', iconColor: 'pink' },
    ],
};


export const NewsCard = ({} : NewsCardProps) => {
    return (
        <div className={cn('flex flex-col gap-4 ')}>
            <Image src='/image1.png' alt="image1" />
            <CardText author={data.author} date={data.date} title={data.title} description={data.description}/>
            <TagsGroup tags={data.tags as TagProps[]} />
        </div>
    )
}
