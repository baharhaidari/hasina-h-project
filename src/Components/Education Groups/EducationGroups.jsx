import "./EducationGroups.css";
import doc1 from "../../assets/l11.jpg";
import doc2 from "../../assets/l14.jpg";
import doc3 from "../../assets/l22.jpg";

export default function EducationGroups() {
  return (
    <section className="groups__section" id="majors">
      <h1 className="title">گروه های آموزشی</h1>
      <h3 className="groups__subtitle">مدیران گروه های آموزشی</h3>

      <div className="groups__wrapper">
        <div className="groups__container">
          <div className="groupsInfo__container">
            <p>
              نام و نام خانوادگی:
              <span className="desc">محمدرضا صالحی راد</span>
            </p>

            <p>
              مدرک تحصیلی:
              <span className="desc">دکترای رشته آمار</span>
            </p>

            <p>
              ایمیل:
              <span className="desc">salehirad@atu.ac.ir</span>
            </p>

            <p>
              شماره تماس::
              <span className="desc">48394311</span>
            </p>

            <a href="#home" className="downloadCV__btn">
              دریافت رزومه علمی و پژوهشی
            </a>
          </div>

          <div className="img__container">
            <img src={doc1} alt="" />
          </div>
        </div>

        <div className="groups__container">
          <div className="groupsInfo__container">
            <p>
              نام و نام خانوادگی:
              <span className="desc">شکوه شاه بیک</span>
            </p>

            <p>
              مدرک تحصیلی:
              <span className="desc">دکترای رشته ریاضی</span>
            </p>

            <p>
              ایمیل:
              <span className="desc">salehirad@atu.ac.ir</span>
            </p>

            <p>
              شماره تماس::
              <span className="desc">48394314</span>
            </p>

            <a href="#home" className="downloadCV__btn">
              دریافت رزومه علمی و پژوهشی
            </a>
          </div>

          <div className="Pimg__container">
            <img src={doc2} alt="" />
          </div>
        </div>

        <div className="groups__container">
          <div className="groupsInfo__container">
            <p>
              نام و نام خانوادگی:
              <span className="desc">محمد بحرانی</span>
            </p>

            <p>
              مدرک تحصیلی:
              <span className="desc">دکترای رشته مهندسی کامپیوتر</span>
            </p>

            <p>
              ایمیل:
              <span className="desc">salehirad@atu.ac.ir</span>
            </p>

            <p>
              شماره تماس::
              <span className="desc">48394306</span>
            </p>

            <a href="#home" className="downloadCV__btn">
              دریافت رزومه علمی و پژوهشی
            </a>
          </div>

          <div className="Pimg__container">
            <img src={doc3} alt="" />
          </div>
        </div>
      </div>

      <h3 className="majors__title">رشته های تحصیلی دایر در دانشکده:</h3>
      <ul className="activeMajors__list">
        <li>کارشناسی آمار و کاربردها ورودی های قبل از 96 </li>
        <li>کارشناسی آمار ورودی 96 به بعد</li>
        <li>کارشناسی رشته مهندسی کامپیوتر</li>
        <li>کارشناسی ارشد آمار ریاضی </li>
        <li>کارشناسی ارشد آمار اجتماعی اقتصادی</li>
        <li>کارشناسی ارشد ریاضی کاربردی-ریاضی مالی</li>
        <li>کارشناسی ارشد نظریه سیستم ها</li>
        <li>کارشناسی ارشد محاسبات نرم و هوش مصنوعی</li>
        <li>کارشناسی ارشد علم داده از سال 99</li>
        <li>دکتری آمار</li>
        <li>دکتری ریاضی مالی</li>
      </ul>
    </section>
  );
}
