import React from "react";

export interface CarouselProps<T> {
  /**
   * Optional ID for the carousel
   */
  id?: string;

  /**
   * Space between slides (in pixels)
   */
  spaceBetween?: number;

  /**
   * List of items to display in the carousel
   */
  items: Array<T>;

  /**
   * Fonction for each item
   */
  renderItem: (item: T) => React.ReactNode;
  /**
   * If true, the carousel will loop
   */
  loop?: boolean;
  /**
   * Delay between slides if you loop
   */
  delay?: number;
}
