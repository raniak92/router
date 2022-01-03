import React from "react";
import { Form } from "react-bootstrap";
import TenStars from "./TenStars.js";

export default function Search({ search1, search2 }) {
  return (
    <div className="search">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Search" onChange={search1} />
        </Form.Group>
        <TenStars search2={search2} />
      </Form>
    </div>
  );
}
