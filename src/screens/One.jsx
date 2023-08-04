import React, { useState } from "react";
import Table from "../component/table";
import Data from "../data/Wine-Data.json";

export default function One() {
  const [classKey, setClassKey] = useState("Alcohol");
  const [dataKey, setDataKey] = useState("Flavanoids");
  return (
    <div className="container">
      <h1 className="title">One</h1>
      <Table data={Data} classKey={classKey} dataKey={dataKey} />
    </div>
  );
}
