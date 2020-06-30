import GhostContentAPI from "@tryghost/content-api";


const api = new GhostContentAPI({

    url: "http://localhost:2368",
    key: "5665959d49c5e0f133355272b4",
    version: "v3"
});

//http://localhost:2368
//e1973f50841528f4e984574e85

export async function getPosts() {
    return await api.posts
      .browse({
        limit: "all"
      })
      .catch(err => {
        console.error(err);
      });
  }

export async function getSinglePost(postSlug) {
    return await api.posts
      .read({
        slug: postSlug
      })
      .catch(err => {
        console.error(err);
      });
  }

  export async function getAuthor(authorSlug) {
    return await api.authors
      .read({
        slug: authorSlug
      })
      .catch(err => {
        console.error(err);
      });
  }