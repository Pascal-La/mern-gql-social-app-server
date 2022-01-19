module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "Le nom ne doit pas être vide";
  }
  if (email.trim() === "") {
    errors.email = "L'email ne doit pas être vide";
  } else {
    const regEx =
      /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-.\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = "L'email n'est pas valide";
    }
  }
  if (password === "") {
    errors.password = "Le mot de passe ne doit pas être vide";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Les mots de passe sont différents";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validateLoginInput = (username, password) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "Le nom ne doit pas être vide";
  }
  if (password.trim() === "") {
    errors.password = "Le mot de passe ne doit pas être vide";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
