import * as React from "react"
import * as RadixSelect from "@radix-ui/react-select"
import { cn } from "@/lib/utils"

const Select = RadixSelect.Root
const SelectGroup = RadixSelect.Group
const SelectValue = RadixSelect.Value
const SelectTrigger = React.forwardRef<React.ElementRef<typeof RadixSelect.Trigger>, React.ComponentPropsWithoutRef<typeof RadixSelect.Trigger>>(({ className, children, ...props }, ref) => (
  <RadixSelect.Trigger ref={ref} className={cn("inline-flex items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent disabled:cursor-not-allowed disabled:opacity-50", className)} {...props}>
    {children}
    <RadixSelect.Icon className="ml-2 h-4 w-4 text-muted-foreground" />
  </RadixSelect.Trigger>
))
SelectTrigger.displayName = RadixSelect.Trigger.displayName

const SelectContent = React.forwardRef<React.ElementRef<typeof RadixSelect.Content>, React.ComponentPropsWithoutRef<typeof RadixSelect.Content>>(({ className, children, ...props }, ref) => (
  <RadixSelect.Portal>
    <RadixSelect.Content ref={ref} className={cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80", className)} {...props}>
      <RadixSelect.Viewport className="p-1">{children}</RadixSelect.Viewport>
    </RadixSelect.Content>
  </RadixSelect.Portal>
))
SelectContent.displayName = RadixSelect.Content.displayName

const SelectLabel = RadixSelect.Label
const SelectItem = React.forwardRef<React.ElementRef<typeof RadixSelect.Item>, React.ComponentPropsWithoutRef<typeof RadixSelect.Item>>(({ className, children, ...props }, ref) => (
  <RadixSelect.Item ref={ref} className={cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className)} {...props}>
    <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
    <RadixSelect.ItemIndicator className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M6 8l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </RadixSelect.ItemIndicator>
  </RadixSelect.Item>
))
SelectItem.displayName = RadixSelect.Item.displayName

const SelectSeparator = RadixSelect.Separator
const SelectArrow = RadixSelect.Arrow
const SelectIcon = RadixSelect.Icon
const SelectScrollUpButton = RadixSelect.ScrollUpButton
const SelectScrollDownButton = RadixSelect.ScrollDownButton
const SelectPortal = RadixSelect.Portal
const SelectViewport = RadixSelect.Viewport
const SelectItemText = RadixSelect.ItemText
const SelectItemIndicator = RadixSelect.ItemIndicator

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectArrow,
  SelectIcon,
  SelectScrollUpButton,
  SelectScrollDownButton,
  SelectPortal,
  SelectViewport,
  SelectItemText,
  SelectItemIndicator,
} 