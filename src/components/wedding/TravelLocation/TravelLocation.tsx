import classNames from "classnames";
import styles from "./styles.module.scss";
import Image from "next/image";

const travelLocationData = [
  {
    title: "Ngã 6 Buôn Ma Thuột",
    href: "https://mia.vn/cam-nang-du-lich/nga-6-buon-ma-thuot-guong-mat-thuong-hieu-cua-thanh-pho-vung-cao-5623",
    imgCover:
      "https://media.mia.vn/uploads/blog-du-lich/nga-6-buon-ma-thuot-guong-mat-thuong-hieu-cua-thanh-pho-vung-cao-03-1652170947.jpg",
    description:
      "Chỗ này là trung tâm thành phố, đi dạo qua cho biết nè, gần đó có nhà thờ Chính Toà, vào xem chơi",
  },
  {
    title: " Bảo tàng cafe",
    href: "https://mia.vn/cam-nang-du-lich/bao-tang-the-gioi-ca-phe-voi-khong-gian-doc-dao-noi-tay-nguyen-gio-long-5620",
    description: "Thích hợp đi tham quan vào ban ngày",
    imgCover:
      "https://media.mia.vn/uploads/blog-du-lich/bao-tang-the-gioi-ca-phe-voi-khong-gian-doc-dao-noi-tay-nguyen-gio-long-7-1652167715.jpg",
  },
  {
    title: "Thác Dray Nur",
    href: "https://www.klook.com/vi/blog/thac-dray-nur/amp/",
    description: "Chỗ này mua đồ vào chơi, ăn nhậu được nè",
    imgCover:
      "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1695107687/in5aqkkoindbyvgg2cce.webp",
  },
  {
    title: "Hồ Ea Kao",
    href: "https://zoomtravel.vn/ho-ea-kao.html",
    imgCover: "https://zoomtravel.vn/upload/images/ho-ea-kao-0.jpg",
    description: "Free, hồ siêu to, xung quanh có chỗ ngồi uống nước hóng gió ",
  },
  {
    title: "Cốm Camp & Glamping",
    href: "https://glamptrip.vn/place/com-camp-glamping-dak-lak/",
    imgCover:
      "https://glamptrip.vn/wp-content/uploads/2022/07/2022-07-24-scaled.jpg",
    description: "Gần nhà nghỉ Châu Linh, uống cf, chill chill bên suối",
  },
  {
    title: "Làng Cà Phê Trung Nguyên",
    href: "https://mia.vn/cam-nang-du-lich/kham-pha-lang-ca-phe-trung-nguyen-tu-a-den-z-5450",
    imgCover:
      "https://media.mia.vn/uploads/blog-du-lich/kham-pha-lang-ca-phe-trung-nguyen-tu-a-den-z-1-1651643296.jpg",
    description:
      "Free vé, nên đi thử cho những người ghiền cafe, không đi thì cũng tiếc á...",
  },
  {
    title: "Bảo tàng Đắk Lắk",
    href: "https://mia.vn/cam-nang-du-lich/bao-tang-dak-lak-diem-tham-quan-lich-su-vua-dep-vua-y-nghia-5678",
    imgCover:
      "https://media.mia.vn/uploads/blog-du-lich/Bao-tang-Dak-Lak-diem-tham-quan-lich-su-vua-dep-vua-y-nghia-01-1652222972.jpeg",
    description: "Giá vé rẻ, có nhà đày Buôn Ma Thuột",
  },
  {
    title: "Buôn Đôn",
    href: "https://www.traveloka.com/vi-vn/explore/destination/buon-don/234808",
    imgCover:
      "https://ik.imagekit.io/tvlk/blog/2023/05/buon-don-2.jpg?tr=dpr-2,w-675",
    description:
      "Vào đây xem voi, nhà rông, nhưng mà di chuyển hơi xa so với thành phố",
  },
  {
    title: "Đường sách cà phê Buôn Ma Thuột",
    href: "http://baovanhoa.vn/nghe-thuat/van-hoc/artmid/486/articleid/64805/duong-sach-ca-phe-buon-ma-thuot-diem-hen-van-hoa-giua-tay-nguyen",
    imgCover:
      "http://baovanhoa.vn/Portals/0/EasyDNNNews/thumbs/64805/140081%E1%BA%A2nh-6.jpg",
    description:
      "Free vé, thích hợp đi buổi tối lên uống cafe, đọc sách chill chill ",
  },
  {
    title: "KoTam",
    href: "https://www.traveloka.com/vi-vn/explore/destination/khu-du-lich-kotam-2/192635",
    imgCover:
      "https://ik.imagekit.io/tvlk/blog/2023/01/khu-du-lich-kotam-1-1024x655.jpg?tr=dpr-2,w-675",
    description: "Khu du lịch sinh thái...",
  },
];

const TravelLocation = () => {
  return (
    <div className={styles["travel-location"]}>
      <h3 className="heading">Địa điểm du lịch</h3>
      <div className={styles["love-story__stories"]}>
        {travelLocationData.map((item, index: number) => {
          return (
            <a
              href={item.href}
              className={classNames([styles["stories__wrapper"]])}
              key={index}
              target="_blank"
            >
              <div
                className={classNames([styles["frame-img"], "overflow-hidden"])}
                style={{ width: 100, height: 100, maxWidth: 300 }}
              >
                <Image
                  src={item.imgCover}
                  alt="img-stories"
                  width={100}
                  height={100}
                  loading="lazy"
                />
              </div>
              <div className={classNames([styles["text-desc"]])}>
                <div className={styles["love-story__title"]}>
                  {item.title} <span className="text-red-600">&hearts;</span>
                </div>
                <p>{item.description}</p>
              </div>
            </a>
          );
        })}
        <h3 className={styles["end"]}>
          Hết rồi <br />
          Lên xe đi thôi... <span className="text-red-600">&hearts;</span>
        </h3>
      </div>
    </div>
  );
};

export default TravelLocation;
