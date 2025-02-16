class PagesController < ApplicationController
  def landing
    render plain: "Landing Page"
  end

  def estimate
    if request.post?
      Rails.logger.info "Estimate form submitted with params: #{params.inspect}"
      EstimateMailer.estimate_email(params[:name], params[:email], params[:message]).deliver_now
      flash[:notice] = "Your estimate request has been sent!"
      redirect_to estimate_path
    else
      Rails.logger.info "Estimate form GET request"
    end
  end

  def contact
    if request.post?
      Rails.logger.info "Contact form submitted with params: #{params.inspect}"
      EstimateMailer.contact_email(params[:name], params[:email], params[:message]).deliver_now
      flash[:notice] = "Your message has been sent!"
      redirect_to contact_path
    else
      Rails.logger.info "Contact form GET request"
    end
  end

  def about
  end
end
