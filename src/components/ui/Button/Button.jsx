import classNames from "classnames";
import style from "./Button.module.scss";

// eslint-disable-next-line react/prop-types
export const Button = ({
  isDisabled = false,
  additionalClasses = "",
  children,
}) => {
  return (
    <button
      disabled={isDisabled}
      className={classNames(style.button, additionalClasses)}
    >
      {children}
    </button>
  );
};
