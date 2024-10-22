import {
  faCaretRight,
  faHotel,
  faLocationDot,
  faPhone,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PhoneDisplay = (phoneNumber: string) => {
  let phone = phoneNumber.split(".").join("");
  return (
    <a href={`tel:${phone}`} className="flex gap-2 ml-4 underline w-fit">
      <FontAwesomeIcon icon={faPhone} />
      {phoneNumber}
    </a>
  );
};

const LocationDisplay = (href: string) => {
  return (
    <a className="ml-4 flex gap-2 underline" href={href} target="_blank">
      <FontAwesomeIcon icon={faLocationDot} />
      Xem trên google map
    </a>
  );
};

const TitleDisplay = (title: string, icon?: any) => {
  return (
    <div className="flex gap-4 leading-normal">
      {icon ? (
        icon
      ) : (
        <FontAwesomeIcon icon={faCaretRight} style={{ fontSize: 18 }} />
      )}
      {title}
    </div>
  );
};

const MoreInfo = () => {
  return (
    <div className={styles["more-info"]}>
      <div className="heading mb-12">Thông tin thêm cho khách mời</div>
      <div className={styles["info-section"]}>
        {TitleDisplay(
          "Xe khách từ Đà Nẵng - Buôn Ma Thuột",
          <FontAwesomeIcon icon={faTruck} style={{ fontSize: 18 }} />
        )}
        <div className="ml-4">
          {TitleDisplay(
            "Tuyến: Bến xe Đà Nẵng - Buôn Ma Thuột",
            <FontAwesomeIcon icon={faCaretRight} style={{ fontSize: 18 }} />
          )}
          <div className="ml-8">
            <div className="flex gap-4 flex-col p-4">
              {TitleDisplay(
                " Nhà xe Hồng Anh:",
                <FontAwesomeIcon icon={faCaretRight} style={{ fontSize: 18 }} />
              )}
              {PhoneDisplay("0931.051.051")}
              {PhoneDisplay("0931.657.657")}
              {PhoneDisplay("0911.149.888")}
            </div>
            <div className="flex gap-4 flex-col p-4">
              {TitleDisplay(
                "Nhà xe Tuấn Anh:",
                <FontAwesomeIcon icon={faCaretRight} style={{ fontSize: 18 }} />
              )}
              {PhoneDisplay("0981.604.604")}
            </div>
          </div>
        </div>
      </div>

      <div className={styles["info-section"]}>
        {TitleDisplay(
          "Xe khách từ Hồ Chí Minh - Buôn Ma Thuột",
          <FontAwesomeIcon icon={faTruck} style={{ fontSize: 18 }} />
        )}
        <div className="ml-4">
          {TitleDisplay(
            "Tuyến: Bến xe Miền Đông - Buôn Ma Thuột",
            <FontAwesomeIcon icon={faCaretRight} style={{ fontSize: 18 }} />
          )}
          <div className="flex gap-4 flex-col p-4">
            {TitleDisplay(
              "Nhà xe 2 Hùng Điệp:",
              <FontAwesomeIcon icon={faCaretRight} style={{ fontSize: 18 }} />
            )}
            {PhoneDisplay("0947.095.775")}
            {PhoneDisplay("0949.247.279")}
          </div>

          {TitleDisplay(
            "Tuyến: Bến xe An Sương - Buôn Ma Thuột",
            <FontAwesomeIcon icon={faCaretRight} style={{ fontSize: 18 }} />
          )}
          <div className="flex gap-4 flex-col p-4">
            {TitleDisplay(
              "Nhà xe Hoàng Giang:",
              <FontAwesomeIcon icon={faCaretRight} style={{ fontSize: 18 }} />
            )}
            {PhoneDisplay("0944.208.208")}
          </div>
        </div>
      </div>

      <div className={styles["info-section"]}>
        {TitleDisplay("Nhà nghỉ lân cận:", <FontAwesomeIcon icon={faHotel} />)}

        <div className="flex gap-4 flex-col p-4">
          {TitleDisplay(
            "Nhà nghỉ Châu Linh",
            <FontAwesomeIcon icon={faCaretRight} style={{ fontSize: 18 }} />
          )}
          {PhoneDisplay("0983.224.567")}
          {LocationDisplay("https://maps.app.goo.gl/e1Z1pTCnjGVN5HHe7")}
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
