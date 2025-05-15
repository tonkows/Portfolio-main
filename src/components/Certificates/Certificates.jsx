import React, { useState } from "react";
import "./certificates.css";
import List from "./List";

const Certificates = () => {
  const [items, setItems] = useState(List);
  const [visibleCount, setVisibleCount] = useState(7);

  const filterItem = (categoryItem) => {
    const updatedItems = List.filter(
      (curElem) => curElem.category === categoryItem
    );
    setItems(updatedItems);
    setVisibleCount(7);
  };

  const showMoreItems = () => {
    setVisibleCount((prevCount) => prevCount + 7);
  };

  const showLessItems = () => {
    setVisibleCount(7);
  };

  return (
    <section className="resume container section" id="Certificate">
      <h2 className="section__title">Certificates</h2>

      <div className="work__filters">
        <span
          className="work__item"
          onClick={() => {
            setItems(List);
            setVisibleCount(6);
          }}
        >
          All
        </span>
        <span className="work__item" onClick={() => filterItem("Internship")}>
          Internship
        </span>
        <span className="work__item" onClick={() => filterItem("2024")}>
          2024
        </span>
        <span className="work__item" onClick={() => filterItem("2023")}>
          2023
        </span>
        <span className="work__item" onClick={() => filterItem("2022")}>
          2022
        </span>
        <span
          className="work__item"
          onClick={() => filterItem("AcademicAward")}
        >
          Academic Award
        </span>
      </div>

      <div className="work__container grid">
        {items.slice(0, visibleCount).map((elem) => {
          const { id, image, title, category } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              
            </div>
          );
        })}
      </div>

      {visibleCount < items.length ? (
        <button className="show-more-btn" onClick={showMoreItems}>
          Show More
        </button>
      ) : (
        visibleCount > 6 && (
          <button className="show-less-btn" onClick={showLessItems}>
            Show Less
          </button>
        )
      )}
    </section>
  );
};

export default Certificates;
