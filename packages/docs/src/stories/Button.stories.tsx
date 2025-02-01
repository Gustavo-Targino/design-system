import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps, Text } from "@ignite-ui/react";
import { ArrowRight } from "@phosphor-icons/react";

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Send",
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    children: "Tertiary",
    variant: "tertiary",
  },
};

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: "sm",
  },
};

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        <Text>Próximo passo</Text>

        <ArrowRight />
      </>
    ),
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
};
