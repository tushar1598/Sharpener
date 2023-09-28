const user = {
    id: 1,
    name: 'John',
    lastActivityTime: null
};

const posts = [];

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 1000);
    });
}

function updateLastUserActivityTime(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const currentTime = new Date();
            user.lastActivityTime = currentTime;
            resolve(currentTime);
        }, 1000);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject(new Error("No post to delete"));
            }
        }, 1000);
    });
}

Promise.all([createPost({ title: 'Post 1' }), updateLastUserActivityTime(user.id)])
    .then(([_, lastActivityTime]) => {
        console.log('Posts:', posts);
        console.log('Last Activity Time:', lastActivityTime);
        return deletePost();
    })
    .then(deletedPost => {
        console.log('Deleted Post:', deletedPost);
        console.log('Remaining Posts:', posts);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });