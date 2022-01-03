import ReactStars from "react-rating-stars-component";

export default function TenStars(props) {
  const ratingChanged = (newRating) => {
    props.search2(newRating);
  };

  return (
    <ReactStars
      count={5}
      onChange={ratingChanged}
      size={24}
      activeColor="#ffd700"
    />
  );
}
