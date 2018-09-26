export default class Helper {
  convertToTwoDecimal = number => {
    let twoDecimals = parseFloat(Math.round(number * 100) / 100).toFixed(2);

    return twoDecimals;
  };
}
