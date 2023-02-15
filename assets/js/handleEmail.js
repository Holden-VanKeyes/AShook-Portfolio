const form = document.getElementById('email-form')
form.addEventListener('submit', handleEmail)

function handleEmail(e) {
  e.preventDefault()
  window.location.href = `mailto:nostalgicadmin@gmail.com?subject=${e.target.subject.value}&body=${e.target.message.value}`
}
