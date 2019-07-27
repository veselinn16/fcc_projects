function checkCashRegister(price, cash, cid) {
  const change = {
    status: null,
    change: []
  };

  const denominations = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100
  };

  // object with denominations of money and amount of bills in the register
  let moneyInRegister = {};

  for (let denomi of cid) {
    // put money in register
    moneyInRegister[denomi[0]] = denomi[1];
  }

  // 1) CALCULATE CHANGE TO RETURN
  let difference = cash - price;

  // 2) GET CHANGE FROM CASH REGISTER
  while (difference !== 0) {
    // console.log(`Change left is ${difference}`);
    let remainder = [];

    let denominationName = null;
    let cash = null;
    let totalCashArr = [];
    for (let denom in moneyInRegister) {
      // pushes the remainder after dividing the change with every denomination of money available if it is above or equal to 1
      totalCashArr.push(moneyInRegister[denom]);
      if (difference / denominations[denom] >= 1) {
        remainder.push(difference / denominations[denom]);
        denominationName = denom;
        cash = denominations[denom];
      }
    }
    let totalCash = totalCashArr.reduce((prev, cur) => cur + prev);
    if (totalCash < difference) {
      // There are not enoguh funds in the cash register to return to client
      change.status = "INSUFFICIENT_FUNDS";
      break;
    }
    // console.log(`Denomination name is ${denominationName}`);
    // console.log(`Denomination is ${cash}`);

    // amount of bills needed of denomination. Not necessarily as much as there are in the register!!!
    let billsNeeded = Math.floor(difference / cash);
    // console.log(`Bills needed from denomination are ${billsNeeded}`);

    for (let div of cid) {
      // can make an array of denomination + num of bills and reduce it to final sum
      if (div.includes(denominationName)) {
        // amount of bills of this denomination in the cash register. May be different from billsNeeded variable!!!
        let numOfBills = div[1] / cash;
        // console.log(
        // `Units of denomination present in the register are ${numOfBills}`
        // );

        // variable to determine how much money to get from cash division
        let moneyToRemove = null;

        if (numOfBills > billsNeeded) {
          // remove the appropriate amount of money if the bills needed are less than bills in cash register
          moneyToRemove = [div[0], billsNeeded * cash];
          change.status = "OPEN";
        } else {
          // remove all bills from this denomination in cash register
          moneyToRemove = div;
          change.status = "CLOSED";
          // console.log(
          // `The cash to be removed from register is --> ${moneyToRemove}`
          // );
        }

        // Remove used denomination from cash register and put it in the change object
        cid.splice(cid.indexOf(div), 1);
        delete denominations[denominationName];
        change.change.push(moneyToRemove);

        // Subtract from change to return
        difference = difference - moneyToRemove[1];
        // console.log(`Cash remaining after change is returned is ${difference}`);
      }
    }

    // subtract the sum from the change to return to client
    difference = Math.round(+difference * 100) / 100;
    if (cash === 0.01 && difference > 0) {
      // No sufficient funds available in the cash register
      change.status = "INSUFFICIENT_FUNDS";
      change.change = [];
      break;
    }

    if (change.status === "CLOSED" && difference === 0) {
      // This condition occurs when there is exactly enough money to return to client and no more left in the cash register
      change.change.reverse();
      for (let denom of cid) {
        // Put all the remaining denominations in the returned object's change array
        change.change.push(denom);
      }
    }
  }

  // 3) RETURN CHANGE
  return change;
}

checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
]);
