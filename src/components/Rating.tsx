import { Star, StarHalf } from 'lucide-react'; 

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
        <Star key={i} className="text-yellow-500" />
      ))}

      {hasHalfStar && <StarHalf className="text-yellow-500" />}

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
        <p className="text-muted-foreground text-xs">No reviews</p>
      )}
    </div>
  );
}

export default Rating;
