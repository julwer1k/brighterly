import classNames from "classnames";
import { Button } from "../ui/Button/index.js";
import style from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="footer__container">
        <div className={style.footer__content}>
          <div className={style.footer__groupImage}>
            <img
              src="/images/footer_image_girl.png"
              alt="The girl at the bottom of the page"
              className={classNames(
                style.footer__image,
                style.footer__imageFirst,
              )}
            />

            <div className={style.footer__info}>
              <h2 className={style.footer__title}>
                Math is an essential skill to succeed. Check your child’s
                knowledge level.
              </h2>

              <Button additionalClasses={style.footer__button}>
                Get a lesson
              </Button>
            </div>

            <img
              src="/images/footer_image_boy.png"
              alt="A student with books at the bottom of the page"
              className={classNames(
                style.footer__image,
                style.footer__imageSecond,
              )}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
