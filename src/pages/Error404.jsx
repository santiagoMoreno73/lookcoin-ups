import React from "react";

// link
import { Link } from "react-router-dom";

// css
import "../styles/components/Register.css";

const Error404 = () => {
  return (
    <div className="m-0 vh-100 row justify-content-center align-items-center">
      <div className="col-auto">
        <img
          className="img-fluid"
          src="https://firebasestorage.googleapis.com/v0/b/images-beb06.appspot.com/o/930-9306501_404-graphic-design.png?alt=media&token=ce476390-f20e-4ca7-9730-39eb46926878"
          alt="404"
        />
        <div className="d-flex justify-content-center">
          <h5>Not Found</h5>
        </div>
        <div className="mt-3">
          <Link to={"/home"}>
            <button className="button-sign">Go home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;
