import classNames from "classnames";
import styles from "./styles.module.scss";
import { Image } from "react-grid-gallery";

export interface CustomImage extends Image {
  original: string;
}

export const images: CustomImage[] = [
  {
    src: "/engagements/src/1O8A0024.jpg",
    original: "/engagements/1O8A0024.jpg",
    width: 320,
    height: 200,
    customOverlay: (
      <div className={classNames(["h-full", styles["hover-img"]])}></div>
    ),
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "Flora", title: "Flora" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "/engagements/src/1O8A0030.jpg",
    original: "/engagements/1O8A0030.jpg",
    width: 320,
    height: 200,
    customOverlay: (
      <div className={classNames(["h-full", styles["hover-img"]])}></div>
    ),
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: "/engagements/src/1O8A0045.jpg",
    original: "/engagements/1O8A0045.jpg",
    width: 320,
    height: 200,
    customOverlay: (
      <div className={classNames(["h-full", styles["hover-img"]])}></div>
    ),
    caption: "Color Pencils (Jeshu John - designerspics.com)",
  },
  {
    src: "/engagements/src/1O8A0051.jpg",
    original: "/engagements/1O8A0051.jpg",
    width: 320,
    height: 200,
    customOverlay: (
      <div className={classNames(["h-full", styles["hover-img"]])}></div>
    ),
    caption: "Red Apples with other Red Fruit (foodiesfeed.com)",
  },
  {
    src: "/engagements/src/1O8A0069.jpg",
    original: "/engagements/1O8A0069.jpg",
    width: 320,
    height: 200,
    customOverlay: (
      <div className={classNames(["h-full", styles["hover-img"]])}></div>
    ),
    caption: "37H (gratispgraphy.com)",
  },
  {
    src: "/engagements/src/1O8A0173.jpg",
    original: "/engagements/1O8A0173.jpg",
    width: 320,
    height: 200,
    customOverlay: (
      <div className={classNames(["h-full", styles["hover-img"]])}></div>
    ),
    tags: [{ value: "Nature", title: "Nature" }],
    caption: "8H (gratisography.com)",
  },
  {
    src: "/engagements/src/1O8A0178.jpg",
    original: "/engagements/1O8A0178.jpg",
    width: 320,
    height: 200,
    customOverlay: (
      <div className={classNames(["h-full", styles["hover-img"]])}></div>
    ),
    caption: "286H (gratisography.com)",
  },
  {
    src: "/engagements/src/1O8A0209.jpg",
    original: "/engagements/1O8A0209.jpg",
    width: 320,
    height: 200,
    customOverlay: (
      <div className={classNames(["h-full", styles["hover-img"]])}></div>
    ),
    tags: [{ value: "People", title: "People" }],
    caption: "315H (gratisography.com)",
  },
  {
    src: "/engagements/src/1O8A0222.jpg",
    original: "/engagements/1O8A0222.jpg",
    width: 320,
    height: 200,
    customOverlay: (
      <div className={classNames(["h-full", styles["hover-img"]])}></div>
    ),
    caption: "201H (gratisography.com)",
  },
  {
    src: "/engagements/src/1O8A0237.jpg",
    original: "/engagements/1O8A0237.jpg",
    alt: "Big Ben - London",
    width: 320,
    height: 200,
    customOverlay: (
      <div className={classNames(["h-full", styles["hover-img"]])}></div>
    ),
    caption: "Big Ben (Tom Eversley - isorepublic.com)",
  },
  {
    src: "/engagements/src/1O8A0253.jpg",
    original: "/engagements/1O8A0253.jpg",
    alt: "Red Zone - Paris",
    width: 320,
    height: 200,
    customOverlay: (
      <div className={classNames(["h-full", styles["hover-img"]])}></div>
    ),
    tags: [{ value: "People", title: "People" }],
    caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)",
  },
  {
    src: "/engagements/src/1O8A0354.jpg",
    original: "/engagements/1O8A0354.jpg",
    alt: "Wood Glass",
    width: 320,
    height: 200,
    customOverlay: (
      <div className={classNames(["h-full", styles["hover-img"]])}></div>
    ),
    caption: "Wood Glass (Tom Eversley - isorepublic.com)",
  },
  // {
  //   src: "/engagements/src/1O8A0389.jpg",
  //   original: "/engagements/1O8A0389.jpg",
  //   width: 320,
  //   height: 200,
  //  customOverlay: (
  //     <div className={classNames(["h-full", styles["hover-img"]])}></div>
  //   ),
  //   caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
  // },
  // {
  //   src: "/engagements/src/1O8A0401.jpg",
  //   original: "/engagements/1O8A0401.jpg",
  //   width: 320,
  //   height: 200,
  //  customOverlay: (
  //     <div className={classNames(["h-full", styles["hover-img"]])}></div>
  //   ),
  //   caption: "Old Barn (Tom Eversley - isorepublic.com)",
  // },
  // {
  //   src: "/engagements/src/1O8A0452.jpg",
  //   original: "/engagements/1O8A0452.jpg",
  //   alt: "Cosmos Flower",
  //   width: 320,
  //   height: 200,
  //  customOverlay: (
  //     <div className={classNames(["h-full", styles["hover-img"]])}></div>
  //   ),
  //   caption: "Cosmos Flower Macro (Tom Eversley - isorepublic.com)",
  // },
  // {
  //   src: "/engagements/src/1O8A0466.jpg",
  //   original: "/engagements/1O8A0466.jpg",
  //   width: 220,
  //   height: 200,
  //   caption: "Orange Macro (Tom Eversley - isorepublic.com)",
  // },
  // {
  //   src: "/engagements/src/1O8A0473.jpg",
  //   original: "/engagements/1O8A0473.jpg",
  //   width: 320,
  //   height: 200,
  //  customOverlay: (
  //     <div className={classNames(["h-full", styles["hover-img"]])}></div>
  //   ),
  //   tags: [
  //     { value: "Nature", title: "Nature" },
  //     { value: "People", title: "People" },
  //   ],
  //   caption: "Surfer Sunset (Tom Eversley - isorepublic.com)",
  // },
  // {
  //   src: "/engagements/src/1O8A0527.jpg",
  //   original: "/engagements/1O8A0527.jpg",
  //   width: 320,
  //   height: 200,
  //  customOverlay: (
  //     <div className={classNames(["h-full", styles["hover-img"]])}></div>
  //   ),
  //   tags: [
  //     { value: "People", title: "People" },
  //     { value: "Sport", title: "Sport" },
  //   ],
  //   caption: "Man on BMX (Tom Eversley - isorepublic.com)",
  // },
  // {
  //   src: "/engagements/src/1O8A0586.jpg",
  //   original: "/engagements/1O8A0586.jpg",
  //   width: 320,
  //   height: 200,
  //  customOverlay: (
  //     <div className={classNames(["h-full", styles["hover-img"]])}></div>
  //   ),
  //   caption: "Ropeman - Thailand (Tom Eversley - isorepublic.com)",
  // },
  // // {
  // //   src: "/engagements/src/1O8A0590.jpg",
  // //   original: "/engagements/1O8A0590.jpg",
  // //   width: 320,
  // //   height: 200,
  //  customOverlay: (
  //     <div className={classNames(["h-full", styles["hover-img"]])}></div>
  //   ),
  // //   caption: "Time to Think (Tom Eversley - isorepublic.com)",
  // // },
  // {
  //   src: "/engagements/src/1O8A0590.jpg",
  //   original: "/engagements/1O8A0590.jpg",
  //   width: 320,
  //   height: 200,
  //  customOverlay: (
  //     <div className={classNames(["h-full", styles["hover-img"]])}></div>
  //   ),
  //   tags: [
  //     { value: "Nature", title: "Nature" },
  //     { value: "Fauna", title: "Fauna" },
  //   ],
  //   caption: "Untitled (Jan Vasek - jeshoots.com)",
  // },
  // {
  //   src: "/engagements/src/1O8A0600.jpg",
  //   original: "/engagements/1O8A0600.jpg",
  //   width: 320,
  //   height: 200,
  //  customOverlay: (
  //     <div className={classNames(["h-full", styles["hover-img"]])}></div>
  //   ),
  //   tags: [{ value: "People", title: "People" }],
  //   caption: "Untitled (moveast.me)",
  // },
  // {
  //   src: "/engagements/src/1O8A0611.jpg",
  //   original: "/engagements/1O8A0611.jpg",
  //   width: 220,
  //   height: 200,
  //   caption: "A photo by 贝莉儿 NG. (unsplash.com)",
  // },
  // {
  //   src: "/engagements/src/1O8A0620.jpg",
  //   original: "/engagements/1O8A0620.jpg",
  //   width: 220,
  //   height: 200,
  //   caption: "A photo by Matthew Wiebe. (unsplash.com)",
  // },
];
