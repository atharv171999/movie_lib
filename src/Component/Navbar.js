import { React, useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Pagination from "./Pagination";
import "./Navbarstyle.css";

const Navbar = (props) => {
  const [result, setResult] = useState([]);
  const [text, setText] = useState("");
  const [count, setCount] = useState(1);
  const [totalMovies, setTotalMovies] = useState(null);
  const [page, setPage] = useState(false);
  const [total, setTotal] = useState(false);

  const history = useHistory();

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const movie = () => {
    axios
      .get(`https://omdbapi.com/?s=${text}&page=${count}&apikey=5bc61888`)
      .then((res) => {
        if (res?.data?.Response === "True") {
          setTotal(true);
          setPage(true);
          setResult(res?.data?.Search);
          setTotalMovies(res?.data?.totalResults);
        } else {
          setTotal(false);
          setPage(false);
          setResult([]);
          setTotalMovies(0);
        }
      });
  };

  useEffect(() => {
    movie();
  }, [count]);

  const onKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      movie();
    }
  };

  const handlePushDetails = (data) => {
    console.log(data);
    history.push({
      pathname: `/details`,
      state: {
        content: {
          detailObj: data,
        },
      },
    });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="head text-center">{props.title}</div>
      </nav>
      <div className="Q-text text-center">Are you looking for movie?</div>
      <div className="inpt-btn-cont d-flex justify-content-center ">
        <input
        placeholder="Typing..."
          type="text"
          className="form-control"
          onKeyDown={onKeyDown}
          onChange={handleOnChange}
          value={text}
        />
        <button
          className="btn btn-block btn-outline-success m-2"
          type="button"
          onClick={movie}
        >
          Search
        </button>
      </div>
      {total && (
        <div className="cont-err text-center ">Total result: {totalMovies}</div>
      )}
      <div className="search-result-cont row ">
        {result.map((data, index) => {
          const { Poster } = data;

          return (
            <>
              <div key={index} className=" col col-xs-4 mb-5 m ">
                <div className="container-fluid card bg-body-tertiary">
                  <img
                    src={Poster}
                    onClick={() => handlePushDetails(data)}
                    className="card-img-top"
                    alt=""
                  />
                </div>
              </div>
            </>
          );
        })}
        {page && (
          <div>
            <Pagination totalMovies={totalMovies} setCount={setCount} />
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
