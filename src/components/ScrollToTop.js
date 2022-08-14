import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  console.table({Coder: "Rishabh Tripathi", Contact: "Rishabhtripathi2001@proton.me"});
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default ScrollToTop;
