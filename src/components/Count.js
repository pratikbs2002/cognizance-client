import CountUp from "react-countup";
import React from "react";

export default function Count({ countValue }) {
  return (
    <>
      <CountUp suffix="+" end={countValue} duration={5} />
    </>
  );
}
