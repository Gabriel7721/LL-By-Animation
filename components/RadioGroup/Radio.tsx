// components/RadioGroup/Radio.tsx
import * as React from "react";
import { Label } from "../Label";
import { RadioGroupIndicator, RadioGroupRadio } from "./RadioGroup";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

type RadioItemProps = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;

interface IRadio extends Omit<RadioItemProps, "children"> {
  label: string;
}

export const Radio: React.FC<IRadio> = (props) => {
  const { label, id, disabled, ...itemProps } = props;

  return (
    <div className="flex items-center gap-2">
      <RadioGroupRadio id={id} disabled={disabled} {...itemProps}>
        <RadioGroupIndicator />
      </RadioGroupRadio>

      <Label
        className={`select-none font-normal ${
          disabled ? "dark:text-neutral-500 text-neutral-400" : "dark:text-white text-black"
        }`}
        htmlFor={id}
      >
        {label}
      </Label>
    </div>
  );
};