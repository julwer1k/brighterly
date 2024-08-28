import { Button } from "../ui/Button/index.js";
import style from "./CallSection.module.scss";

export const CallSection = () => {
  return (
    <section className={style.call}>
      <div className="call__container">
        <div className={style.call__content}>
          <p className={style.call__text}>
            The better your child <span>knows math</span>, the greater the
            probability that they will manage to get a STEM profession and{" "}
            <span>earn more</span> in the future.
          </p>

          <Button>Get a lesson</Button>
        </div>
      </div>
    </section>
  );
};
