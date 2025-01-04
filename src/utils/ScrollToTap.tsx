import React, { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTap: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <div></div>;
};

export default ScrollToTap;
