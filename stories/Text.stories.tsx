import type { Meta, StoryObj } from '@storybook/react';
import Text from '../src/Atoms/Text/Text';

const meta = {
    title: 'Atoms/Text',
    component: Text,
    tags: ['autodocs'],
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    argTypes: {
        component: { control: 'select' }
      },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args) => <Text {...args} />;

export const Default: Story = Template.bind({});
Default.args = {
    text: 'This is a default text.',
};

export const Label: Story = Template.bind({});
Label.args = {
    text: 'This is a label.',
    variant: 'label',
};

export const Description: Story = Template.bind({});
Description.args = {
    text: 'This is a description.',
    variant: 'description',
};

export const Disabled: Story = Template.bind({});
Disabled.args = {
    text: 'This is a disabled text.',
    variant: 'disabled',
};

export const Italic: Story = Template.bind({});
Italic.args = {
    text: 'This is an italic text.',
    variant: 'italic',
};

export const Danger: Story = Template.bind({});
Danger.args = {
    text: 'This is an alert text.',
    variant: 'danger',
};

export const CustomColor: Story = Template.bind({});
CustomColor.args = {
    text: 'This is a text with a custom color.',
    textColor: 'blue',
}; 