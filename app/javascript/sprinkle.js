import "@hotwired/turbo-rails"
import "controllers"

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    })
  })
})

// Contact Form Validation with Real-Time Feedback
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#estimate-form')
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault()
      console.log("Form submitted")

      let isValid = true
      form.querySelectorAll('input, textarea').forEach((input) => {
        if (!input.value) {
          input.classList.add('is-invalid')
          isValid = false
        } else {
          input.classList.remove('is-invalid')
        }
      })

      if (isValid) {
        console.log("Form is valid")
        // Send form data to email
        const formData = new FormData(form)
        try {
          const response = await fetch('/estimate', {
            method: 'POST',
            body: formData
          })

          if (response.ok) {
            alert('Your estimate request has been sent!')
            form.reset()
          } else {
            alert('There was an error sending your request. Please try again.')
          }
        } catch (error) {
          console.error("Error submitting form:", error)
          alert('There was an error sending your request. Please try again.')
        }
      } else {
        console.log("Form is invalid")
      }
    })

    form.querySelectorAll('input, textarea').forEach((input) => {
      input.addEventListener('input', () => {
        if (input.value) {
          input.classList.remove('is-invalid')
          input.classList.add('is-valid')
        } else {
          input.classList.remove('is-valid')
          input.classList.add('is-invalid')
        }
      })
    })
  }
})
