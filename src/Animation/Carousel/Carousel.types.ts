import React from "react";

export interface CarouselProps<T> {
  /**
   * Optional ID for the carousel
   */
  id?: string;

  /**
   * Space between slides
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
}
