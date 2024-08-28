import style from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className="header__container">
        <div className={style.header__content}>
          <a href="#" className={style.header__link}>
            <img src="/images/logo.svg" alt="Brighterly Logo" />
          </a>
        </div>
      </div>
    </header>
  );
};
