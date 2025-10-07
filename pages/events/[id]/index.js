import { useRouter } from "next/router";
import { getEventById } from "@/dummy-data";
import Event from "@/components/events/Event";
import EventContent from "@/components/event-detail/event-content";
import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import Comments from "@/components/input/comments";


export default function DetailedEventPage() {
  const r=useRouter();
  const event=getEventById(r.query.id);
  if(!event){
    return <p>No event found!</p>
  }
  else
  {      
    return (
        <div style={{textAlign:"center",fontFamily:"cursive"}}>
          <h1>Detailed Event Page</h1>
          <EventSummary title={event.title}/>
          <EventLogistics d={event.date} ad={event.location} i={event.image} t={event.title}/>
          <EventContent><p>{event.description}</p></EventContent>
          <Comments eventId={event.id}/>
        </div>
      
    );
  }
}