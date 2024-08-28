import classNames from "classnames";
import style from "./InfoSection.module.scss";

export const InfoSection = () => {
  return (
    <section className={style.stem}>
      <div className="stem__container">
        <div className={style.stem__content}>
          <img
            src="/images/stem_logo_bureau.png"
            alt="Logo Bureau"
            className={style.stem__logo}
          />

          <div className={style.stem__info}>
            <p className={style.stem__text}>
              According to the U.S. Bureau of Labor Statistics, STEM occupations
              generated an annual mean wage of <span>&#36;100,900</span>,
              compared to <span>&#36;55,260</span> for non-STEM occupations.
            </p>

            <div className={style.stem__stats}>
              <div className={style.stem__statsItem}>
                <p className={style.stem__itemTitle}>STEM occupation</p>
                <p
                  className={classNames(
                    style.stem__itemProgress,
                    style.stem__itemProgressGreen,
                  )}
                >
                  <img
                    src="/images/icons/smiling-face.svg"
                    alt="Smiling face emoji icon"
                  />
                  &#36;100,900/year
                </p>
              </div>

              <div className={style.stem__statsItem}>
                <p className={style.stem__itemTitle}>Non-STEM occupation</p>
                <p
                  className={classNames(
                    style.stem__itemProgress,
                    style.stem__itemProgressYellow,
                  )}
                >
                  <img
                    src="/images/icons/pensive-face.svg"
                    alt="Pensive face emoji icon"
                  />
                  &#36;55,260/year
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
