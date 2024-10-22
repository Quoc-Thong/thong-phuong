"use client";
import {
  EngagementParty,
  Introduction,
  LoveStory,
  Event,
  Donating,
  ThankYou,
  Audio,
  MoreInfo,
} from "@/components/wedding/";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { Announcement } from "@/components/wedding/Announcement";
import { MotionConfig, motion } from "framer-motion";
import HeartFallDown from "@/components/common/HeartFallDown";
import { Tabs } from "antd";
import { WeddingImages } from "@/components/wedding/WeddingImages";
import { GreenLightWeight } from "@/icons/GreenLightweight";

export default function Home() {
  return (
    <div
      className={classNames([
        "w-full h-full overflow-auto",
        styles["home-page"],
      ])}
    >
      <MotionConfig transition={{ duration: 2 }}>
        <Introduction />
        <Announcement />
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            duration: 2,
          }}
        >
          <h3 className={styles["video-engagement-title"]}>
            <span> Cùng xem ảnh chúng mình tại đây nhé </span>
            <div className="w-full flex justify-center">
              <GreenLightWeight style={{ width: 150 }} />
            </div>
          </h3>
        </motion.div>
        <div className="p-4">
          <Tabs
            centered
            items={[
              {
                label: "Hình cưới",
                key: "wedding",
                children: <WeddingImages />,
              },
              // {
              //   label: "Hình đám hỏi",
              //   key: "engagement",
              //   children: <EngagementParty />,
              // },
            ]}
          />
        </div>
        <LoveStory />
        <Event />
        <Donating />
        <ThankYou />
        <HeartFallDown />
        {/* <MoreInfo /> */}
        {/* <TravelLocation /> */}
        <Audio />
      </MotionConfig>
    </div>
  );
}
