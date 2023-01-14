import React, { Children } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Textarea } from "./textarea";

export default {
  title: "Example/Textarea",
  component: Textarea,
  argTypes: {
    cols: { control: "number" },
    rows: { control: "number" },
    placeholder: { control: "text" },
  },
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const TextareaComponentSmall = Template.bind({});
TextareaComponentSmall.args = {
  cols: 30,
  rows: 5,
  placeholder: "Was gibt's neues?",
};
export const TextareaComponentLarge = Template.bind({});
TextareaComponentLarge.args = {
  cols: 60,
  rows: 5,
  placeholder: "Deine Meinung zählt!",
};
