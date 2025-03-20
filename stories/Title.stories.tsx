import type { Meta, StoryObj } from '@storybook/react';
import Title from '../src/Atoms/Text/Title';

const meta = {

  title: 'Atoms/Title',

  component: Title,

  tags: ['autodocs'],

  parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      layout: 'centered',
  },
  argTypes: {
      priority: { control: 'select' }
    },

} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args) => <Title {...args} />;

export const H1: Story = Template.bind({});
H1.args = {
  text: 'This is a default text.',
  priority: 1,
};

export const H2: Story = Template.bind({});
H2.args = {
  text: 'This is a default text.',
  priority: 2,
};

export const H3: Story = Template.bind({});
H3.args = {
  text: 'This is a default text.',
  priority: 3,
};

export const H4: Story = Template.bind({});
H4.args = {
  text: 'This is a default text.',
  priority: 4,
};

export const H5: Story = Template.bind({});
H5.args = {
  text: 'This is a default text.',
  priority: 5,
};

export const H6: Story = Template.bind({});
H6.args = {
  text: 'This is a default text.',
  priority: 6,
};




