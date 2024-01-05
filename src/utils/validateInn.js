function validateInn(inn, error) {
  if (typeof inn !== "string") {
    inn = String(inn);
  }

  if (!inn.length) {
    error.code = 1;
    error.message = "ИНН пуст";
    return false;
  }

  if (!/^\d+$/.test(inn)) {
    error.code = 2;
    error.message = "ИНН может состоять только из цифр";
    return false;
  }

  if (![10, 12].includes(inn.length)) {
    error.code = 3;
    error.message = "ИНН может состоять только из 10 или 12 цифр";
    return false;
  }

  const checkDigit = (inn, coefficients) => {
    let n = 0;
    for (let i = 0; i < coefficients.length; i++) {
      n += coefficients[i] * parseInt(inn[i]);
    }
    return parseInt((n % 11) % 10);
  };

  switch (inn.length) {
    case 10:
      const n10 = checkDigit(inn, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
      if (n10 === parseInt(inn[9])) {
        return true;
      }
      break;
    case 12:
      const n11 = checkDigit(inn, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
      const n12 = checkDigit(inn, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
      if (n11 === parseInt(inn[10]) && n12 === parseInt(inn[11])) {
        return true;
      }
      break;
  }

  error.code = 4;
  error.message = "Неправильное контрольное число";
  return false;
}

export default validateInn;
