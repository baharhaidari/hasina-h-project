import { useState } from "react";
import "./depDash.css";

export default function GroupDash() {
  const [selectedDepartment, setSelectedDepartment] = useState("rashidi");
  const [selectedYear, setSelectedYear] = useState(1403);

  let data;
  if (selectedDepartment === "rashidi" && selectedYear == 1402) {
    data = (
      <iframe
        width="100%"
        height="780px"
        src="https://lookerstudio.google.com/embed/reporting/6e55e3d7-bd77-4cfb-a799-b02cfc5d4c9b/page/p_ufke7ww3fd"
        frameborder="0"
        style={{ border: 0 }}
        title="Rasidi1402"
        allowfullscreen
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      ></iframe>
    );
  } else if (selectedDepartment === "rashidi" && selectedYear == 1403) {
    data = (
      <iframe
        width="100%"
        height="780px"
        src="https://lookerstudio.google.com/embed/reporting/de4531af-b516-4865-b83f-b21e14692298/page/p_ufke7ww3fd"
        frameborder="0"
        title="Rasidi1403"
        style={{ border: 0 }}
        allowfullscreen
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      ></iframe>
    );
  } else if (selectedDepartment === "baqer" && selectedYear == 1402) {
    data = (
      <iframe
        width="100%"
        height="780px"
        src="https://lookerstudio.google.com/embed/reporting/6ae9271b-45a0-41d3-a259-5c69e574b64a/page/p_ufke7ww3fd"
        frameborder="0"
        title="baqer1402"
        style={{ border: 0 }}
        allowfullscreen
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      ></iframe>
    );
  } else if (selectedDepartment === "baqer" && selectedYear == 1403) {
    data = (
      <iframe
        width="100%"
        height="780px"
        src="https://lookerstudio.google.com/embed/reporting/190a9bb8-46b1-45b8-9d92-1aebaaa28957/page/p_ufke7ww3fd"
        frameborder="0"
        style={{ border: 0 }}
        allowfullscreen
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      ></iframe>
    );
  }

  const getDepartartment = (selectedDepartment) => {
    setSelectedDepartment(selectedDepartment);
  };

  const depOnChange = (event) => {
    getDepartartment(event.target.value);
  };

  const getYear = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const yearOnChange = (event) => {
    getYear(event.target.value);
  };

  return (
    <section className="home__section" id="dashboard">
      <div className="filters__wrapper">
        <div className="filter__control">
          <label className="filter__label"> استاد:</label>

          <select
            value={selectedDepartment}
            onChange={depOnChange}
            className="teacher__options"
          >
            <option value="rashidi">دکتر رشیدی</option>
            <option value="bahrani">دکتر بحرانی</option>
            <option value="pran">دکتر پرند</option>
            <option value="baqer">دکتر پورمحمدباقر</option>
            <option value="matin">دکتر متین فر</option>
            <option value="faal">دکتر تیموری فعال</option>
          </select>
        </div>

        <div className="filter__control">
          <label className="filter__label"> سال:</label>

          <select
            value={selectedYear}
            onChange={yearOnChange}
            className="year__options"
          >
            <option value="1402">1402</option>
            <option value="1403">1403</option>
          </select>
        </div>
      </div>

      {data}
    </section>
  );
}
