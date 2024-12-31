import React from 'react';
import { cn } from "../../lib/utils";

const Button = React.forwardRef(({
                                     className,
                                     variant = 'default',
                                     children,
                                     ...props
                                 }, ref) => {
    return (
        <button
            className={cn(
                "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
                variant === 'default' && "bg-orange-500 text-white hover:bg-orange-600",
                variant === 'ghost' && "hover:bg-gray-100",
                className
            )}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    );
});

export default Button;
