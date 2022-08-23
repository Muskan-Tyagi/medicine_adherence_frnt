import Types from '../allTypes';

function sendEmail(email) {
  return {
    type: Types.SEND_EMAIL,
    payload: email,
  };
}
function sendEmailSuccess(data) {
  return {
    type: Types.SUCCESS_SEND_EMAIL,
    payload: data,
  };
}
function sendEmailFailed(error) {
  return {
    type: Types.FAILED_SEND_EMAIL,
    payload: error,
  };
}

export const emailCaretakerActions = {
  sendEmail,
  sendEmailSuccess,
  sendEmailFailed,
};
