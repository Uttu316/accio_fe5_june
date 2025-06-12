const getUserData = () => {
  console.log("Fetching user data...");
  return new Promise((resolve) => {
    setTimeout(() => {
      let user = {
        userID: "3232",
        name: "Lokesh"
      };
      resolve(user);
    }, 3000);
  });
};

const getPosts = (userID) => {
  console.log("Fetching Posts", userID);
  return new Promise((res, rej) => {
    setTimeout(() => {
      const posts = [
        {
          postId: "323121",
          caption: "Gud Morning"
        },
        {
          postId: "12121",
          caption: "Gud Night"
        }
      ];
      res(posts);
    }, 3000);
  });
};

const getComments = (postId) => {
  console.log("Fetching Comments", postId);
  return new Promise((res, rej) => {
    setTimeout(() => {
      const comments = [
        {
          commentId: "23232",
          comment: "Hello"
        },
        {
          commentId: "089932",
          comment: "Hola"
        }
      ];
      res(comments);
    }, 3000);
  });
};

getUserData()
  .then((user) => {
    console.log("Data fetched User");
    const { userID } = user;
    return getPosts(userID);
  })
  .then((posts) => {
    console.log("Post Fetched");
    console.log(posts);
    return posts.map((post) => {
      return getComments(post.postId);
    });
  })
  .then((value) => {
    return Promise.all(value);
  })
  .then((comments) => {
    console.log(comments);
  })
  .catch((err) => {
    console.log(err);
  });
