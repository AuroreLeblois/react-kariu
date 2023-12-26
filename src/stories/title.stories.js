import React from "react";
import { Title } from "./../index.js";

export default {
  title: "React-Kariu/Atom/Title",
  component: Title,
  argTypes: {
    text: {
      description: "value of the text",
      control: { type: "text" },
    },
    priority: {
      description: "priority of the title depending on the context usage",
      control: { type: "range", min: 1, max: 6 },
    },
    textColor: {
      description: "Control the color of your title",
      control: { type: "color" },
    },
    align: {
      description: "align the text",
      control: { type: "select" },
      options: ["left", "center", "right"],
    },
  },
};

export const Default = (args) => <Title {...args} />;
Default.args = {
  priority: 1,
  text: "This is a default title",
  align: "center",
};
