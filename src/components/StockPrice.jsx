import React, { useState, useEffect } from "react";
import { getStockQuote } from "../api/finnhub";
import Loader from "react-loader-spinner";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const StockPrice = ({ sym }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    getStockQuote(sym)
      .then((resp) => resp.json())
      .then((json) => {
        console.log(json);
        setData(json);
        setLoading(false);
      });
  }, []);

  const reloadData = () => {
    getStockQuote(sym)
      .then((resp) => resp.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  };

  if (loading)
    return <Loader type="TailSpin" color="#adbdcc" height={100} width={250} />;

  let direction;
  let dif = (data.pc - data.c).toFixed(2);

  if (data.c < data.pc) {
    direction = (
      <div className="down-dir">
        <AiFillCaretDown color="#ee5959" size={30} />
        <p>{`${((data.c / data.pc) * 100).toFixed(2)}% (-${dif})`}</p>
      </div>
    );
  } else {
    direction = (
      <div className="up-dir">
        <AiFillCaretUp color="#1db954" size={30} />
        <p>{`${((data.c / data.pc) * 100).toFixed(2)}% (+${
          dif - dif - dif
        })`}</p>
      </div>
    );
  }

  return (
    <div
      className="stock-price clickable"
      onClick={() => {
        setLoading(true);
        reloadData();
      }}
    >
      <div className="ticker-and-price">
        <h1>{sym}</h1>
        <h1>{data.c}</h1>
      </div>
      <h1>{direction}</h1>
    </div>
  );
};

export default StockPrice;
