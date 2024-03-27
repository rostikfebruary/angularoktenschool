const baseURL ='https://jsonplaceholder.typicode.com'

const users = `${baseURL}/users`

const posts = `${baseURL}/posts`

const urls = {
  users:{
    base:users
  },
  posts:{
    base: posts
  }
}

export{
  urls
}
