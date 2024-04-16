import "./Chart.css";
import chart from "../../assets/chart.jpeg";

export default function Chart() {
  return (
    <section className="chart__section" id="chart">
      <h1 className="chart__title">چارت سازمانی</h1>
      <div className="img__container">
        <img src={chart} alt="" />
      </div>
    </section>
  );
}
