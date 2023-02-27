
const titleTag = document.querySelector('#title');
const bodyTag = document.querySelector('#desc');
const createdAtTag = document.querySelector('#created');
const statusTag = document.querySelector('#status');
const update = document.querySelector('#update')

const getTaskDetail = async () => {
  dayjs.extend(dayjs_plugin_relativeTime);
  const id = new URLSearchParams(window.location.search).get('id');
  const options = {
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3NTA3NjMzLCJpYXQiOjE2Nzc0MjEyMzMsImp0aSI6IjdhY2QxMDQ0ODVhYTQ5MGVhOGI5M2NkNGY2ODQyMGU3IiwidXNlcl9pZCI6MX0.QXHrCt2G_WnBLl72qvGp4LjDVus0DOaCoSSKN1BwAdk'
    }
  };
  const response = await fetch(`http://localhost:8000/api/v1/todo/${id}/`, options);
  const data = await response.json();
  const {title, body, created_at: created, status, id: idTask} = data.data;
  titleTag.textContent = title;
  body.textContent = bodyTag;
  createdAtTag.textContent = dayjs(created).fromNow(); 
  statusTag.textContent = status;
  update.setAttribute('href', `./update.html?id=${idTask}`)
}

getTaskDetail()