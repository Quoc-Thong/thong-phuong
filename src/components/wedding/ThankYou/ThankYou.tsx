import styles from "./styles.module.scss";
import classNames from "classnames";

import { useTimer } from "react-timer-hook";
import { DecorGreenTree } from "@/icons/DecorGreenTree";

function MyTimer({ expiryTimestamp }: any) {
  const { totalSeconds, seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
    autoStart: true,
  });

  return (
    <div style={{ textAlign: "center" }} className={styles["timer"]}>
      <div>Cùng đếm ngược thời gian nhé</div>
      <div>{days} Ngày</div>
      <div className="flex gap-3 justify-center">
        <span>{hours}</span>
        <span>:</span>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
      <div className="flex gap-3 justify-center">
        <span>tiếng</span>
        <span>:</span>
        <span>phút</span>
        <span>:</span>
        <span>giây</span>
      </div>
    </div>
  );
}

const ThankYou = () => {
  const expiryTimestamp = new Date(2024, 10, 3).getTime();

  return (
    <div
      className="flex items-center w-full justify-center flex-col py-20 my-20 text-black"
      style={{ backgroundColor: "#F5DCE0" }}
    >
      <h3 className="heading">Thank you</h3>
      <DecorGreenTree style={{ width: 300 }} />
      <div
        className={classNames(["w-full text-center", styles["thank-you-text"]])}
      >
        <div className="flex items-center gap-2 justify-center text-6xl">
          <span>Quốc Thống</span>
          <span> & </span>
          <span>Kim Phượng</span>
        </div>
        <MyTimer expiryTimestamp={new Date(expiryTimestamp)} />
      </div>
    </div>
  );
};

export default ThankYou;
