export const getPasswordValidationResult = (password, init = false) => {
  if (init === true) {
    const messagesList = [
      { text: '8 - 15 characters' },
      { text: '1 or more numbers' },
      { text: '1 or more lower case letters' },
      { text: '1 or more upper case letters' },
      { text: '1 or more special characters (#[]()@$&*!?|,.^/+_-)' },
    ];

    const validationResult = { messagesList };
    return validationResult;
  } else {
    const lengthMessage = { text: '8 - 15 characters' };
    lengthMessage.isValid = password.length >= 8 && password.length <= 15;

    const numberIncludesMessage = { text: '1 or more numbers' };
    numberIncludesMessage.isValid = /[0-9]/.test(password);

    const lowerCaseLettersIncludesMessage = { text: '1 or more lower case letters' };
    lowerCaseLettersIncludesMessage.isValid = /[a-z]/.test(password);

    const upperCaseLettersIncludesMessage = { text: '1 or more upper case letters' };
    upperCaseLettersIncludesMessage.isValid = /[A-Z]/.test(password);

    const specialCharactersIncludesMessage = { text: '1 or more special characters (#[]()@$&*!?|,.^/+_-)' };
    const specialCharters = '#[]()@$&*!?|,.^/+_-';
    const checkForCharactersIncludes = (string) => {
      for (let i = 0; i < specialCharters.length; i++) {
        if (string.indexOf(specialCharters[i]) > -1) {
          return true;
        }
      }
      return false;
    };
    specialCharactersIncludesMessage.isValid = checkForCharactersIncludes(password);

    const messagesList = [
      lengthMessage,
      numberIncludesMessage,
      lowerCaseLettersIncludesMessage,
      upperCaseLettersIncludesMessage,
      specialCharactersIncludesMessage,
    ];

    const findInvalidElement = (element) => element.isValid === false;
    const isValid = messagesList.findIndex(findInvalidElement) === -1 ? true : false;

    const validationResult = { isValid, messagesList };
    return validationResult;
  }
};
