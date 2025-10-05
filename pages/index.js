
import { getFeaturedEvents } from "@/dummy-data";
import EventList from "@/components/events/EventList";

export default function FeaturedEventsPage() {
  const arr=getFeaturedEvents();
  console.log(arr)
  return (
    
      <div>
        <h1>Home Page: All Featured Events</h1> 
        <EventList list={arr}/>
      </div>
    
  );
}
