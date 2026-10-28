import React from "react";
import Icon from "./Icon";

const stats = [
  ["users", "35+", "Faculty"],
  ["book", "750+", "Students"],
  ["award", "100+", "Awards"],
  ["flask", "10+", "Laboratories"],
  ["calendar", "25+", "Years of Excellence"],
  ["users", "95%", "Placement Rate"]
];

export default function Stats() {
  return <div className="stats-wrap container">
    {stats.map(([icon, number, label]) => (
      <div className="stat" key={label}>
        <Icon name={icon} size={26} />
        <div><strong>{number}</strong><span>{label}</span></div>
      </div>
    ))}
  </div>;
}
