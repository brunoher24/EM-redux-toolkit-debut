import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteOnePost,
  selectPosts
} from './basketSlice';
import styles from './Post.module.css';

import { productService } from '../../app/services/product';



export function Posts() {
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();

  const test = () => {
    productService.fetchAll()
    // .then(productsData => {
    //   console.log(productsData);
    // })
  }

  return (
    <div>
      <div className={styles.postsCtnr}>
        <button onClick={test}>Charger les posts</button>
        <ul>
        {posts && posts.map((post, index) => (
          <li key={post.id} className={styles.post_li}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => dispatch(deleteOnePost(index))}>X</button>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}
