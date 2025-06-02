import { FaStar, FaStarHalfStroke, FaRegStar } from 'react-icons/fa6';

type RatingProps = {
  rating: number;
  reviewsCount: number;
};

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
        <span className="ml-2 text-sm text-muted-foreground">
            ({reviewsCount})
        </span>
        )}

        {rating === 0 && reviewsCount === 0 && (
        <p className="text-muted-foreground text-xs ml-1">No reviews</p>
        )}
    </div>
  );
}

export default Rating;
