import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProgressBar } from "../src/Animation";

const meta = {
  title: "Animation/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "centered",
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
  tags: ["autodocs"]
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 40,
    max: 100,
    color: '#3498db',
  },
};

export const CustomColor: Story = {
  args: {
    value: 70,
    max: 100,
    color: '#e74c3c',
  },
};


export const WithClassAndStyle: Story = {
  args: {
    value: 85,
    max: 100,
    color: '#9b59b6',
    className: 'my-custom-class',
    sx: { height: '20px', borderRadius: '10px' },
  },
}; 