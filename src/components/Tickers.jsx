import React from "react";
import StockPrice from "./StockPrice";

const Tickers = () => {
  return (
    <div className="tickers-container">
      <StockPrice sym="GME" />
      <StockPrice sym="AMC" />
      <StockPrice sym="BB" />
      <StockPrice sym="NOK" />
      <StockPrice sym="TSLA" />
      <StockPrice sym="AAPL" />
      <StockPrice sym="FB" />
      <StockPrice sym="MSFT" />
    </div>
  );
};

export default Tickers;
