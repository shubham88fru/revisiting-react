import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        //If the clicked element is not inside the ref.current (i.e. Window),
        //close the modal.
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      document.addEventListener("click", handleClick, listenCapturing);

      return function () {
        document.removeEventListener("click", handleClick, listenCapturing);
      };
    },
    [handler, listenCapturing]
  );

  return ref;
}
