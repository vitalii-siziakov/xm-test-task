export const getFullNameValidationResult = (fullName) => {
  const messagesList = [];

  if (fullName.trim().length > 0) {
    if (!/^[0-9a-zA-Z\s\\]+$/.test(fullName)) {
      messagesList.push({ text: 'Please Enter Valid Name', isValid: false });
    }
  } else {
    messagesList.push({ text: 'Please Enter Valid Name', isValid: false });
  }

  const findInvalidElement = (element) => element.isValid === false;
  const isValid = messagesList.findIndex(findInvalidElement) === -1 ? true : false;

  const validationResult = { isValid, messagesList };
  return validationResult;
};
