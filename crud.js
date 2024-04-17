// CRUD Operations

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Function to fetch all posts
async function getAllPosts() {
    try {
        const response = await fetch(`${BASE_URL}/posts`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching posts:', error.message);
        return null;
    }
}

// Function to create a new post
async function createPost(postData) {
    try {
        const response = await fetch(`${BASE_URL}/posts`, {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating post:', error.message);
        return null;
    }
}

// Function to update a post by ID
async function updatePost(postId, postData) {
    try {
        const response = await fetch(`${BASE_URL}/posts/${postId}`, {
            method: 'PUT',
            body: JSON.stringify(postData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error updating post ${postId}:`, error.message);
        return null;
    }
}

// Function to delete a post by ID
async function deletePost(postId) {
    try {
        const response = await fetch(`${BASE_URL}/posts/${postId}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error deleting post ${postId}:`, error.message);
        return null;
    }
}

// Function to display results in the result container
function displayResults(data) {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}

// Add event listeners to the buttons
document.getElementById('fetchPostsBtn').addEventListener('click', async () => {
    const posts = await getAllPosts();
    displayResults(posts);
});

document.getElementById('createPostBtn').addEventListener('click', async () => {
    const newPostData = {
        userId: 1,
        title: 'New Post',
        body: 'This is a new post created via API.'
    };
    const newPost = await createPost(newPostData);
    displayResults(newPost);
});

document.getElementById('updatePostBtn').addEventListener('click', async () => {
    const postIdToUpdate = 1; // Replace with the ID of the post you want to update
    const updatedPostData = {
        title: 'Updated Post',
        body: 'This post has been updated via API.'
    };
    const updatedPost = await updatePost(postIdToUpdate, updatedPostData);
    displayResults(updatedPost);
});

document.getElementById('deletePostBtn').addEventListener('click', async () => {
    const postIdToDelete = 1; // Replace with the ID of the post you want to delete
    const deletedPost = await deletePost(postIdToDelete);
    displayResults(deletedPost);
});
