const url = 'http://localhost:8000/api/v1/todo/'

async function getTask(url) {
  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3NTU0NjM1LCJpYXQiOjE2Nzc0NjgyMzUsImp0aSI6ImMyNDdiYzI2MWRhYzRjMmJhYWZlMTZhYTczODA1NGMzIiwidXNlcl9pZCI6MX0.YQn2mSA7EBhbl5bzLqnMKMo72wb46gAddSATY6PXRKs'
      }
    });
    const data = await response.json()
    data.data.forEach(task => {
      renderTask(task)
    })
  } catch(error) {
    console.log(error)
  }
}

const row = document.querySelector('.row')

function renderTask(data) {
  dayjs.extend(dayjs_plugin_relativeTime);
  row.innerHTML += 
  `
  <div class="card col-md-4">
    <div class="card-body">
      <h2 class="card-title text-center">${data.body}</h2>
      <p class="card-text">${data.title}</p>
      <p class="card-text">${dayjs(data.created_at).fromNow()}</p>
      <p class="card-text">${data.status}</p>
      <a href="./detail.html?id=${data.id}" class="btn btn-primary">Detail</a>
    </div>
  </div>
  `
}

getTask(url)