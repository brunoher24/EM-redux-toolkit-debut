// A mock function to mimic making an async request for data
export function fetchPosts() {
  return new Promise((resolve) => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
    .then(res => res.json())
    .then(posts => {
      resolve({ data: posts });
    })
  });
}
