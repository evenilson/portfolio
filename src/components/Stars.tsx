import { Star, StarHalf } from "phosphor-react";

interface StarsProps {
  name: string;
  starsNumber: number;
}

export function Stars({ name, starsNumber }: StarsProps) {
  const hasHalfStar = !Number.isInteger(starsNumber)
  return (
    <>
      {hasHalfStar && (
        <div className="inline-block -scale-x-100">
          <StarHalf size={15} className="text-orange-800 animated" weight="fill" />
        </div>
      )}
      {Array(Math.floor(starsNumber)).fill('').map((_, starIdx) => {
        return (
          <Star key={`${name}-star-${starIdx}`} size={15} className="text-orange-800 animated" weight="fill" />
        )
      })}
    </>
  );
}