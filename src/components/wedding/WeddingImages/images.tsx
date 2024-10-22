import classNames from "classnames";
import styles from "./styles.module.scss";
import { Image } from "react-grid-gallery";

export interface CustomImage extends Image {
  original: string;
}

export const images: CustomImage[] = [
  {
    src: "/wedding-picture/DSC00001.jpg",
    original: "/wedding-picture/DSC00001.jpg",
    width: 320,
    height: 200,
    customOverlay: (
      <div className={classNames(["h-full", styles["hover-img"]])}></div>
    ),
  },
  {
    src: "/wedding-picture/DSC00086 re.jpg",
    original: "/wedding-picture/DSC00086 re.jpg",
    width: 320,
    height: 400,
    customOverlay: (
      <div className={classNames(["h-full", styles["hover-img"]])}></div>
    ),
  },
  {
    src: "/wedding-picture/DSC00148 re.jpg",
    original: "/wedding-picture/DSC00148 re.jpg",
    width: 320,
    height: 200,
    customOverlay: (
      <div className={classNames(["h-full", styles["hover-img"]])}></div>
    ),
  },
  {
    src: "/wedding-picture/DSC00161 re.jpg",
    original: "/wedding-picture/DSC00161 re.jpg",
    width: 300,
    height: 400,
    customOverlay: (
      <div className={classNames(["h-full", styles["hover-img"]])}></div>
    ),
  },
  {
    src: "/wedding-picture/DSC00359 re.jpg",
    original: "/wedding-picture/DSC00359 re.jpg",
    width: 320,
    height: 400,
    customOverlay: (
      <div className={classNames(["h-full", styles["hover-img"]])}></div>
    ),
  },
  {
    src: "/wedding-picture/DSC00426 re.jpg",
    original: "/wedding-picture/DSC00426 re.jpg",
    width: 320,
    height: 200,
    customOverlay: (
      <div className={classNames(["h-full", styles["hover-img"]])}></div>
    ),
  },
  {
    src: "/wedding-picture/DSC00487 re.jpg",
    original: "/wedding-picture/DSC00487 re.jpg",
    width: 200,
    height: 200,
    customOverlay: (
      <div className={classNames(["h-full", styles["hover-img"]])}></div>
    ),
  },
  {
    src: "/wedding-picture/DSC00524 re.jpg",
    original: "/wedding-picture/DSC00524 re.jpg",
    width: 320,
    height: 200,
    customOverlay: (
      <div className={classNames(["h-full", styles["hover-img"]])}></div>
    ),
  },
  // {
  //   src: "/wedding-picture/DSC00530 re.jpg",
  //   original: "/wedding-picture/DSC00530 re.jpg",
  //   width: 320,
  //   height: 200,
  //   customOverlay: (
  //     <div className={classNames(["h-full", styles["hover-img"]])}></div>
  //   ),
  // },
  {
    src: "/wedding-picture/DSC00693 re.jpg",
    original: "/wedding-picture/DSC00693 re.jpg",
    width: 320,
    height: 200,
    customOverlay: (
      <div className={classNames(["h-full", styles["hover-img"]])}></div>
    ),
  },
  {
    src: "/wedding-picture/DSC00714 re.jpg",
    original: "/wedding-picture/DSC00714 re.jpg",
    width: 320,
    height: 200,
    customOverlay: (
      <div className={classNames(["h-full", styles["hover-img"]])}></div>
    ),
  },
  {
    src: "/wedding-picture/DSC00735 re.jpg",
    original: "/wedding-picture/DSC00735 re.jpg",
    width: 320,
    height: 200,
    customOverlay: (
      <div className={classNames(["h-full", styles["hover-img"]])}></div>
    ),
  },
  {
    src: "/wedding-picture/DSC09759 copy.jpg",
    original: "/wedding-picture/DSC09759 copy.jpg",
    width: 320,
    height: 200,
    customOverlay: (
      <div className={classNames(["h-full", styles["hover-img"]])}></div>
    ),
  },
  // {
  //   src: "/wedding-picture/DSC09830 re.jpg",
  //   original: "/wedding-picture/DSC09830 re.jpg",
  //   width: 320,
  //   height: 200,
  //   customOverlay: (
  //     <div className={classNames(["h-full", styles["hover-img"]])}></div>
  //   ),
  // },
  // {
  //   src: "/wedding-picture/DSC09841 re.jpg",
  //   original: "/wedding-picture/DSC09841 re.jpg",
  //   width: 320,
  //   height: 200,
  //   customOverlay: (
  //     <div className={classNames(["h-full", styles["hover-img"]])}></div>
  //   ),
  // },
  // {
  //   src: "/wedding-picture/DSC09667.jpg",
  //   original: "/wedding-picture/DSC09667.jpg",
  //   width: 320,
  //   height: 200,
  //   customOverlay: (
  //     <div className={classNames(["h-full", styles["hover-img"]])}></div>
  //   ),
  // },
  // {
  //   src: "/wedding-picture/DSC00354.jpg",
  //   original: "/wedding-picture/DSC00354.jpg",
  //   width: 320,
  //   height: 200,
  //   customOverlay: (
  //     <div className={classNames(["h-full", styles["hover-img"]])}></div>
  //   ),
  // },
  // {
  //   src: "/wedding-picture/DSC09977.jpg",
  //   original: "/wedding-picture/DSC09977.jpg",
  //   width: 320,
  //   height: 200,
  //   customOverlay: (
  //     <div className={classNames(["h-full", styles["hover-img"]])}></div>
  //   ),
  // },
  // //

  // {
  //   src: "/wedding-picture/DSC00022.jpg",
  //   original: "/wedding-picture/DSC00022.jpg",
  //   width: 320,
  //   height: 200,
  //   customOverlay: (
  //     <div className={classNames(["h-full", styles["hover-img"]])}></div>
  //   ),
  // },
  // {
  //   src: "/wedding-picture/DSC00064.jpg",
  //   original: "/wedding-picture/DSC00064.jpg",
  //   width: 320,
  //   height: 200,
  //   customOverlay: (
  //     <div className={classNames(["h-full", styles["hover-img"]])}></div>
  //   ),
  // },
  // {
  //   src: "/wedding-picture/DSC00143.jpg",
  //   original: "/wedding-picture/DSC00143.jpg",
  //   width: 320,
  //   height: 200,
  //   customOverlay: (
  //     <div className={classNames(["h-full", styles["hover-img"]])}></div>
  //   ),
  // },
  // {
  //   src: "/wedding-picture/DSC00148.jpg",
  //   original: "/wedding-picture/DSC00148.jpg",
  //   width: 320,
  //   height: 200,
  //   customOverlay: (
  //     <div className={classNames(["h-full", styles["hover-img"]])}></div>
  //   ),
  // },
];
