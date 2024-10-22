import Lottie from "lottie-react";
import NewJSON from "./lottie.json";

export const AngleHeart = (props: { style: object }) => (
  <Lottie style={props.style} animationData={NewJSON} />
);
