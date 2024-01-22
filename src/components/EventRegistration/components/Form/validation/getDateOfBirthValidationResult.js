import dayjs from 'dayjs';

export const getDateOfBirthValidationResult = (dateOfBirthString) => {
  const messagesList = [];

  const currentDate = dayjs(new Date());
  const dateOfBirth = dayjs(new Date(dateOfBirthString));
  const differenceYears = currentDate.diff(dateOfBirth, 'year', true);

  if (differenceYears >= 18 && differenceYears <= 60) {
  } else if (differenceYears < 18) {
    messagesList.push({ text: 'Minimum age requirements, 18 years old', isValid: false });
  } else if (differenceYears > 60) {
    messagesList.push({ text: 'Maximum age requirements, 60 years old', isValid: false });
  }

  const findInvalidElement = (element) => element.isValid === false;
  const isValid = messagesList.findIndex(findInvalidElement) === -1 ? true : false;

  const validationResult = { isValid, messagesList };
  return validationResult;
};
