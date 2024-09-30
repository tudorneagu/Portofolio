function phoneNumberFormat(phoneNumber: string) {
  return `+33 ${phoneNumber.slice(0, 1)} ${phoneNumber.slice(
    1,
    3
  )} ${phoneNumber.slice(3, 5)} ${phoneNumber.slice(5, 7)} ${phoneNumber.slice(
    7,
    9
  )}`;
}

export default phoneNumberFormat;
