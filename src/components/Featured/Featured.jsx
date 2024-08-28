import classNames from "classnames";
import style from "./Featured.module.scss";

export const Featured = () => {
  return (
    <section className={style.featured}>
      <div className="featured__container">
        <div className={style.featured__content}>
          <h2 className={style.featured__title}>Featured In</h2>

          <div className={style.featured__partners}>
            <a
              href="https://www.ap.org"
              target="_blank"
              rel="noreferrer"
              className={style.featured__link}
            >
              <img
                className={classNames(
                  style.featured__partner,
                  style.featured__partnerAP,
                )}
                src="/images/partners_logo_ap.svg"
                alt="Company logo AP"
              />
            </a>
            <a
              href="https://www.marketwatch.com"
              target="_blank"
              rel="noreferrer"
              className={style.featured__link}
            >
              <img
                className={classNames(
                  style.featured__partner,
                  style.featured__partnerMW,
                )}
                src="/images/partners_logo_market-watch.svg"
                alt="Company logo Market Watch"
              />
            </a>
            <a
              href="https://markets.businessinsider.com"
              target="_blank"
              rel="noreferrer"
              className={style.featured__link}
            >
              <img
                className={classNames(
                  style.featured__partner,
                  style.featured__partnerMI,
                )}
                src="/images/partners_logo_markets-insider.png"
                alt="Company logo Markets Insider"
              />
            </a>
            <a
              href="https://finance.yahoo.com"
              target="_blank"
              rel="noreferrer"
              className={style.featured__link}
            >
              <img
                className={classNames(
                  style.featured__partner,
                  style.featured__partnerYF,
                )}
                src="/images/partners_logo_yahoo-finance.svg"
                alt="Company logo Yahoo Finance"
              />
            </a>
            <a
              href="https://homeschoolhideout.com"
              target="_blank"
              rel="noreferrer"
              className={style.featured__link}
            >
              <img
                className={classNames(
                  style.featured__partner,
                  style.featured__partnerHomeSchool,
                )}
                src="/images/partners_logo_homeschool.svg"
                alt="Company logo Homeschool"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
