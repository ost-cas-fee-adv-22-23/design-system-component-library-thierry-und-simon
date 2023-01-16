import React, { Children } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FormWrapper } from "./formWrapper";
import { Input } from "../Input/input";
import { Textarea } from "../Textarea/textarea";
import { Modal, ModalDevice } from "../../Modal/modal";
import { Label, LabelType } from "../Label/label";
import { Button, ButtonSize, ButtonColor } from "../../Button/button";
import { Icon, IconType } from "../../Icon/Icon";

export default {
  title: "Layout/Form",
  component: FormWrapper,
} as ComponentMeta<typeof FormWrapper>;

const Template: ComponentStory<typeof FormWrapper> = (args) => (
  <FormWrapper {...args} />
);

export const SettingsForm = Template.bind({});
SettingsForm.args = {
  children: (
    <>
      <Modal
        title="Einstellungen"
        device={ModalDevice.mobile}
        initialState={true}
      >
        <FormWrapper onSubmit={() => null}>
          <Label type={LabelType.XL}>Persönliche Einstellungen</Label>
          <Input type="text" label="Name Vorname" id="1" />
          <Input type="email" label="E-Mail Adresse" id="2" />
          <Input type="text" label="Ortschaft" id="3" />
          <Textarea rows={2} label="Biografie" />
          <Label type={LabelType.XL}>Passwort ändern</Label>
          <Input type="password" label="Altes Passwort" id="4" />
          <Input type="password" label="Neues Passwort" id="5" />
          <div className="flex grow flex-row gap-4 mt-xl">
            <Button
              size={ButtonSize.medium}
              color={ButtonColor.slate}
              label="Abbrechen"
            >
              <span className="ml-xs">
                <Icon type={IconType.cancel} color="#ffffff" />
              </span>
            </Button>
            <Button
              size={ButtonSize.medium}
              color={ButtonColor.violet}
              label="Speichern"
            >
              <span className="ml-xs">
                <Icon type={IconType.confirm} color="#ffffff" />
              </span>
            </Button>
          </div>
        </FormWrapper>
      </Modal>
    </>
  ),
};
