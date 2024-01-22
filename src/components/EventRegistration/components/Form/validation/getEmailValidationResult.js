export const getEmailValidationResult = (email) => {
  const messagesList = [];

  if (email.trim().length > 0) {
    if (!/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(email)) {
      messagesList.push({ text: 'Please Enter Valid Email', isValid: false });
    }
  } else {
    messagesList.push({ text: 'Please Enter Valid Email', isValid: false });
  }

  const findInvalidElement = (element) => element.isValid === false;
  const isValid = messagesList.findIndex(findInvalidElement) === -1 ? true : false;

  const validationResult = { isValid, messagesList };
  return validationResult;
};
