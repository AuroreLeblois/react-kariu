import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { D20Roller } from "../src/Animation";
import type { D20RollerFace } from "../src/Animation/D20Roller";

const meta = {
  title: "Animation/D20Roller",
  component: D20Roller,
  parameters: {
    layout: "centered",
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "number", min: 1, max: 20, step: 1 },
      description: "Active face",
    },
    defaultValue: {
      control: { type: "number", min: 1, max: 20, step: 1 },
      description: "Initial face",
    },
    size: {
      control: { type: "number", min: 120, max: 360, step: 10 },
      description: "Size of the die in pixels",
    },
    faceColor: {
      control: "color",
      description: "Color of the faces",
    },
    textColor: {
      control: "color",
      description: "Color of the labels",
    },
    shadowColor: {
      control: "color",
      description: "Color of the shadow",
    },
    transitionDuration: {
      control: { type: "number", min: 100, max: 2000, step: 50 },
      description: "Duration of the transition between two faces",
    },
    animationDuration: {
      control: { type: "number", min: 500, max: 6000, step: 100 },
      description: "Duration of the animation of the roll",
    },
    selectedScale: {
      control: { type: "number", min: 1, max: 2, step: 0.05 },
      description: "Scale applied to the selected face label at the end of a roll",
    },
    selectedScaleDuration: {
      control: { type: "number", min: 100, max: 1500, step: 50 },
      description: "Duration of the selected face scale effect",
    },
    randomizeOnClick: {
      control: "boolean",
      description: "Roll a random face on click",
    },
    disabled: {
      control: "boolean",
      description: "Disable the interaction",
    },
  },
} satisfies Meta<typeof D20Roller>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: 20,
    size: 220,
    faceColor: "rgba(30, 180, 20, 0.75)",
    textColor: "#ffffff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    transitionDuration: 500,
    animationDuration: 3000,
    selectedScale: 1.25,
    selectedScaleDuration: 450,
    randomizeOnClick: true,
    disabled: false,
  },
};

export const CustomStyle: Story = {
  args: {
    defaultValue: 8,
    size: 240,
    faceColor: "rgba(39, 104, 180, 0.82)",
    textColor: "#f8fbff",
    shadowColor: "rgba(4, 20, 38, 0.45)",
    animationDuration: 2200,
    selectedScale: 1.35,
  },
};

export const Controlled: Story = {
  args: {
    size: 220,
    faceColor: "rgba(155, 73, 28, 0.82)",
    textColor: "#fff8ed",
    randomizeOnClick: false,
  },
  render: (args) => {
    const [face, setFace] = useState<D20RollerFace>(1);

    return (
      <div style={{ display: "grid", gap: 16, justifyItems: "center" }}>
        <D20Roller {...args} value={face} />
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", maxWidth: 360 }}>
          {Array.from({ length: 20 }, (_, index) => {
            const value = (index + 1) as D20RollerFace;
            return (
              <button
                key={value}
                type="button"
                onClick={() => setFace(value)}
                style={{
                  width: 34,
                  height: 34,
                  border: "1px solid #d2d6dc",
                  borderRadius: 4,
                  background: value === face ? "#20242a" : "#ffffff",
                  color: value === face ? "#ffffff" : "#20242a",
                  cursor: "pointer",
                  fontWeight: 700,
                }}
              >
                {value}
              </button>
            );
          })}
        </div>
      </div>
    );
  },
};

export const CustomLabels: Story = {
  args: {
    defaultValue: 20,
    size: 240,
    faceColor: "rgba(112, 60, 164, 0.78)",
    labels: {
      1: "FAIL",
      20: "CRIT",
    },
  },
};

export const WithResultAction: Story = {
  args: {
    defaultValue: 12,
    size: 220,
    faceColor: "rgba(31, 126, 96, 0.82)",
    textColor: "#ffffff",
    animationDuration: 1600,
    selectedScale: 1.4,
  },
  render: (args) => {
    const [result, setResult] = useState<D20RollerFace | null>(null);

    const getOutcome = (face: D20RollerFace) => {
      if (face === 1) return "Critical failure";
      if (face === 20) return "Critical success";
      if (face >= 15) return "Success";
      if (face >= 10) return "Mixed result";
      return "Failure";
    };

    return (
      <div style={{ display: "grid", gap: 18, justifyItems: "center" }}>
        <D20Roller {...args} onResult={setResult} />
        <div
          style={{
            minWidth: 220,
            padding: "12px 16px",
            border: "1px solid #d2d6dc",
            borderRadius: 6,
            color: "#20242a",
            fontFamily: "sans-serif",
            textAlign: "center",
          }}
        >
          {result ? `Result ${result}: ${getOutcome(result)}` : "Roll the die"}
        </div>
      </div>
    );
  },
};
