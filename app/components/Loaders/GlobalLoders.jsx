"use client";

import BounceLoader from "react-spinners/BounceLoader";

const GlobalLoders = () => {
  return (
    <BounceLoader
      color={"#38d6ac"}
      loading={true}
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default GlobalLoders;
