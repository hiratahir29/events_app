import EventList from "@/components/events/EventList";
import EventSearch from "@/components/events/EventSearch";
import { getAllEvents } from "@/dummy-data";




export default function AllEventsPage() {
  const eventlist=getAllEvents();
    return (
        <div style={{textAlign:"center",fontFamily:"cursive"}}>
          <EventSearch/>
          <h1>All Events Page</h1>
          <EventList list={eventlist}/>
        </div>
      
    );
  }