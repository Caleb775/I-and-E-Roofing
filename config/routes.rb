Rails.application.routes.draw do
  root "pages#Landing"
  post "estimate", to: "pages#estimate"
  post "contact", to: "pages#contact"

  get "estimate", to: "pages#estimate"
  get "contact", to: "pages#contact"
  get "about", to: "pages#about"
end
