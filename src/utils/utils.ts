/**
 * Utility functions module.
 *
 * @module Utils
 * @description Provides helper functions for class name concatenation and merging.
 */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines and merges Tailwind CSS class names.
 *
 * Applies `clsx` to conditionally join class values and `twMerge` to dedupe and merge them.
 *
 * @param inputs - Class values to process.
 * @returns The final class string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
