import React, { useEffect, useState } from "react";

export const DropIndicator = ({ beforeId, column }) => {
  return (
    <div
      data-before={beforeId || "0"}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
    />
  );
};