const btnDelete = document.querySelector('#btn-delete')

btnDelete.addEventListener('click', (e) => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      const id = new URLSearchParams(window.location.search).get('id')
      deletedTask(id)
      Swal.fire(
        'Deleted!',
        'Your todo has been deleted.',
        'success'
      )
    }
  })
  
})

const deletedTask = async (id) => {
  options = {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3NTQ3MzczLCJpYXQiOjE2Nzc0NjA5NzMsImp0aSI6IjU4MDZjNDA4ZDE4MjRkMWZhYTI1YTk0ZmFlNzQ3NTRkIiwidXNlcl9pZCI6MX0.RjYEQk0DS3ZmL8M59U2Q8y_eTLRHJ6Sl7G3to9Q4PNc'
    }
  }

  const response = await fetch(`http://localhost:8000/api/v1/todo/${id}/`, options)
  location.href = '/'
}