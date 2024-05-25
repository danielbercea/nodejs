function isNumber(number) {
  if (!isNaN(Number(number))) {
    return true;
  }

  return false;
}

module.exports = {
  isNumber,
};
