Rails.application.routes.draw do
  root "pages#Landing"

  get "pages/Landing", to: "pages#Landing", as: "pages_Landing"
  get "pages/about", to: "pages#about", as: "pages_about"
  get "pages/contact", to: "pages#contact", as: "pages_contact"
  get "pages/estimate", to: "pages#estimate", as: "pages_estimate"

  post "estimate", to: "pages#estimate"
  post "contact", to: "pages#contact"

  get "estimate", to: "pages#estimate"
  get "contact", to: "pages#contact"
  get "about", to: "pages#about"
end
