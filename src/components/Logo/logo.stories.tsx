import React, { Children } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Logo } from "./logo";

export default {
  title: "Branding/Logo",
  component: Logo,
  argTypes: {
    children: {},
    type: {
      control: "radio",
      options: ["default", "gradient", "white"],
    },
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => (
  <Logo {...args}>Link Label</Logo>
);

export const LogoComponentDefault = Template.bind({});
LogoComponentDefault.args = {
  type: "default",
};
export const LogoComponentGradient = Template.bind({});
LogoComponentDefault.args = {
  type: "gradient",
};
export const LogoComponentWhite = Template.bind({});
LogoComponentDefault.args = {
  type: "white",
};
