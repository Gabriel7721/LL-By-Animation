// components/RadioGroup/RadioGroup.tsx
import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export const RadioGroup = RadioGroupPrimitive.Root;

type RadioItemProps = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;
export const RadioGroupRadio = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioItemProps
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(
      // Giữ nguyên style mà ta đang set trong tw()
      'bg-primary-100 dark:bg-neutral-500 h-4 w-4 rounded-full cursor-pointer border border-primary-200 dark:border-none ' +
        'disabled:dark:bg-neutral-700 disabled:bg-neutral-100 ' +
        '[&[data-state="checked"]]:bg-primary-600',
      className
    )}
    {...props}
  />
));
RadioGroupRadio.displayName = "RadioGroupRadio";

type IndicatorProps = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Indicator>;
export const RadioGroupIndicator = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Indicator>,
  IndicatorProps
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Indicator
    ref={ref}
    className={cn(
      // Giữ nguyên style mà ta đang set trong tw()
      'flex items-center justify-center w-full h-full relative ' +
        'after:block after:content-[""] after:w-2 after:h-2 after:rounded-full after:bg-primary-50',
      className
    )}
    {...props}
  />
));
RadioGroupIndicator.displayName = "RadioGroupIndicator";