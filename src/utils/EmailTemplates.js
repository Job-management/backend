const config = require("../config")
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
`
}

module.exports = { verificationEmailTemplate }