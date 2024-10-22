"use client";
import styles from "./styles.module.scss";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useState } from "react";
import { CustomImage, images } from "./images";
import classNames from "classnames";
import { motion } from "framer-motion";
import { GreenLightWeight } from "@/icons/GreenLightweight";

const EngagementParty = () => {
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index: number, item: CustomImage) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div className={styles["video-engagement-party"]}>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          duration: 2,
        }}
      >
        <iframe
          className={classNames(["mb-4", styles["video-embedded"]])}
          width={"100%"}
          height={"30vh"}
          src="https://www.youtube.com/embed/aIldte83gH0?si=X8jdm9Ml8cwaFsel"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </motion.div>
      <div className={styles["custom-list-img"]}>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            duration: 2,
          }}
        >
          <Gallery
            images={images}
            onClick={handleClick}
            enableImageSelection={false}
          />
          {!!currentImage && (
            /* @ts-ignore */
            <Lightbox
              mainSrc={currentImage.original}
              imageTitle={currentImage.caption}
              mainSrcThumbnail={currentImage.src}
              nextSrc={nextImage.original}
              nextSrcThumbnail={nextImage.src}
              prevSrc={prevImage.original}
              prevSrcThumbnail={prevImage.src}
              onCloseRequest={handleClose}
              onMovePrevRequest={handleMovePrev}
              onMoveNextRequest={handleMoveNext}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default EngagementParty;
