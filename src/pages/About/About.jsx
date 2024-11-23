import { useContext } from "react";
import { SomeContext } from "../../components/AboutFather/AboutFather";

const About = () => {
  const theme = useContext(SomeContext);
  console.log(theme);
  return (
    <div>
      <h1>{theme}</h1>
    </div>
  );
};

export default About;
