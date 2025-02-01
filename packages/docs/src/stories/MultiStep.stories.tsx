import type { Meta, StoryObj } from "@storybook/react";
import { Box, MultiStep, Text, MultiStepProps } from "@ignite-ui/react";

export default {
  title: "Form/Multi Step",
  component: MultiStep,

  args: {
    currentStep: 1,
    size: 4,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<MultiStepProps>;

export const Primary: StoryObj<MultiStepProps> = {};

export const Full: StoryObj<MultiStepProps> = {
  args: {
    size: 4,
    currentStep: 4,
  },
};
