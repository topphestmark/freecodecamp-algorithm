const valueDict = {
  PENNY: 1,
  NICKEL: 5,
  DIME: 10,
  QUARTER: 25,
  ONE: 100,
  FIVE: 500,
  TEN: 1000,
  TWENTY: 2000,
  "ONE HUNDRED": 10000,
};

const subtractFromCid = (remainingPayment, cidObj, changeReturn, currency) => {
  if (remainingPayment >= valueDict[currency] && cidObj[currency]) {
    if (remainingPayment >= cidObj[currency]) {
      let amtToSubtract = cidObj[currency];
      remainingPayment -= amtToSubtract;
      changeReturn.push([currency, amtToSubtract / 100]);
      amtToSubtract = 0;
    } else {
      let amtToSubtract =
        Math.floor(remainingPayment / valueDict[currency]) *
        valueDict[currency];
      remainingPayment -= amtToSubtract;
      changeReturn.push([currency, amtToSubtract / 100]);
      cidObj[currency] -= amtToSubtract;
    }
  }

  return [remainingPayment, cidObj, changeReturn];
};

const checkCashRegister = (price, cash, cid) => {
  let remainingPayment = Math.round((cash - price) * 100);

  let cidObj = cid.reduce((acc, [currency, amount]) => {
    return {
      ...acc,
      [currency]: Math.round(100 * amount),
    };
  }, {});

  let changeReturn = [];

  [remainingPayment, cidObj, changeReturn] = subtractFromCid(
    remainingPayment,
    cidObj,
    changeReturn,
    "ONE HUNDRED"
  );
  [remainingPayment, cidObj, changeReturn] = subtractFromCid(
    remainingPayment,
    cidObj,
    changeReturn,
    "TWENTY"
  );
  [remainingPayment, cidObj, changeReturn] = subtractFromCid(
    remainingPayment,
    cidObj,
    changeReturn,
    "TEN"
  );
  [remainingPayment, cidObj, changeReturn] = subtractFromCid(
    remainingPayment,
    cidObj,
    changeReturn,
    "FIVE"
  );
  [remainingPayment, cidObj, changeReturn] = subtractFromCid(
    remainingPayment,
    cidObj,
    changeReturn,
    "ONE"
  );
  [remainingPayment, cidObj, changeReturn] = subtractFromCid(
    remainingPayment,
    cidObj,
    changeReturn,
    "QUARTER"
  );
  [remainingPayment, cidObj, changeReturn] = subtractFromCid(
    remainingPayment,
    cidObj,
    changeReturn,
    "DIME"
  );
  [remainingPayment, cidObj, changeReturn] = subtractFromCid(
    remainingPayment,
    cidObj,
    changeReturn,
    "NICKEL"
  );
  [remainingPayment, cidObj, changeReturn] = subtractFromCid(
    remainingPayment,
    cidObj,
    changeReturn,
    "PENNY"
  );

  if (remainingPayment > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  const remainingInCid = Object.values(cidObj).reduce(
    (acc, amt) => acc + amt,
    0
  );

  if (remainingInCid > 0) {
    return { status: "OPEN", change: changeReturn };
  }

  return { status: "CLOSED", change: cid };
};

// checkCashRegister(19.5, 20, [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100],
// ]);

// checkCashRegister(19.5, 20, [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100],
// ]);
// // {status: "OPEN", change: [["QUARTER", 0.5]]}.

checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
// // {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

// checkCashRegister(19.5, 20, [
//   ["PENNY", 0.01],
//   ["NICKEL", 0],
//   ["DIME", 0],
//   ["QUARTER", 0],
//   ["ONE", 0],
//   ["FIVE", 0],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 0],
// ]);
// // {status: "INSUFFICIENT_FUNDS", change: []}.

// checkCashRegister(19.5, 20, [
//   ["PENNY", 0.01],
//   ["NICKEL", 0],
//   ["DIME", 0],
//   ["QUARTER", 0],
//   ["ONE", 1],
//   ["FIVE", 0],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 0],
// ]);
// // {status: "INSUFFICIENT_FUNDS", change: []}.

// checkCashRegister(19.5, 20, [
//   ["PENNY", 0.5],
//   ["NICKEL", 0],
//   ["DIME", 0],
//   ["QUARTER", 0],
//   ["ONE", 0],
//   ["FIVE", 0],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 0],
// ]);

// {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
