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


export const Default: Story = {
    args: {
        text: 'This is a default text.',
    },
};

export const Label: Story = {
    args: {
        text: 'This is a label.',
        variant: 'label',
    },
};

export const Description: Story = {
    args: {
        text: 'This is a description.',
        variant: 'description',
    },
};

export const Disabled: Story = {
    args: {
        text: 'This is a disabled text.',
        variant: 'disabled',
    },
};

export const Italic: Story = {
    args: {
        text: 'This is an italic text.',
        variant: 'italic',
    },
};

export const Danger: Story = {
    args: {
        text: 'This is an alert text.',
        variant: 'danger',
    },
};

export const CustomColor: Story = {
    args: {
        text: 'This is a text with a custom color.',
        textColor: 'blue',
    },
}; 