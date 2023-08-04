export function getMean(data, key = null) {
  if (!key) {
    throw new Error("object as data needs key");
  }
  const res = data.reduce((acc, curr) => parseInt(acc + curr[key]), 0);
  return (res / data.length).toFixed(3);
}

export function getMedian(data, key = null) {
  if (!key) {
    throw new Error("object as data needs key");
  }
  let dataArray = data.map((item) => +item[key]).sort((a, b) => a - b);
  const isEven = dataArray.length / 2 == 0;
  const res = !isEven
    ? (((dataArray[Math.floor((dataArray.length / 2) - 1)]) +
        dataArray[Math.floor(dataArray.length / 2)])) /
      2
    : (dataArray[Math.floor(dataArray.length / 2)]) / 2;
  return res.toFixed(3);
}

export function getMode(data, key = null) {
  if (!key) {
    throw new Error("object as data needs key");
  }
  let max = 0;
  let mode = 0;
  let dataArray = data.map((item) => +item[key]);
  const tmp = dataArray.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  for (let tmpKey in tmp) {
    if (max < tmp[tmpKey]) {
      max = tmp[tmpKey];
      mode = +tmpKey;
    }
  }
  return mode.toFixed(3);
}
