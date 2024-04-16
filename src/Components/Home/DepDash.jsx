import { useState } from "react";
import "./depDash.css";

export default function DepDash() {
  const [selectedDepartment, setSelectedDepartment] = useState("rayana");
  const [selectedYear, setSelectedYear] = useState(1403);

  let data;
  if (selectedDepartment === "rayana" && selectedYear == 1402) {
    data = (
      <iframe
        width="100%"
        height="780px"
        src="https://lookerstudio.google.com/embed/reporting/ea42926e-7b88-459d-be4d-19817bf5b044/page/p_esz9rd22fd"
        frameborder="0"
        style={{ border: 0 }}
        title="R1402"
        allowfullscreen
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      ></iframe>
    );
  } else if (selectedDepartment === "rayana" && selectedYear == 1403) {
    data = (
      <iframe
        width="100%"
        height="780px"
        src="https://lookerstudio.google.com/embed/reporting/6af2656c-a44f-471e-85d5-1a9dbb05dbbe/page/p_esz9rd22fd"
        frameborder="0"
        style={{ border: 0 }}
        title="R1403"
        allowfullscreen
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      ></iframe>
    );
  } else if (selectedDepartment === "math" && selectedYear == 1402) {
    data = (
      <iframe
        width="100%"
        height="780px"
        src="https://lookerstudio.google.com/embed/reporting/cf5983e3-519c-42e0-ad2d-c912a1c39d5f/page/p_esz9rd22fd"
        frameborder="0"
        title="M1402"
        style={{ border: 0 }}
        allowfullscreen
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      ></iframe>
    );
  } else if (selectedDepartment === "math" && selectedYear == 1403) {
    data = (
      <iframe
        width="100%"
        height="780px"
        src="https://lookerstudio.google.com/embed/reporting/17e353fe-c631-4539-bd9e-df5a4bbb7f76/page/p_esz9rd22fd"
        frameborder="0"
        title="R1403"
        style={{ border: 0 }}
        allowfullscreen
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      ></iframe>
    );
  } else if (selectedDepartment === "amar" && selectedYear == 1402) {
    data = (
      <iframe
        width="100%"
        height="780px"
        src="https://lookerstudio.google.com/embed/reporting/99cde62f-de8e-4632-b8a9-466cfbd7ec79/page/p_esz9rd22fd"
        frameborder="0"
        title="A1402"
        style={{ border: 0 }}
        allowfullscreen
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      ></iframe>
    );
  } else if (selectedDepartment === "amar" && selectedYear == 1403) {
    data = (
      <iframe
        width="100%"
        height="780px"
        src="https://lookerstudio.google.com/embed/reporting/f851087e-e868-4fb2-885c-04953983cf13/page/p_esz9rd22fd"
        frameborder="0"
        title="A1403"
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
          <label className="filter__label"> گروه:</label>

          <select
            value={selectedDepartment}
            onChange={depOnChange}
            className="dep__options"
          >
            <option value="rayana">رایانه</option>
            <option value="math">ریاضی</option>
            <option value="amar">آمار</option>
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
