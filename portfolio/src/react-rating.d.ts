declare module "react-rating" {
  import * as React from "react";

  interface RatingProps {
    readonly?: boolean;
    stop?: number;
    initialRating?: number;
    emptySymbol?: React.ReactNode;
    fullSymbol?: React.ReactNode;
    fractions?: number;
    onChange?: (rating: number) => void;
    onClick?: (rating: number) => void;
    className?: string;
  }

  const Rating: React.FC<RatingProps>;

  export default Rating;
}
