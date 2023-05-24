import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  // fillErrorMessage,
} from '../utils/updateUI';

const usersSelect = document.querySelector('#users-select');
let userID = null;

const USERS_API = 'https://dummyjson.com/users';
// faça a lógica para pegar as informações das pessoas usuárias e preencher o select aqui.
fetch(USERS_API)
  .then((response) => response.json())
  .then((data) => {
    const { users } = data;
    fillUsersSelect(users);
    console.log(users.id);
  })
  .catch((error) => error.message);

usersSelect.addEventListener('change', () => {
  clearPageData();
  fetch(`https://dummyjson.com/posts/user/${usersSelect.value}`)
    .then((response) => response.json())
    .then((data) => {
      const { posts } = data;
      fillPosts(posts);

      const [featuredPost] = posts;
      fetch(`https://dummyjson.com/posts/${featuredPost.id}/comments`)
        .then((response) => response.json())
        .then((data2) => {
          const { comments } = data2;
          fillFeaturedPostComments(comments);
        }).catch((error) => {
          fillErrorMessage('Erro ao recuperar informações');
          console.log(error.message);
        });
    });

  // faça a lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.
});
