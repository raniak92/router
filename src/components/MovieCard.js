import { Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
export default function MovieCard(props) {
  return (
    <div className="Card">
      <Card>
        <Card.Img
          variant="top"
          src={props.movie.PosterURL}
          alt=""
          style={{ width: 200, height: 200 }}
        />

        <Card.Body className="text">
          <Card.Title className="text-danger">{props.movie.Title} </Card.Title>
          <Card.Text component="text-muted">
            {props.movie.Description}{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <ReactStars
            value={props.movie.Rating}
            count={5}
            size={24}
            edit={false}
            isHalf={true}
          />
        </Card.Footer>
      </Card>
    </div>
  );
}
