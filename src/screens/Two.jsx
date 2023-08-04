import React, { useState } from "react";
import Table from "../component/table";
import Data from "../data/Wine-Data.json";

export default function Two() {
  const [classKey, setClassKey] = useState("Alcohol");
  const [dataKey, setDataKey] = useState("Gamma");
  const dataArray = Data.map(
    (item) => ({
      ...item,
      Gamma: (item.Ash * item.Hue) / item.Magnesium,
    }),
    []
  );
  return (
    <div className="container">
      <h1 className="title">Two</h1>
      <Table data={dataArray} classKey={classKey} dataKey={dataKey} />
    </div>
  );
}
