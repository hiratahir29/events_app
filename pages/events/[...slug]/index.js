import EventList from "@/components/events/EventList";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";

export default function FilteredEventsPage() {
  const r=useRouter();
  const filteredData=r.query.slug;
  if(!filteredData)
  {
    return <p className="center">Loading...</p>
  }
  const year=Number(filteredData[0]);
  const month=Number(filteredData[1]);
  if(isNaN(year) || isNaN(month))
  {
    return <p>Invalid Year or Month</p>
  }

  const filteredEvents=getFilteredEvents({year:year,month:month});
  if(!filteredEvents || filteredEvents.length===0)
    {
      return <p>No events found for this check</p>
    } 
  return (
        <div style={{textAlign:"center",fontFamily:"cursive"}}>
          <h1>Filtered Events Page</h1>
          <EventList list={filteredEvents}/>
        </div>
      
    );
  }