import { useEffect, useState } from "react";
const useMediaQuery = (query) => {
  const [match, setMatch] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (match !== media.matches) {
      setMatch(media.matches);
    }

    const listener = () => setMatch(media.matches);
    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, [query, match]);

  return match;
};

export default useMediaQuery;
