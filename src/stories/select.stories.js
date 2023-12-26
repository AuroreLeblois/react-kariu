import React from "react";

import { Select } from "./../index.js";

export default {
  title: "React-Kariu/Atom/Select",
  component: Select,
  argTypes: {
    backgroundColor: { control: "color" },
    backgroundColorSelected: { control: "color" },
    textColor: { control: "color" },
  },
};
const Template = (args) => <Select {...args} />;
export const Default = (args) => <Select {...args} />;
Default.args = {
  value: "Default",
  text: "Default text for select",
  label: "Label for default select: ",
  idSelect: "Default",
  name: "Default name",
  options: [
    { value: "", text: "Please select one" },
    { value: "1", text: "Option 1" },
    { value: "2", text: "Option 2" },
  ],
};
export const NoData = (args) => <Select {...args} />;
NoData.args = {
  value: "Default",
  text: "Default text for select",
  label: "Label for default select: ",
  idSelect: "Default",
  name: "Default name",
  options: [],
  noDataText: "No data available",
};

export const Loading = (args) => <Select {...args} />;
Loading.args = {
  value: "Default",
  text: "Default text for select",
  idSelect: "Default",
  name: "Default name",
  loading: true,
  options: [
    { value: "", text: "Please select one" },
    { value: "1", text: "Option 1" },
    { value: "2", text: "Option 2" },
  ],
  label: "Label for default select: ",
  textLoadingLabel: "Please wait while loading",
  textLoading: "i am loading...",
};
