import { createContext } from "react";
import About from "../../pages/About/About";
export const SomeContext = createContext(" sky blue");

const AboutFather = () => {
  return (
    <SomeContext.Provider>
      <About />
    </SomeContext.Provider>
  );
};

export default AboutFather;
