import classNames from "classnames";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { HeartTree } from "@/icons/HeartTree";

const Event = () => {
  return (
    <div className="flex items-center w-full flex-col">
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          duration: 2,
        }}
      >
        <div className="flex items-center w-full justify-center">
          <HeartTree style={{ width: 250 }} />
        </div>
      </motion.div>
      <div
        className={classNames(["text-center w-full", styles["event-heading"]])}
      >
        Các ngày trọng đại
      </div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          duration: 2,
        }}
      >
        <div className={styles["event-wrapper"]}>
          <div className={styles["frame-img"]}>
            <Image
              // src={"/event/hinh-cong.JPG"}
              width={300}
              height={300}
              alt="hinh-cong"
              loading="lazy"
            />
          </div>
          <div className={classNames([styles["event-section"]])}>
            <p className={styles["section-title"]}>Lễ cưới tại nhà thờ</p>
            <div className={styles["date-time"]}>
              <FontAwesomeIcon icon={faCalendar} className="pr-2" />
              <span>05-01-2024</span>,{" "}
              <FontAwesomeIcon icon={faClock} className="pr-2" />
              05:00 p.m. - 07:00 p.m.
            </div>
            <Link
              target="_blank"
              href={"https://maps.app.goo.gl/GBCh9adSQwL2bGS8A"}
              className={styles["link-highlight"]}
            >
              <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
              Giáo xứ Tân Phước - TGP Sài Gòn
            </Link>
          </div>
        </div>
      </motion.div>

      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          duration: 2,
        }}
      >
        <div
          className={classNames([
            styles["event-wrapper"],
            styles["revert-wrapper"],
          ])}
        >
          <div className={styles["frame-img"]}>
            <Image
              // src={"/event/cuoi-nha-gai.jpg"}
              width={300}
              height={300}
              alt="hinh-cong"
              loading="lazy"
            />
          </div>
          <div className={classNames([styles["event-section"]])}>
            <p className={styles["section-title"]}>Lễ cưới tại nhà gái</p>
            <div className={styles["date-time"]}>
              <FontAwesomeIcon icon={faCalendar} className="pr-2" />
              <span>06-01-2024</span>,{" "}
              <FontAwesomeIcon icon={faClock} className="pr-2" />
              09:00 a.m. - 01:00 p.m.
            </div>

            <Link
              target="_blank"
              href={"https://maps.app.goo.gl/GBCh9adSQwL2bGS8A"}
              className={styles["link-highlight"]}
            >
              <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
              Nhà gái, 86 Thôn 4, Hoà Khánh, Buôn Ma Thuột
            </Link>
          </div>
        </div>
      </motion.div>

      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          duration: 2,
        }}
      >
        <div className={styles["event-wrapper"]}>
          <div className={styles["frame-img"]}>
            <Image
              // src={"/event/cuoi-nha-trai.jpg"}
              width={300}
              height={300}
              alt="hinh-cong"
              loading="lazy"
            />
          </div>
          <div className={classNames([styles["event-section"]])}>
            <p className={styles["section-title"]}>Lễ cưới tại nhà trai</p>
            <div className={styles["date-time"]}>
              <FontAwesomeIcon icon={faCalendar} className="pr-2" />
              <span>07-01-2024</span>,{" "}
              <FontAwesomeIcon icon={faClock} className="pr-2" />
              09:00 a.m. - 01:00 p.m.
            </div>

            <Link
              target="_blank"
              href={"https://maps.app.goo.gl/FHEPZWrmJaixjpxL7"}
              className={styles["link-highlight"]}
            >
              <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
              Nhà trai, 133 Thôn 7, Hoà Khánh, Buôn Ma Thuột
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Event;
