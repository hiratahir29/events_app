import classes from './comment-list.module.css';

function CommentList() {
  return (
    <ul className={classes.comments}>
      {/* Render list of comments later - fetched from API, for now its written hard coded */}
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Sara</address>
        </div>
      </li>
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Hira</address>
        </div>
      </li>
    </ul>
  );
}

export default CommentList;