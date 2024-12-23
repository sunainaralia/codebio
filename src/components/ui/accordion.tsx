"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import Image from "next/image"

const Accordion = AccordionPrimitive.Root

type AccordionTriggerProps = {
  className?: string;
  icon?: any; // Define the icon prop here
  children?: ReactNode;
};


const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps & React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({icon, className,children, ...props }, ref) => {

  return(
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>img]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      {icon ? <Image alt="" src={icon} height={40} width={40} onClick={() => {
        console.log(ref)
      }} className=" shrink-0 transition-transform duration-200 icon" /> : <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 icon" />}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
)})
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
