"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import HeartOnlySVG from "@/icons/heart-only.svg";
import classNames from "classnames";
import HeartAnimation from "@/components/common/Heart";
import { motion } from "framer-motion";

const Announcement = () => {
  return (
    <div className={styles["announcement-bg"]}>
      <div className="flex items-center flex-col">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            duration: 2,
          }}
        >
          <div className="flex justify-center">
            <Image
              src={"/wedding-assets/happy-wedding.png"}
              width={300}
              height={200}
              alt="wedding-happy"
              loading="lazy"
            />
          </div>
          <p className={styles["announcement-title"]}>
            Sau thời gian dài tìm hiểu đã cùng nhau vượt qua những thử thách và
            giai đoạn khó khăn, hành tình của chúng mình đã bước sang một trang
            mới. Giờ đây chúng mình đã quyết định về chung một nhà.
          </p>
        </motion.div>

        <div className={styles["section-people"]}>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              duration: 2,
            }}
          >
            <div className="flex flex-col items-center">
              <div
                className={classNames([styles["frame-img"], "overflow-hidden"])}
                style={{ width: 300, height: 240 }}
              >
                <Image
                  priority
                  src={"/chu-re-1.jpg"}
                  width={300}
                  height={300}
                  alt="wedding-chu-re"
                />
              </div>
              <div className={styles["bridegroom"]}>
                Chú rể{" "}
                <Image
                  style={{ display: "inline-block" }}
                  width={30}
                  height={30}
                  src={HeartOnlySVG}
                  alt="Heart icon"
                />
              </div>

              <p className={styles["sign"]}>Huỳnh Đoàn Quốc Thống</p>

              <div className={styles["quote"]}>
                Tình yêu là điểm bắt đầu thì hôn nhân là nơi ta cần phải{" "}
                <span style={{ fontStyle: "italic" }}>
                  &ldquo;trưởng thành&rdquo;
                </span>{" "}
                và yêu thương nhau nhiều hơn thế nữa.
              </div>
            </div>
          </motion.div>
          <HeartAnimation />
          {/* end re */}
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              duration: 2,
            }}
          >
            <div className="flex flex-col items-center ">
              <div
                className={classNames([styles["frame-img"], "overflow-hidden"])}
                style={{ width: 300, height: 240 }}
              >
                <Image
                  src={"/co-dau-1.jpg"}
                  width={300}
                  height={300}
                  alt="wedding-co-dau"
                  priority
                />
              </div>
              <div className={styles["bridegroom"]}>
                Cô dâu{" "}
                <Image
                  style={{ display: "inline-block" }}
                  width={30}
                  height={30}
                  src={HeartOnlySVG}
                  alt="Heart icon"
                />
              </div>

              <div className={styles["sign"]}>Huỳnh Thị Kim Phượng</div>

              <div className={styles["quote"]}>
                Chỉ mất 3s để nói yêu một người, nhưng sẽ phải là
                <span style={{ fontStyle: "italic" }}>
                  &ldquo;cả cuộc đời&rdquo;
                </span>{" "}
                để chứng minh điều đó.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
