import { useEffect, useState } from "react";
import feedback from "/src/feedback.json";
import { Slider } from "../Slider/index.js";
import style from "./FeedbackSection.module.scss";

export const FeedbackSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={style.feedback}>
      <div className="feedback__container">
        <div className={style.feedback__content}>
          <h3 className={style.feedback__title}>
            Check out our review from Parents like you
          </h3>

          {isMobile ? (
            <Slider slides={feedback} id={"feedback"} />
          ) : (
            <div className={style.feedback__cards}>
              {feedback.map((item) => {
                return (
                  <img
                    className={style.feedback__card}
                    key={item.id}
                    src={item.url}
                    alt={item.description}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
