import React, { useMemo } from "react";
// import "./style.css";
import { getMean, getMedian, getMode } from "../utils";

export default function Table(props) {
  const getHeaders = useMemo(
    () =>
      props.data.reduce((acc, curr) => {
        const key = curr[props.classKey];
        if (!acc.includes(key)) {
          acc.push(key);
        }
        return acc;
      }, []),
    [props.classKey]
  );
  const renderHeaders = useMemo(
    () => getHeaders.map((val) => <th key={val}>{`Class ${val}`}</th>),
    [getHeaders, props.classKey]
  );

  const { meanRow, medianRow, modeRow } = useMemo(() => {
    const generateRowCell = (ukey, value) => {
      return <td key={ukey}>{value}</td>;
    };
    return getHeaders.reduce(
      (acc, curr, index) => {
        const dataArr = props.data.filter((a) => a[props.classKey] === curr);
        acc.meanRow = [
          ...(acc.meanRow || []),
          generateRowCell(`mean_${index}`, getMean(dataArr, props.dataKey)),
        ];
        acc.medianRow = [
          ...(acc.medianRow || []),
          generateRowCell(`median_${index}`, getMedian(dataArr, props.dataKey)),
        ];
        acc.modeRow = [
          ...(acc.modeRow || []),
          generateRowCell(`mode_${index}`, getMode(dataArr, props.dataKey)),
        ];
        return acc;
      },
      {
        meanRow: [generateRowCell(`mean_-1`, `${props.dataKey} Mean`)],
        medianRow: [generateRowCell(`median_-1`, `${props.dataKey} Median`)],
        modeRow: [generateRowCell(`mode_-1`, `${props.dataKey} Mode`)],
      }
    );
  }, [props.data, props.classKey, props.dataKey, getHeaders]);
  return (
    <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {renderHeaders}
          </tr>
        </thead>
        <tbody>
          <tr>{meanRow}</tr>
          <tr>{medianRow}</tr>
          <tr>{modeRow}</tr>
        </tbody>
      </table>
    </div>
  );
}
