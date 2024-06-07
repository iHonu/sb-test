import type { Meta, StoryObj } from '@storybook/react';
import { TagsGroup } from '@/app/ui/components/tags/TagGroup';

const meta: Meta<typeof TagsGroup> = {
  title: 'Molecules/TagsGroup',
  component: TagsGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    tags: {
      control: 'object',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const OneTag: Story = {
  args: {
    tags: [
      { label: 'Development',  iconColor: 'primary' },
    ],
  },
};

export const TwoTags: Story = {
  args: {
    tags: [
      { label: 'Development',  iconColor: 'primary' },
      { label: 'Blockchain',  iconColor: 'pink' },
    ],
  },
};

export const ThreeTags: Story = {
  args: {
    tags: [
      { label: 'Development',  iconColor: 'primary' },
      { label: 'Marketing', iconColor: 'blue' },
      { label: 'Blockchain',  iconColor: 'pink' },
      
    ],
  },
};
