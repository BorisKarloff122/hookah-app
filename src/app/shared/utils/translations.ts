export const translations = {
  logInButtonText: 'Log in',
  loginFormHeader: 'Hookah mixer app',
  loginSubHeader: 'Login to begin',

}

export const errMessagesFormat = (string: string, formatValue: string | number) =>{
 return string.replace(/{{.*}}/, formatValue.toString())
}
export const errMessages = {
  loginLengthErr: 'Login cannot be shorter that {{}} chars',
  loginEmpty: 'Login field cannot be empty',
  passwordEmpty: 'Password field cannot be empty'
}
