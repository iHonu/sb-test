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




export const NewsCard = ({author, date, title, description, tags} : NewsCardProps) => {
    return (
        <div className={cn('flex flex-col gap-4 ')}>
            <Image src='/image1.png' alt="image1" />
            <CardText author={author} date={date} title={title} description={description}/>
            <TagsGroup tags={tags as TagProps[]} />
        </div>
    )
}
