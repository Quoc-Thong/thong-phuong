import classNames from "classnames";
import Image from "next/image";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

const Donating = () => {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        duration: 2,
      }}
    >
      <div className="mb-12">
        <div
          className={classNames([
            "text-center w-full mb-12",
            styles["event-heading"],
          ])}
        >
          Hộp mừng cưới
        </div>
        <div className={styles["donating-wrapper"]}>
          <div className="">
            <div className={styles["card-donating"]}>
              <p>Mừng cưới đến chú rể</p>
              <Image
                src="/donating/KHANH-QR.png"
                width={150}
                height={150}
                alt="qr-code"
                priority
              />
              <p>DANG QUOC KHANH</p>
              <p style={{ maxWidth: 200, textAlign: "center" }}>
                Ứng dụng ngân hàng, Momo, VNPay, Napas 247
              </p>
            </div>
          </div>
          <div className="">
            <div className={styles["card-donating"]}>
              <p>Mừng cưới đến cô dâu</p>
              <Image
                src="/donating/THUY-QR.png"
                width={150}
                height={150}
                alt="qr-code"
                priority
              />
              <p>NGUYEN THI THU THUY</p>
              <p style={{ maxWidth: 200, textAlign: "center" }}>
                Ứng dụng ngân hàng, Momo, VNPay, Napas 247
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Donating;
