export const validateEmail = (email: any) => {
    const emailRegex =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailRegex.test(email);
  };

export type PasswordStrength = 'Short' | 'Weak' | 'Good' | '';

export interface PasswordStrengths {
  strength: PasswordStrength;
}

export const checkPasswordStrength = (password = ''): PasswordStrengths => {
  const goodPassword = new RegExp(
    '((?=.*[a-z])|(?=.*[A-Z]))(?=.*[0-9])(?=.{8,})(?=.*[!@#$%^&*()?])',
  );
  const weakPassword = new RegExp('(?=.{8,})');

  if (goodPassword.test(password)) {
    return {
      strength: 'Good',
    };
  } else if (weakPassword.test(password)) {
    return {
      strength: 'Weak',
    };
  } else if (password === '') {
    return {
      strength: '',
    };
  } else {
    return {
      strength: 'Short',
    };
  }
};