const config = require("../config");
const verificationEmailTemplate = (username, url) => {
  return `
  <div style="padding: 5px; font-family: Arial, Helvetica, sans-serif;  border-radius:5px">
    <div>
      <h2 style="font-weight: 900">Verify your email</h2>
      <div style="color: #08121d">
        <p>Dear <b>${username}</b>,</p>
        <p>
          Use the link below to verify your email and start enjoying
					<span style="font-weight: 900">${config.APP_NAME}</span>
					.
        </p>
        <p>Thank you very much !</p>
        <a href="${url}" style="display: flex; justify-content: center; align-items: center; color:white; text-decoration:none; padding:5px 10px; width: 120px; height:25px; background:#1338BE; border-radius:8px; cursor:pointer; font-weight: 600; letter-spacing: 2px" >
          Verify
        </a>
        <p>This verification link will expire in 10 minutes.</p>
        <p>
          Question ? Email us at <span style="color: #1338BE">${config.SMTP_MAIL}</span>
        </p>
      </div>
    </div>
  </div>
`;
};

const resetPasswordEmailTemplate = (username, url) => {
  return `
  <div style="padding: 5px; font-family: Arial, Helvetica, sans-serif;  border-radius:5px">
    <div>
      <h2 style="font-weight: 900">Reset password</h2>
      <div style="color: #08121d">
        <p>Dear <b>${username}</b>,</p>
        <p>
          Use the link below to reset your password and start enjoying Carrer connect.
        </p>
        <p>Thank you very much !</p>
        <a href="${url}" style="display: flex; justify-content: center; align-items: center; color:white; text-decoration:none; padding:5px 10px; width: 160px; height:25px; background:#1338BE; border-radius:8px; cursor:pointer; font-weight: 600; letter-spacing: 2px" >
          Reset password
        </a>
        <p>This reset password link will expire in 10 minutes.</p>
        <p>
          Question ? Email us at <span style="color: #1338BE">feedback@socialite.com</span>
        </p>
      </div>
    </div>
  </div>
`;
};

const forgotPassWordEmailTemplate = (username, url) => {
  return `
  <div style="padding: 5px; font-family: Arial, Helvetica, sans-serif;  border-radius:5px">
    <div>
      <h2 style="font-weight: 900">Verify your email</h2>
      <div style="color: #08121d">
        <p>Dear <b>${username}</b>,</p>
        <p>
          Use the link below to verify your email and start enjoying
					<span style="font-weight: 900">${config.APP_NAME}</span>
					.
        </p>
        <p>Thank you very much !</p>
        <a href="${url}" style="display: flex; justify-content: center; align-items: center; color:white; text-decoration:none; padding:5px 10px; width: 120px; height:25px; background:#1338BE; border-radius:8px; cursor:pointer; font-weight: 600; letter-spacing: 2px" >
          Verify
        </a>
        <p>This verification link will expire in 10 minutes.</p>
        <p>
          Question ? Email us at <span style="color: #1338BE">${config.SMTP_MAIL}</span>
        </p>
      </div>
    </div>
  </div>
`;
};

const testMailTemplate = `
  <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
    <h2 style="color: #333;">Dear Thanh MO 11,</h2>
    <div style="margin-top: 20px;">
      <p style="color: #333;">We hope this email finds you well.</p>
      <p style="color: #333;">
        You are cordially invited to attend a meeting at our office. Details of
        the meeting are as follows:
      </p>
      <ul style="list-style-type: none; padding: 0;">
        <li style="color: #333;">
          <strong>Meeting Title:</strong> Thanh conference
        </li>
        <li style="color: #333;">
          <strong>Date:</strong> 2024/06/12
        </li>
        <li style="color: #333;">
          <strong>Time:</strong> 02:00
        </li>
        <li style="color: #333;">
          <strong>Location:</strong> CONFERENCE_ROOM
        </li>
      </ul>
      <p style="color: #333;">
        Your presence and input are highly valued. We look forward to your
        participation in the discussion and collaboration towards our shared
        goals.
      </p>
      <p style="color: #333;">
        If you have any questions or concerns regarding the meeting, please do
        not hesitate to contact me.
      </p>
      <p style="color: #333;">
        Thank you for your attention, and we anticipate a productive session.
      </p>
    </div>
    <div style="margin-top: 20px;">
      <p style="color: #333;">Best regards,</p>
      <p style="color: #3598db;">Thanh MO 4</p>
    </div>
  </div>
`;

module.exports = { verificationEmailTemplate, testMailTemplate, resetPasswordEmailTemplate };
