import React from "react";

interface RatingProps {
  rating: number;
  type: string;
}

export const Rating: React.FC<RatingProps> = ({ rating, type }) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5; //checks if a half-star is needed.

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 24 24"
            data-testid="filled-star"
          >
            <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
          </svg>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <svg
            key={i}
            className="w-5 h-5"
            viewBox="0 0 24 24"
            data-testid="half-star"
          >
            <defs>
              <linearGradient id="half-fill">
                <stop offset="50%" stopColor="#FACC15" />
                <stop offset="50%" stopColor="#D1D5DB" />
              </linearGradient>
            </defs>
            <path
              fill="url(#half-fill)"
              d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"
            />
          </svg>
        );
      } else {
        stars.push(
          <svg
            key={i}
            className="w-5 h-5 text-gray-300"
            fill="currentColor"
            viewBox="0 0 24 24"
            data-testid="empty-star"
          >
            <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
          </svg>
        );
      }
    }
    return stars;
  };

  const renderCircles = () => {
    const circles = [];
    const fullCircles = Math.floor(rating);
    const hasHalfCircle = rating % 1 >= 0.5; //checks if a half-circle

    for (let i = 0; i < 5; i++) {
      if (i < fullCircles) {
        circles.push(
          <svg
            key={i}
            className="w-4 h-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 24 24"
            data-testid="filled-circle"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
        );
      } else if (i === fullCircles && hasHalfCircle) {
        circles.push(
          <svg
            key={i}
            className="w-4 h-4"
            viewBox="0 0 24 24"
            data-testid="half-circle"
          >
            <defs>
              <linearGradient id="half-circle-fill">
                <stop offset="50%" stopColor="#FACC15" />
                <stop offset="50%" stopColor="#D1D5DB" />
              </linearGradient>
            </defs>
            <circle cx="12" cy="12" r="10" fill="url(#half-circle-fill)" />
          </svg>
        );
      } else {
        circles.push(
          <svg
            key={i}
            className="w-4 h-4 text-gray-300"
            fill="currentColor"
            viewBox="0 0 24 24"
            data-testid="empty-circle"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
        );
      }
    }
    return circles;
  };

  return (
    <div className="flex" data-testid="rating">
      {type === "self" ? renderCircles() : renderStars()}
    </div>
  );
};
