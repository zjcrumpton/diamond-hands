import React from "react";

const token = "";

const getStockQuote = (sym) =>
  fetch(`https://finnhub.io/api/v1/quote?symbol=${sym}&token=${token}`, {
    method: "GET",
  });

export { getStockQuote };
