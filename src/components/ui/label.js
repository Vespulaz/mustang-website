import React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "../../lib/utils";

// eslint-disable-next-line react/display-name
const Label = React.forwardRef(({ className, ...props }, ref) => (
    <LabelPrimitive.Root
        ref={ref}
        className={cn(
            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            className
        )}
        {...props}
    />
));

export default Label;
