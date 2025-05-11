import React from "react";
import Card from "./Card";
import "../assets/css/MainContent.css";

export default function MainContent(props) {
  return (
    <section className="card-section">
      {props.data.map(function (item, index) {
        return (
          <Card key={index} title={item.title} description={item.description} />
        );
      })}
    </section>
  );
}
