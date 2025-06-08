/**
 * Rating module.
 *
 * @module Rating
 * @description Renders star icons representing the rating and shows review count.
 */
import { FaRegStar, FaStar, FaStarHalfStroke } from 'react-icons/fa6';

/**
 * Props for Rating component.
 *
 * @interface RatingProps
 * @property {number} rating - The rating value from 0 to 5.
 * @property {number} reviewsCount - The number of reviews.
 */
export type RatingProps = {
  rating: number;
  reviewsCount: number;
};

/**
 * Rating component displaying star icons for the rating.
 *
 * Shows full, half, or empty stars based on rating, displays numeric rating and review count.
 *
 * @component
 * @param props - Component props.
 * @returns The rating element with stars and review count.
 */
function Rating({ rating, reviewsCount }: RatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center">
      {Array.from({ length: fullStars }, (_, i) => (
        <FaStar key={i} className="text-yellow-500" />
      ))}

      {Array.from({ length: 5 - fullStars - (hasHalfStar ? 1 : 0) }, (_, i) => (
        <FaRegStar key={i + fullStars} className="text-yellow-500" />
      ))}

      {hasHalfStar && <FaStarHalfStroke className="text-yellow-500" />}

      {rating > 0 && (
        <span className="ml-2 text-sm">
          {Number.isInteger(rating) ? rating : rating.toFixed(1)} / 5
        </span>
      )}

      {reviewsCount > 0 && (
        <span className="text-muted-foreground ml-2 text-sm">
          ({reviewsCount})
        </span>
      )}

      {rating === 0 && reviewsCount === 0 && (
        <p className="text-muted-foreground ml-1 text-xs">No reviews</p>
      )}
    </div>
  );
}

export default Rating;
