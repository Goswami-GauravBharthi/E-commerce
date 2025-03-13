import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export const Star = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span className="stars" key={index}>
        {stars >= index + 1 ? (
          <FaStar />
        ) : stars >= number ? (
          <FaStarHalf />
        ) : (
          <FaRegStar />
        )}
      </span>
    );
  });

  return (
    <div className="flex text-3xl md:text-4xl flex-col md:flex-row md:items-center items-start">
      <div className="flex">{ratingStar}</div>
      <p className="text-sm">({reviews}Customer reviews)</p>
    </div>
  );

  // const fullStars = Math.floor(stars);
  // const hasHalfStar = stars % 1 !== 0;
  // const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  // return (
  //   <div className="flex text-yellow-500 items-center gap-2">
  //     {[...Array(fullStars)].map((_, i) => (
  //       <FaStar key={i} />
  //     ))}
  //     {hasHalfStar && <FaStarHalfAlt />}
  //     {[...Array(emptyStars)].map((_, i) => (
  //       <FaRegStar key={i} className="text-gray-400" />
  //     ))}
  //      <p className="text-sm ">({reviews}Customer reviews)</p>
  //   </div>
  // );
};
