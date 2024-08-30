const otpTemplate = (otp) => {
	return `<!DOCTYPE html>
	<html>
	
	<head>
		<meta charset="UTF-8">
		<title>OTP Verification Email</title>
		<style>
			body {
				background-color: #ffffff;
				font-family: Arial, sans-serif;
				font-size: 16px;
				line-height: 1.4;
				color: #333333;
				margin: 0;
				padding: 0;
			}
	
			.container {
				max-width: 600px;
				margin: 0 auto;
				padding: 20px;
				text-align: center;
			}
	
			.logo {
				max-width: 200px;
				margin-bottom: 20px;
			}
	
			.message {
				font-size: 18px;
				font-weight: bold;
				margin-bottom: 20px;
			}
	
			.body {
				font-size: 16px;
				margin-bottom: 20px;
			}
	
			.cta {
				display: inline-block;
				padding: 10px 20px;
				background-color: #FFD60A;
				color: #000000;
				text-decoration: none;
				border-radius: 5px;
				font-size: 16px;
				font-weight: bold;
				margin-top: 20px;
			}
	
			.support {
				font-size: 14px;
				color: #999999;
				margin-top: 20px;
			}
	
			.highlight {
				font-weight: bold;
			}
		</style>
	
	</head>
	

 <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px;">
  <div class="container" style="max-width: 600px; background-color: #ffffff; margin: 0 auto; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
    <div style="text-align: center; margin-bottom: 20px;">
      // <a href="https://studynotion-edtech-project.vercel.app" style="text-decoration: none;">
      //   <img src="https://studynotion-edtech-project.vercel.app/logo.png" alt="StudyNotion" style="max-width: 200px; margin-bottom: 20px;">
      // </a>
      <h1 style="color: #333333; font-size: 24px;">OTP Verification Email</h1>
    </div>
    <div class="body" style="color: #333333;">
      <p>Dear User,</p>
      <p>Thank you for registering with EduConnect. To complete your registration, please use the following OTP (One-Time Password) to verify your account:</p>
      <h2 class="highlight" style="color: #1d72b8; font-size: 32px; text-align: center;">${otp}</h2>
      <p>This OTP is valid for 5 minutes. If you did not request this verification, please disregard this email. Once your account is verified, you will have access to our platform and its features.</p>
    </div>
    <div class="support" style="margin-top: 30px; text-align: center; color: #666666;">
      <p>If you have any questions or need assistance, please feel free to reach out to us at <a href="mailto:harsh273003@gmail.com" style="color: #1d72b8; text-decoration: none;">:harsh273003@gmail.com</a>. We are here to help!</p>
      <p style="font-size: 12px; color: #999999;">&copy; 2024 EduConnect. All rights reserved.</p>
    </div>
  </div>
</body>

	
	</html>`;
};
module.exports = otpTemplate;
