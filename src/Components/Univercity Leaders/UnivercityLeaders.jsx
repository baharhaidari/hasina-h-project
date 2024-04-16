import "./UnivercityLeaders.css";
import doc1 from "../../assets/doc-2.jpg";

export default function UnivercityLeaders() {
  return (
    <section className="leaders__section" id="leaders">
      <h1 className="leaders__title">روسای قبلی دانشکده</h1>

      <div className="leaders__wrapper">
        <div className="leaders__container">
          <div className="leadersInfo__container">
            <h4>دکتر نادر نعمت الهی</h4>
            <p>مدرک تحصیلی: دکتری آمار</p>
            <p>رتبه علمی: استاد تمام</p>
            <p>پست الکترونیکی: nemat@gmail.com</p>
            <p>رزومه</p>
            <p> علم سنجی</p>
          </div>

          <div className="Pimg__container">
            <img src={doc1} alt="" />
          </div>
        </div>

        <div className="leaders__container">
          <div className="leadersInfo__container">
            <h4>دکتر نادر نعمت الهی</h4>
            <p>مدرک تحصیلی: دکتری آمار</p>
            <p>رتبه علمی: استاد تمام</p>
            <p>پست الکترونیکی: nemat@gmail.com</p>
            <p>رزومه</p>
            <p> علم سنجی</p>
          </div>

          <div className="Pimg__container">
            <img src={doc1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
