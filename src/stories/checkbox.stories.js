import React from "react";

import { Checkbox } from "./../index.js";

export default {
  title: "React-Kariu/Atom/Input/Checkbox",
  component: Checkbox,
  argTypes: {
    textColor: { control: "color" },
    backgroundColor: {
      control: "color",
      description: "You can customize the background color of the checkbox",
    },
    backgroundColorChecked: {
      control: "color",
      description:
        "You can customize the background color when the checkbox is checked",
    },
    id: {
      name: "id",
      type: { name: "string" },
      description: "Provides id to your checkbox.",
    },
    label: {
      name: "id",
      type: { name: "string", required: true },
      description:
        "Provides id to your checkbox. The component WILL NOT RENDER without it",
    },
  },
};

const Template = (args) => <Checkbox {...args} />;

export const Default = (args) => <Checkbox {...args} />;
Default.args = {
  value: "Default",
  id: "default-checkbox",
  onChange: () => {
    console.log("hello");
  },
};
