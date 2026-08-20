import React from "react";
import { cn } from "@/lib/cn";

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "border border-gray-300 rounded-4xl overflow-hidden bg-white",
                className
            )}
            {...props}
        />
    );
}