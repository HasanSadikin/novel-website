import { StarIcon } from "@heroicons/react/24/solid";

interface Props {
  rating: number;
  className?: string;
}

const NovelRating = ({ rating = 0, className }: Props) => {
  return (
    <div className={`flex flex-row items-center h-6 ${className}`}>
      {Array.from(Array(rating), (e, i) => {
        return <StarIcon className="h-5 w-5 text-yellow-500" key={i} />;
      })}
      {rating < 5 &&
        Array.from(Array(5 - rating), (e, i) => {
          return <StarIcon className="h-5 w-5 text-gray-300" key={i} />;
        })}
    </div>
  );
};

export default NovelRating;
