import Rate from './rate';
import ReviewUser from './reviewUser';

export default function Review(props) {
  return (
    <div>
      <Rate rating={props.review.rating} />
      <ReviewUser review={props.review} />
    </div>
  );
}
