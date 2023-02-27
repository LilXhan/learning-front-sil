const formCreate = document.querySelector('#formCreate')


formCreate.addEventListener('submit', (e) => {
  e.preventDefault()
  const data = new FormData(e.target)
  createTask({
    title: data.get('title'),
    body: data.get('body')
  })
})

const createTask = async (obj) => {
  const options = {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3NTQ3MzczLCJpYXQiOjE2Nzc0NjA5NzMsImp0aSI6IjU4MDZjNDA4ZDE4MjRkMWZhYTI1YTk0ZmFlNzQ3NTRkIiwidXNlcl9pZCI6MX0.RjYEQk0DS3ZmL8M59U2Q8y_eTLRHJ6Sl7G3to9Q4PNc',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj)
  }
  const response = await fetch('http://localhost:8000/api/v1/todo/', options)
  const data = await response.json()

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  if (data.ok === true) {
    Toast.fire({
      icon: 'success',
      title: data.message
    }) 
  } else {
    Toast.fire({
      icon: 'error',
      title: data.message
    })  
  }
}