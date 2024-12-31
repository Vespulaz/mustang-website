﻿import React from "react";
import { cn } from "../../lib/utils";

// eslint-disable-next-line react/display-name
const Input = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <input
            className={cn(
                "flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            ref={ref}
            {...props}
        />
    );
});

export default Input;
