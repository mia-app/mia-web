import { useEffect } from "react";

export const useOutsideClick = (ref, callBack) => {
  const onOutsideClick = (event) => {
    ref.current && !ref.current.contains(event.target) && callBack();
  };

  useEffect(() => {
    document.addEventListener("click", onOutsideClick);

    return () => document.removeEventListener("click", onOutsideClick);
  });
};
