    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
      
      // Function to fetch all posts
      function fetchPosts() {
        fetch(apiUrl)
          .then((response) => response.json())
          .then((posts) => console.log(posts))
          .catch((error) => console.error(error));
      }
      
      // Function to fetch a single post
      function fetchPost() {
        const postId = document.getElementById('postIdInput').value;
        fetch(`${apiUrl}/${postId}`)
          .then((response) => response.json())
          .then((post) => console.log(post))
          .catch((error) => console.error(error));
      }
      
      // Function to create a new post
      function createPost() {
        const title = document.getElementById('titleInput').value;
        const body = document.getElementById('bodyInput').value;
        const userId = document.getElementById('userIdInput').value;
        fetch(apiUrl, {
          method: 'POST',
          body: JSON.stringify({
            title: title,
            body: body,
            userId: userId
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then((response) => response.json())
          .then((newPost) => console.log(newPost))
          .catch((error) => console.error(error));
      }


    function updatePost() {
          const postId = document.getElementById('updatePostIdInput').value;
          const title = document.getElementById('updateTitleInput').value;
          const body = document.getElementById('updateBodyInput').value;
  fetch(`${apiUrl}/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title: title,
      body: body
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
}


function deletePost() {
  const postId = document.getElementById('updatePostIdInput').value;
  const title = document.getElementById('updateTitleInput').value;
  const body = document.getElementById('updateBodyInput').value;
  fetch(`${apiUrl}/${postId}`, {
    method: 'DELETE'
  })
  .then(response => {
    if (response.status === 200) {
      console.log(`Post ${postId} deleted successfully`);
    } else {
      console.error(`Error deleting post ${postId}`);
    }
  })
  .catch(error => console.error(error));
}