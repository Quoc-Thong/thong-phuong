import styles from "./styles.module.scss";
import classNames from "classnames";

import { DecorGreenTree } from "@/icons/DecorGreenTree";
import { useEffect, useState } from "react";

function MyTimer({ expiryTimestamp }: any) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = expiryTimestamp - now;

      if (distance <= 0) {
        clearInterval?.(interval);
        console.warn("onExpire called");
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval?.(interval);
  }, [expiryTimestamp]);

  return (
    <div style={{ textAlign: "center" }} className={styles["timer"]}>
      <div>Cùng đếm ngược thời gian nhé</div>
      <div>
        <span>{timeLeft.days}</span>
        <span> Ngày</span>
      </div>
      <div className="flex gap-3 justify-center">
        <div>{String(timeLeft.hours).padStart(2, "0")}</div>
        <div>:</div>
        <div>{String(timeLeft.minutes).padStart(2, "0")}</div>
        <div>:</div>
        <div>{String(timeLeft.seconds).padStart(2, "0")}</div>
      </div>
    </div>
  );
}

const ThankYou = () => {
  const expiryTimestamp = new Date(2024, 10, 3, 12, 0, 0).getTime();

  return (
    <div
      className="flex items-center w-full justify-center flex-col py-20 my-20 text-black"
      style={{ backgroundColor: "#F5DCE0" }}
    >
      <div className="heading">Thank you</div>
      <DecorGreenTree style={{ width: 300 }} />
      <div
        className={classNames(["w-full text-center", styles["thank-you-text"]])}
      >
        <div className="flex items-center gap-2 justify-center text-6xl">
          <div>Quốc Thống</div>
          <div> & </div>
          <div>Kim Phượng</div>
        </div>
        <MyTimer expiryTimestamp={new Date(expiryTimestamp)} />
      </div>
    </div>
  );
};

export default ThankYou;
