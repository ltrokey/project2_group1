module.exports = {
  format_date: (date) => {
    if (date instanceof Date && !isNaN(date)) {
      return date.toLocaleDateString();
    } else {
      return "Invalid Date";
    }
  },
  // Compare Funds vs Price
  compareValues: (value1, operator, value2) => {
    // Convert values to numbers
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);

    switch (operator) {
      case "<":
        return num1 < num2;
      case ">":
        return num1 > num2;
      case "==":
        return num1 === num2;
      default:
        return false;
    }
  },
  // Calculate difference for funds needed
  calcDifference: (value1, value2) => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);

    return Math.abs(num1 - num2).toFixed(2);
  },
};
