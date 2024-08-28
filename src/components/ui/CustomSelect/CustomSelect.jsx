import classNames from "classnames";
import { useState } from "react";
import style from "./CustomSelect.module.scss";

const grades = [
  { id: 0, text: "1st Grade Math" },
  { id: 1, text: "2nd Grade Math" },
  { id: 2, text: "3rd Grade Math" },
];

export const CustomSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Kindergarten");

  const handleOpenSelect = () => {
    setIsOpen(!isOpen);
  };

  const handeSelectGrade = (grade) => {
    setSelected(grade);
    setIsOpen(false);
  };

  return (
    <>
      <div
        onClick={handleOpenSelect}
        className={classNames(style.customSelectSelected, {
          [style.customSelectOpened]: isOpen,
        })}
      >
        {selected}
      </div>

      <ul
        className={classNames(style.customSelect__list, {
          [style.customSelectHide]: !isOpen,
        })}
      >
        {grades.map((grade) => (
          <li
            className={classNames({
              [style.customSelectSelectedItem]: selected === grade.text,
            })}
            onClick={() => handeSelectGrade(grade.text)}
            key={grade.id}
          >
            {grade.text}
          </li>
        ))}
      </ul>
    </>
  );
};
