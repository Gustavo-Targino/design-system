import { Check } from "@phosphor-icons/react/dist/ssr";
import { CheckboxContainer, CheckboxIndicator } from "./style";
import { ComponentProps } from "@stitches/react";

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {}

export function Checkbox({ ...props }: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  );
}
