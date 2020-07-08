import GhostContentAPI from "@tryghost/content-api";


const api = new GhostContentAPI({

    url: "http://localhost:2368",
    key: "c340c8235a0d694e84c64e832b",
    version: "v3",
});

//http://localhost:2368
//e1973f50841528f4e984574e85

export async function getPosts() {
    return await api.posts
      .browse({
        limit: "all",
        filter : 'tags:getting-started'
      })
      .catch(err => {
        console.error(err);
      });
  }

export async function getSinglePost(postSlug) {
    return await api.posts
      .read({
        slug: postSlug,

      })
      .catch(err => {
        console.error(err);
      });
  }

  export async function getPostsByTag(postTag) {
    return await api.posts
      .browse({
        filter : 'tags:galeria' //zrobione na szywno do poprawy filtrownaie po zmiennej
      })
      .catch(err => {
        console.error(err);
      });
  }

  export async function getSinglePostByTag(postSlug) { //TO DO
    // return await api.posts
    //   .read({
    //     slug: postSlug
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });
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

  export async function getPages(pageSlug) {
    return await api.pages
      .read({
        slug: pageSlug
      })
      .catch(err => {
        console.error(err);
      });
  }