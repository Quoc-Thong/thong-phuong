import Lottie from "lottie-react";
import NewJSON from "./lottie.json";

export const FlyHeart = (props: { style: object }) => (
  <Lottie style={props.style} animationData={NewJSON} />
);
