import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const className =
    "bg-yellow-400 uppercase font-semibold text-stone-800 text-sm py-3 px-4 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-3 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4";

  const base =
    "bg-yellow-400 uppercase font-semibold text-stone-800 text-sm inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-3 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "border-2 border-stone-300 text-sm uppercase font-semibold text-stone-400 py-3 px-4 inline-block tracking-wide rounded-full hover:bg-stone-800 transition-colors duration-3 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4 px-4 py-2.5 md:px-6 md:py-3.5",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
