import React from "react";
import { Input } from "./Input";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Input",
  component: Input,
  decorators: [
    (Story) => {
      return (
        <div style={{ margin: "20px" }}>
          <Story />
        </div>
      );
    },
  ],
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Large = Template.bind({});
Large.args = {
  type: "text",
  placeholder: "enter username",
};

export const Small = Template.bind({});
Small.args = {
  type: "text",
  placeholder: "enter username",
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  type: "text",
  size: "medium",
  placeholder: "enter username",
};
