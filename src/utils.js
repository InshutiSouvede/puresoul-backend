import nodeMailer from "nodemailer"
const user = process.env.NODEMAIL_EMAIL
const pass = process.env.NODEMAIL_PASSWORD
export const sendEmail = async (
    emailTo,
    data
  ) => {
    let message = ""
    if ("name" in data && "password" in data) {
      message = generateNewExpertMessage(data.name, emailTo, data.password)
    }
  
    const transporter = nodeMailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass,
      },
    })
    await transporter.sendMail({
      from: `PureSoul <w.souvede@gmail.com>`,
      to: emailTo,
      subject: "Welcome to PureSoul",
      html: message,
    })
  }
  
export const generateNewExpertMessage = (
    name,
    email,
    password,
  ) => {
    const html = `<html>
        <head>
            <meta charset="UTF-8">
        </head>
        <body>
            <div style="font-family: Arial, sans-serif; margin: 20px;">
                <h1>Hello ${name},</h1>
                <p>Welcome to PureSoul! We are thrilled to have you on board.</p>
                <p>As a new expert, you can now start managing your clients and providing them with the best fitness experience.</p>
                <p>Here are your login details:</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Password:</strong> ${password}</p>
                <p>We recommend changing your password after your first login.</p>
                <p>If you have any questions or need assistance, feel free to reach out to us.</p>
                <p>Best regards,<br>The PureSoul Team</p>
                <p>Note: This is an automated message, please do not reply.</p>
                </h3>
                <p>Sincerely,<br> PureSoul</p>
            </div>
        </body>
        </html>
        `
    return html
  }