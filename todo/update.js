const formData = document.querySelector('.needs-validation')
const inputTitle = document.querySelector('#title')
const inputBody = document.querySelector('#body')

const id = new URLSearchParams(window.location.search).get('id')

const printData = async () => {
  const response = await fetch(`http://localhost:8000/api/v1/todo/${id}/`)
  const data = await response.json()
  console.log(data)
  inputTitle.setAttribute('value', data.data.title)
  inputBody.setAttribute('value', data.data.body) 
}

formData.addEventListener('submit', (e) => {
  e.preventDefault()
  const form = new FormData(e.target)
  update({
    title: form.get('title'),
    body: form.get('body')
  })
})

const update = async (obj) => {
  const options = {
    method: 'PUT',
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3NTU1ODM2LCJpYXQiOjE2Nzc0Njk0MzYsImp0aSI6ImY4ZjNjMGJhZTk0NzRjMDc5MzRkMWUwZjcxOGJkY2NjIiwidXNlcl9pZCI6MX0.gXlN0dUCI4eK3FHIFH3Olu9ojVH_MU63ZzulAotiltU',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  }
  const response = await fetch(`http://localhost:8000/api/v1/todo/${id}/`, options)
  const data = await response.json()
  console.log(data)
}

printData()