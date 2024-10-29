import classNames from "classnames";
import styles from "./styles.module.scss";
import Image from "next/image";
import { FlyHeart } from "@/icons/flyHeart";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

const Introduction = () => {
  const [isMaxWidth480, setIsMaxWidth480] = useState<boolean>();

  useEffect(() => {
    const handleResize = () => {
      setIsMaxWidth480(window.innerWidth <= 480);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ height: "100vh", position: "relative" }}>
      {isMaxWidth480 ? (
        <Image
          priority
          alt="bg-wedding"
          src={"/out-side-mobile.jpg"}
          width={360}
          height={360}
          className={classNames([styles["splash-background"]])}
        />
      ) : (
        <Image
          priority
          alt="bg-wedding"
          src={"/out-side.jpg"}
          width={2600}
          height={2600}
          className={classNames([styles["splash-background"]])}
        />
      )}

      <div
        className="absolute w-full flex justify-start h-full items-center"
        style={{ height: "100vh" }}
      >
        <div className="flex flex-col justify-between p-8 h-full">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              duration: 2,
            }}
          >
            <h1 className={classNames([styles["wedding-name"]])}>
              <p className="text-start">Quốc Thống</p>
              <p className="text-center">&amp;</p>
              <p className="text-end">Kim Phượng</p>
            </h1>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              duration: 2,
            }}
          >
            <FlyHeart style={{ width: 250, marginBottom: 34 }} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
