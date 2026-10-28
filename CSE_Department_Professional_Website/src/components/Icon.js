import React from "react";

const paths = {
  arrow: "M5 12h14M13 6l6 6-6 6",
  chevron: "M6 9l6 6 6-6",
  menu: "M4 6h16M4 12h16M4 18h16",
  close: "M6 6l12 12M18 6L6 18",
  search: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm6-2 4 4",
  mail: "M4 6h16v12H4zM4 7l8 6 8-6",
  phone: "M6 4l3 2-2 3c1.5 3 3.5 4.5 6 6l3-2 2 3-2 2c-1 .7-2.2.7-3.4.2-5.2-2.1-8.7-5.6-10.8-10.8C1.3 6.2 1.3 5 2 4z",
  calendar: "M5 4h14v16H5zM8 2v4M16 2v4M5 9h14",
  location: "M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6",
  users: "M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M9.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm7-7a4 4 0 0 1 0 7.7M21 21v-2a4 4 0 0 0-3-3.9",
  award: "M12 15l-3 6 3-1.5 3 1.5-3-6zm0-12a5 5 0 1 0 0 10 5 5 0 0 0 0-10z",
  book: "M4 5a3 3 0 0 1 3-3h13v17H7a3 3 0 0 0-3 3zm0 0v14a3 3 0 0 1 3-3h13",
  flask: "M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3M8 15h8",
  external: "M14 4h6v6M20 4l-9 9M18 13v6H4V5h6"
};

export default function Icon({ name, size = 20, strokeWidth = 1.8 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name] || paths.arrow} />
    </svg>
  );
}
