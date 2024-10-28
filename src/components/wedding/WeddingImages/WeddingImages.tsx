import React, { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import { images, CustomImage } from "./images";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
const WeddingImages = () => {
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;
  //  _item: CustomImage
  const handleClick = (index: number) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
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
        {/* <Gallery
          images={images}
          onClick={handleClick}
          enableImageSelection={false}
        /> */}

        {/*TODO: test */}
        <div className="flex gap-4 flex-wrap cursor-pointer">
          {images.map((src, index) => (
            <Image
              key={index}
              alt={`Image ${index + 1}`}
              src={src.src}
              height={320}
              width={200}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>

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
  );
};

export default WeddingImages;
