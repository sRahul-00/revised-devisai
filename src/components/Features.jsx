import { features } from "../utils/featureData";
import Feature from "./Feature";

const Features = () => {
  return (
    <div className="flex items-center flex-col justify-center my-9">
      {features.map((feature, index) => {
        let { img, header, text } = feature;
        const value = Object.values(img);
        img = value[0];
        return <Feature key={index} img={img} header={header} text={text} />;
      })}
    </div>
  );
};
export default Features;
