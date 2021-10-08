export const minMaxLength = (text, minLength, maxLength) => {
  let result = !text || text.length < minLength;
  if (maxLength) result = result || text.length < minLength;
  return result;
};
export const validEmail = (email) => {
  const regex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

  return !regex.test(email);
};

let registeredUsers = ["ravi@kiran.com", "mail@myblog.in", "contact@lucky.com"];

export const userExists = (email) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (registeredUsers.findIndex((u) => u === email) !== -1) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};
