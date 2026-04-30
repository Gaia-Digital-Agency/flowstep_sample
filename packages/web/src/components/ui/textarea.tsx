import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "flex min-h-[120px] w-full rounded-md border border-[#E8E2DC] bg-white px-3 py-2 text-sm text-[#1F1B17] placeholder:text-[#1F1B17]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4714F] focus-visible:border-[#C4714F] disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
