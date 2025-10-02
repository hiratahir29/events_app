import Event from "./Event";
export default function EventList(props) {
    return (
        <div>
          <ul>
            {props.list.map(event=>{
               return <Event t={event.title} des={event.description} i={event.image}/>
            })}
          </ul>
        </div>
      
    );
  }