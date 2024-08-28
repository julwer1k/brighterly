import images from "/src/images.json";
import { Slider } from "../Slider/index.js";
import { Button } from "../ui/Button/index.js";
import style from "./ReportSection.module.scss";

export const ReportSection = () => {
  return (
    <section className={style.report}>
      <div className="report__container">
        <div className={style.report__content}>
          <div className={style.report__info}>
            <h3 className={style.report__infoTitle}>
              We will evaluate your kid&#39;s:
            </h3>

            <ol className={style.report__infoList}>
              <li>Math knowledge overall proficiency</li>
              <li>Competence with Common Core Standards for Math Analysis</li>
              <li>The appropriate pace of learning</li>
              <li>Problem-solving, communication, and analytical skills</li>
            </ol>

            <Button>Get a lesson</Button>
          </div>

          <Slider slides={images} id={"report"} />

          <Button>Get a lesson</Button>
        </div>
      </div>
    </section>
  );
};
