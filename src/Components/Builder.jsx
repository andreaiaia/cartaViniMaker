import React from "react";
import Aside from './Aside';

export default function Builder({ choice }) {
  return (
    <>
      Builder {choice}
      <Aside />
    </>
  );
}
