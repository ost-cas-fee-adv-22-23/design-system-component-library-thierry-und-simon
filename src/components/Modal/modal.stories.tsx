import React, { Children } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Modal } from "./modal";

export default {
  title: "Layout/Modal",
  component: Modal,
  argTypes: {
    children: {},
    type: {
      control: "radio",
      options: ["default", "settings", "upload"],
    },
    title: { control: "text" },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args}>Titel</Modal>
);

export const ModalComponent = Template.bind({});
ModalComponent.args = {
  type: "default",
  title: "Modal",
};
export const ModalComponentSettings = Template.bind({});
ModalComponentSettings.args = {
  type: "settings",
};
export const ModalComponentUpload = Template.bind({});
ModalComponentUpload.args = {
  type: "upload",
};
