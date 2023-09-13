import { React } from "react";
import { useLocation } from "react-router-dom";

const MovieDetails = () => {
  const location = useLocation();
  const data = location?.state?.content;
  return (
    <>
<div className="card-details">

      <div className="">
        <img src={data?.detailObj?.Poster} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data?.detailObj?.Title }</h5>
          <p className="card-text">
            {data?.detailObj?.Year} <br />
            {data?.detailObj.Type}
          </p>
          <a href="/" >
            <button
            className="btn">
              Back
            </button>
          </a>
</div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
