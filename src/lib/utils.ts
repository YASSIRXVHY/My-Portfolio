import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS classes safely, resolving conflicts.
 * This is the standard utility function used by Shadcn, Aceternity, etc.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
