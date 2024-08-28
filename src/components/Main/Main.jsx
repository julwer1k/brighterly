import { useState } from "react";
import { AboutSection } from "../AboutSection/index.js";
import { CallSection } from "../CallSection/CallSection.jsx";
import { Featured } from "../Featured/index.js";
import { FeedbackSection } from "../FeedbackSection/index.js";
import { Hero } from "../Hero/index.js";
import { InfoSection } from "../InfoSection/index.js";
import { ReportSection } from "../ReportSection/index.js";
import { Notification } from "../ui/Notification/index.js";

export const Main = () => {
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <main className="main">
      {isSubmit && <Notification />}
      <Hero />
      <InfoSection />
      <AboutSection setIsSubmit={setIsSubmit} />
      <ReportSection />
      <CallSection />
      <FeedbackSection />
      <Featured />
    </main>
  );
};
