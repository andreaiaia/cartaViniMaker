import React from "react";

import ToolBar from "../Components/ToolBar";

export default function Builder({ choice }) {
  return (
    <>
      <ToolBar title={choice} />
      Builder
    </>
  );
}
