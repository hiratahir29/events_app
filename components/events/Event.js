export default function Event(props) {
    return (
        <li>
            <h1>{props.t}</h1>
            <img src={props.i}/>
            <p>{props.des}</p>
        </li>
      
    );
  }