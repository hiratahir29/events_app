import { useRef, useState } from 'react';
import classes from './new-comment.module.css';

function NewComment(props) {

  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const commentInputRef = useRef();

  
  return (
    <form className={classes.form}>
      <div className={classes.row}>
        <div className={classes.control}>
          <label htmlFor='email'>Your email</label>
          <input type='email' id='email' ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='name'>Your name</label>
          <input type='text' id='name' ref={nameInputRef} />
        </div>
      </div>
      <div className={classes.control}>
        <label htmlFor='comment'>Your comment</label>
        <textarea id='comment' rows='5' ref={commentInputRef}></textarea>
      </div>
    
      <button>Submitt</button>
    </form>
  );
}

export default NewComment;