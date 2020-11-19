import review from './review';
import Review from './review';

export default function Reviews(props) {
  return (
    <div>
      {props.reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
}
