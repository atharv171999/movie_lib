import { React } from "react";
import { useLocation } from "react-router-dom";
import './MovieDetailstyle.css'

const MovieDetails = () => {
  const location = useLocation();
  const data = location?.state?.content;
  return (
    <>
<div className="movie-card container-fluid ">

      <div className="card m-5">
        <img src={data?.detailObj?.Poster} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data?.detailObj?.Title }</h5>
          <p className="card-text">
            {data?.detailObj?.Year} <br />
            {data?.detailObj.Type}
          </p>
          <a href="/" className="btn btn-outline-primary">
            Back
          </a>
</div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
