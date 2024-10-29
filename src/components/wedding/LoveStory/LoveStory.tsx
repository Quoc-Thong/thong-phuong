import Image from "next/image";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { motion } from "framer-motion";
import { AngleHeart } from "@/icons/AngelHeart";

const stories = [
  {
    time: "05-09-2023",
    title: "Lần đầu đi chơi xa",
    describe: "Kỉ niệm 6 tháng quen nhau",
    imgUrl: "/love-stories/ba-na-hill.jpg",
  },
  {
    time: "02-03-2024",
    title: "Vũng tàu",
    describe: "Đi chơi cùng đồng bọn",
    imgUrl: "/love-stories/vung-tau-trip.jpg",
  },
  {
    time: "31-03-2024",
    title: "Kỉ niệm đà lạt Zoodoo trong mùa hơi mưa gió",
    describe: "",
    imgUrl: "/love-stories/zoodoo.jpg",
  },
  {
    time: "31-03-2024",
    title: "Hai đứa đi zoodoo ngắm sinh vật đáng êu",
    describe: "",
    imgUrl: "/love-stories/tac-ke.jpg",
  },
  {
    time: "05-10-2024",
    title: "Chụp hình cưới.",
    describe: "",
    imgUrl: "/love-stories/pre-wedding.jpg",
  },
  {
    time: "13-10-2024",
    title: "Chốt kèo nhà gái <3",
    describe: "",
    imgUrl: "/love-stories/gia-tien.jpg",
  },
  {
    time: "13-10-2024",
    title: "Mần đám cưới tại nhà ẻm ở Đà Nẵng nè",
    describe: "",
    imgUrl: "/love-stories/chot-keo-nha-gai.jpg",
  },
  {
    time: "23-10-2024",
    title: "Chốt kèo đăng ký kết hôn.",
    describe: "",
    imgUrl: "/love-stories/dkkh.png",
  },
];

const LoveStory = () => {
  return (
    <div className={styles["love-story-container"]}>
      <h3 className={styles["love-story__title"]}>
        Câu chuyện tình yêu của chúng mình nhé
      </h3>
      <div className="flex items-center w-full justify-center">
        <AngleHeart style={{ width: 250 }} />
      </div>
      <p className={styles["love-story__description"]}>
        Cùng lướt qua những kỷ niệm đáng nhớ của đôi uyên ương <br />
        <span>Huỳnh Đoàn Quốc Thống</span> và <span>Huỳnh Thị Kim Phượng</span>{" "}
        nào
      </p>
      <div className={styles["love-story__stories"]}>
        {stories.map((item, index) => {
          const isRevert = index % 2 === 0;
          return (
            <div key={index}>
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
                    styles["stories__wrapper"],
                    isRevert && styles["stories__wrapper__revert"],
                  ])}
                >
                  <div
                    className={classNames([
                      styles["frame-img"],
                      "overflow-hidden",
                    ])}
                    style={{ width: 250, height: 250, maxWidth: 300 }}
                  >
                    <Image
                      src={item.imgUrl}
                      alt="img-stories"
                      width={250}
                      height={250}
                      loading="lazy"
                    />
                  </div>
                  <div
                    className={classNames([
                      styles["text-desc"],
                      isRevert && styles["text-desc__revert"],
                    ])}
                  >
                    <p className={styles["time"]}>{item.time}</p>
                    <div className={styles["love-story__title"]}>
                      {item.title}{" "}
                      <span className="text-red-600">&hearts;</span>
                    </div>
                    <p>{item.describe}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LoveStory;
