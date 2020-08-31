import React, { useState } from "react";
import "./App.css";
import { Post } from "./components/Post";

const App = () => {
  const [postsList, setPostsList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [counterPost, setCounterPost] = useState(0);
  const [errorMessage, setErrorMessage] = useState(false);

  const onChangeInput = event => {
    setInputValue(event.target.value);
  };

  const addPost = () => {
    // Adiciona um post à lista
    if(inputValue) {
      const newPost = {
        id: Date.now(),
        text: inputValue,
        liked: false
      };
   
      const newPostsList = [newPost, ...postsList];
  
      setPostsList(newPostsList);
      setInputValue("")
      setCounterPost(counterPost + 1);
      setErrorMessage(false);
    } if(!errorMessage) {
      setErrorMessage(!errorMessage);
    } 

  };

  const deletePost = postId => {
    // Apaga um post da lista
    const newPostsList = postsList.filter(post => {
      return postId !== post.id;
    });

    setPostsList(newPostsList);
    setCounterPost(counterPost - 1)
  };

  const toggleLike = postId => {
    // Altera o status de curtida de um post da lista
    const newPostsList = postsList.map(post => {
      if (postId === post.id) {
        const novoPost = {
          ...post,
          liked: !post.liked
        };
        return novoPost;
      } else {
        return post;
      }
    });

    setPostsList(newPostsList);
  };

  return (
    <div className="App">
      <div>
        {counterPost > 0 ? <p>Quantidade de posts: {counterPost}</p> : <></>}
        <input
          type="text"
          onChange={onChangeInput}
          value={inputValue}
          placeholder={"Novo post"}
        />
        <button onClick={addPost}>Adicionar</button>
      </div>
      <br />
      {errorMessage ? <p>Não é possível criar um post vazio</p> : <></>}
      {postsList.length !== 0 ? postsList.map(post => {
        return (
          <Post
            key={post.id}
            post={post}
            toggleLike={toggleLike}
            deletePost={deletePost}
          />
        );
      }) : <p>Nenhum item foi adicionado</p>}
    </div>
  );
};

export default App;
