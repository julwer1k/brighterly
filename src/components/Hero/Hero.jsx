import { Button } from "../ui/Button/index.js";
import style from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={style.hero}>
      <div className="hero__container">
        <div className={style.hero__content}>
          <div className={style.hero__textContent}>
            <h1 className={style.hero__title}>Check your child’s math level</h1>

            <span className={style.hero__info}>Grades 1-8</span>

            <p className={style.hero__text}>
              Take a knowledge evaluation test to determine your child&apos;s
              math level and <span>receive a learning plan</span> to thrive in
              math
            </p>

            <ul className={style.hero__list}>
              <li className={style.hero__item}>
                <img
                  src="/images/icons/teacher.svg"
                  alt="Teacher icon in an emoji"
                />
                A 1-on-1 live lesson with math teacher
              </li>
              <li className={style.hero__item}>
                <img
                  src="/images/icons/stats.svg"
                  alt="Statistics icon in the emoji"
                />
                Your kid math level analysis with strong and weak sides outline
              </li>
              <li className={style.hero__item}>
                <img
                  src="/images/icons/paper.svg"
                  alt="Paper icon in an emoji"
                />
                Learning plan to improve in math
              </li>
            </ul>

            <Button additionalClasses={style.hero__button}>Get a lesson</Button>
          </div>

          <div className={style.hero__imageBox}>
            <img
              src="/images/hero_image_boy.png"
              alt="The boy's picture in the main section"
              className={style.hero__image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
