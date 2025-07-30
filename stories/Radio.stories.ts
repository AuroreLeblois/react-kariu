import { Meta, StoryObj } from '@storybook/react-vite';
import Radio from '../src/Input/Radio';

const meta: Meta<typeof Radio> = {
  title: 'Atoms/Input/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    label: 'Option Radio',
    checked: false,
    size: 'medium',
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    ...Default.args,
    checked: true,
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const CustomColor: Story = {
  args: {
    ...Default.args,
    checked: true,
    color: '#ff5722',
  },
};

export const WithRippleDisabled: Story = {
  args: {
    ...Default.args,
    ripple: false,
  },
};

export const WithCustomRippleColor: Story = {
  args: {
    ...Default.args,
    checked: true,
    rippleColor: '#00bcd4',
  },
};