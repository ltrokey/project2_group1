module.exports = {
  format_date: (date) => {
    if (date instanceof Date && !isNaN(date)) {
      return date.toLocaleDateString();
    } else {
      return "Invalid Date";
    }
  },
};
