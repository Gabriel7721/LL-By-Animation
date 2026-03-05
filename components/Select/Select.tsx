import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export const Select = SelectPrimitive.Root;
export const SelectGroup = SelectPrimitive.Group;
export const SelectItemText = SelectPrimitive.ItemText;

type TriggerProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Trigger
>;
export const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  TriggerProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-between pt-2 pb-2 pl-2 pr-2 gap-2 outline outline-1 bg-white outline-neutral-300 rounded-md hover:bg-neutral-50 leading-3 max-h-10 text-left text-sm text-neutral-900 dark:outline-0 dark:text-primary-50 dark:hover:bg-neutral-700 dark:bg-neutral-600",
      className,
    )}
    {...props}
  />
));
SelectTrigger.displayName = "SelectTrigger";

export const SelectIconTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  TriggerProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center rounded-md px-3",
      "gap-2 justify-between",
      "text-sm leading-none text-white",
      "bg-black/60 hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
      "whitespace-nowrap",
      className,
    )}
    {...props}
  />
));
SelectIconTrigger.displayName = "SelectIconTrigger";

// Icon / Value
export const SelectIcon = SelectPrimitive.Icon;
export const SelectValue = SelectPrimitive.Value;

// Content
type ContentProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Content
>;
export const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  ContentProps
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "overflow-hidden bg-white z-50 shadow-md rounded-md",
        className,
      )}
      {...props}
    >
      {children}
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = "SelectContent";

// Viewport
type ViewportProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Viewport
>;
export const SelectViewport = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Viewport>,
  ViewportProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Viewport
    ref={ref}
    className={cn("p-1 min-w-[150px]", className)}
    {...props}
  />
));
SelectViewport.displayName = "SelectViewport";

// Item
type ItemProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>;
export const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  ItemProps
>(({ className, disabled, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    disabled={disabled}
    className={cn(
      "clear-both pl-10 pr-2 pt-2 pb-2 text-sm leading-normal cursor-default flex rounded-md items-center [&[data-highlighted]]:bg-primary-800 [&[data-highlighted]]:text-white",
      disabled
        ? "text-neutral-200 select-none"
        : "hover:bg-primary-800 hover:text-white",
      className,
    )}
    {...props}
  />
));
SelectItem.displayName = "SelectItem";

// Label
type LabelProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>;
export const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  LabelProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(
      "text-sm text-neutral-600 pl-2 pr-2 pt-1 pb-1 cursor-default",
      className,
    )}
    {...props}
  />
));
SelectLabel.displayName = "SelectLabel";

// Separator
type SeparatorProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Separator
>;
export const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  SeparatorProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("h-px bg-neutral-200 ml-px mr-px mt-1 mb-1", className)}
    {...props}
  />
));
SelectSeparator.displayName = "SelectSeparator";

// ItemIndicator
type IndicatorProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.ItemIndicator
>;
export const SelectItemIndicator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ItemIndicator>,
  IndicatorProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ItemIndicator
    ref={ref}
    className={cn(
      "absolute left-0 w-12 inline-flex items-center justify-center",
      className,
    )}
    {...props}
  />
));
SelectItemIndicator.displayName = "SelectItemIndicator";

// Scroll buttons
type ScrollUpProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.ScrollUpButton
>;
export const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  ScrollUpProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex items-center justify-center h-2 bg-neutral-900",
      className,
    )}
    {...props}
  />
));
SelectScrollUpButton.displayName = "SelectScrollUpButton";

type ScrollDownProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.ScrollDownButton
>;
export const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  ScrollDownProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex items-center justify-center h-2 bg-neutral-900",
      className,
    )}
    {...props}
  />
));
SelectScrollDownButton.displayName = "SelectScrollDownButton";
