import { useEffect, useState } from "react";
import style from "./Notification.module.scss";

export const Notification = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <section className={style.notification}>
      Your application has been sent successfully
    </section>
  );
};
