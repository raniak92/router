import { Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
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
          <Card.Title className="text-danger">
            {" "}
            <Link
              to={`/description/${props.movie.Title}`}
              state={props.movie.Title}
              style={{ textDecoration: "none" }}
            >
              {props.movie.Title}
            </Link>{" "}
          </Card.Title>
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
