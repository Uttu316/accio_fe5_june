function getUserData(onSuccess, onFailure) {
  console.log("Fetching User Data...");
  let name = prompt("Enter your name");
  setTimeout(() => {
    if (name === "lokesh") {
      onSuccess({
        name: "Lokesh Baviskar",
        id: "2112134",
        age: 21
      });
    } else {
      onFailure("User not Found");
    }
  }, 3000);
}

function getPosts(userID, onSuccess, onFailure) {
  console.log("Fetching Posts for", userID);

  setTimeout(() => {
    if (userID) {
      let posts = [
        {
          caption: "Good Morning",
          postId: "2121"
        },
        {
          caption: "Sunny Day",
          postId: "32321"
        }
      ];

      onSuccess(posts);
    } else {
      onFailure("Post not available");
    }
  }, 2000);
}

function getComments(postId, onSuccess, onFailure) {
  console.log("Fetching comments for", postId);

  setTimeout(() => {
    if (postId) {
      const comments = [
        { comment: "Hello", commnetID: "3272" },
        { comment: "Hola!", commnetID: "35342" }
      ];

      onSuccess(comments);
    } else {
      onFailure("Comments not Available");
    }
  }, 2000);
}

getUserData(
  (userData) => {
    console.log("User Data Fetched");
    const { name, id, age } = userData;
    getPosts(
      id,
      (posts) => {
        console.log("Posts Fetched", posts);

        for (let i = 0; i < posts.length; i++) {
          const { postId, caption } = posts[i];
          getComments(
            postId,
            (comments) => {
              console.log("Fetched Comments for", caption, comments);
            },
            (error) => {
              console.log(error);
            }
          );
        }
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
