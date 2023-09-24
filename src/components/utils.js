import Payment from "payment";

function clearNumber(value = "") {
  return value.replace(/\D+/g, "");
}

export const formatCreditCardNumber = (value) => {
  if (!value) {
    return value;
  }

  const issuer = Payment.fns.cardType(value);
  const clearValue = clearNumber(value);
  let nextValue;

  switch (issuer) {
    case "amex":
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        10
      )} ${clearValue.slice(10, 15)}`;
      break;
    case "dinnersclub":
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        10
      )} ${clearValue.slice(10, 14)}`;
      break;
    default:
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        8
      )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 16)}`;
      break;
  }
  return nextValue.trim();
};

export const formatCVC = (cardNumber, value) => {
  const clearValue = clearNumber(value);
  let maxlength = 3;

  if (clearValue) {
    const issuer = Payment.fns.cardType(cardNumber);
    maxlength = issuer === "amex" ? 4 : 3;
  }

  return clearValue.slice(0, maxlength);
};

export const formatExpirationDate = (value) => {
  const clearValue = clearNumber(value);
  const currentYear = String(new Date().getFullYear()).slice(2, 4);
  const month =
    clearValue.slice(0, 2) > 12 || clearValue.slice(0, 2) <= 0
      ? 12
      : clearValue.slice(0, 2);
  const year = clearValue.slice(2, 4);
  const formatYear =
    year > currentYear + 10 || year < currentYear ? currentYear : year;
  console.log(typeof currentYear);
  if (clearValue.length >= 3) {
    return `${month}/${formatYear}`;
  }

  return clearValue;
};

export const formatFormData = (data) => {
  return Object.keys(data).map((d) => `${d}: ${data[d]}`);
};
