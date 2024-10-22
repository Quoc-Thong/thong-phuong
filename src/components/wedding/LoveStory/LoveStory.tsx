import Image from "next/image";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { motion } from "framer-motion";
import { AngleHeart } from "@/icons/AngelHeart";

const stories = [
  {
    time: "2023",
    title: "Món quà đầu tiên của ẻm",
    describe: "Món quà đầu tiên được 'người ấy' tặng",
    // imgUrl: "/love-stories/dong-ho.jpeg",
    imgUrl: "",
  },
  {
    time: "22-11-2020",
    title: "Kỉ niệm đà lạt trong mùa hơi mưa gió",
    describe: "",
    // imgUrl: "/love-stories/cay-thong-co-don.jpeg",
    imgUrl: "",
  },
  {
    time: "12-02-2021",
    title: "Hai đứa đi zoodoo ngắm những sinh vật đáng êu",
    describe: "",
    // imgUrl: "/love-stories/di-choi-o-quang-truong.jpeg",
    imgUrl: "",
  },
  {
    time: "05-10-2024",
    title: "Chụp hình cưới.",
    describe: "",
    // imgUrl: "/love-stories/phuot-vao-sg.jpeg",
    imgUrl: "",
  },
  {
    time: "13-10-2024",
    title: "Dặm ngõ đánh dấu ngày hai đứa sắp dìa chung nhà.",
    describe: "",
    // imgUrl: "/love-stories/dam-ngo.jpeg",
    imgUrl: "",
  },
  {
    time: "13-10-2024",
    title: "Mần đám cưới tại nhà ẻm ở Đà Nẵng nè",
    describe: "",
    // imgUrl: "/love-stories/dam-hoi.jpeg",
    imgUrl: "",
  },
  {
    time: "09-12-2023",
    title: "Chụp hình cưới.",
    describe: "",
    // imgUrl: "/love-stories/cuoi-thoi.JPG",
    imgUrl: "",
  },
  {
    time: "23-10-2024",
    title: "Chốt kèo đăng ký kết hôn.",
    describe: "",
    // imgUrl: "/love-stories/dang-ky-ket-hon.jpg",
    imgUrl: "",
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
