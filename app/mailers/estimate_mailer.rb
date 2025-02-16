class EstimateMailer < ApplicationMailer
  default from: "no-reply@ieroofing.com"

  def estimate_email(name, email, message)
    @name = name
    @message = message
    @user_email = email  # Assign the email to an instance variable

    # If you want to send the email from the user's email, you can use:
    mail(from: email, to: "Calebhernandez55@gmail.com", subject: "New Estimate Request")

    # mail(to: "Calebhernandez55@gmail.com", subject: "New Estimate Request")
  end
end
