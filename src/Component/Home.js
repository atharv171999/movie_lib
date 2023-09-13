import { React, useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Pagination from "./Pagination";
import '../App.css'

const Home = (props) => {
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
    <section className="search-menu" >

      <div className="heading">
        <div className="">{props.title}</div>
      </div>
      <div className=" ">Are you looking for movie?</div>
      <div className="ipt-btn">
        <input
        placeholder="Typing..."
          type="text"
          className=""
          onKeyDown={onKeyDown}
          onChange={handleOnChange}
          value={text}
          />
        <button
        className="btn"
          type="button"
          onClick={movie}
        >
          Search
        </button>
      </div>
      {total && (
        <div className="">Total result: {totalMovies}</div>
        )}
        </section>
      <div className="card-section">
        {result.map((data, index) => {
          const { Poster } = data; 

          return (
            <>
              <div key={index} className="card">
                <div className="img-card">
                  <img
                    src={Poster}
                    onClick={() => handlePushDetails(data)}
                    className=""
                    alt=""
                    />
                </div>
              </div>
            </>
          );
        })}
            </div>
        {page && (
          <div className="pagination">
            <Pagination totalMovies={totalMovies} setCount={setCount} />
          </div>
        )}
    </>
  );
};

export default Home;
