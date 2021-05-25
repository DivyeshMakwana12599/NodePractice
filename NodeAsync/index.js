console.log("Before");
// getUser(1, (user) => {
//   console.log("User ", user);
//   getRepositories(user, (repositories) => {
//     console.log("repo ", repositories);
//   });
// });

getUser(1)
  .then((user) => getRepositories(user))
  .then((repos) => console.log(repos));
console.log("After");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a user from database...");
      resolve({ id: id, gitHubUsername: "Divyesh" });
    }, 2000);
  });
}

function getRepositories(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}
