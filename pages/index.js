import Head from "next/head";
import { getFeaturedEvents } from "@/dummy-data";
import EventList from "@/components/events/EventList";
import NewsletterRegistration from "@/components/input/newsletter-registration";

export default function FeaturedEventsPage() {
  const arr=getFeaturedEvents();
  console.log(arr)
  return (
    
      <div style={{textAlign:"center",fontFamily:"cursive"}}>
        <Head>
          <title>Main Page</title>
          <meta name="desc" content="this page refers to featured events"/>
         </Head> 
        <h1>Home Page: All Featured Events</h1> 
        <NewsletterRegistration/>
        <EventList list={arr}/>
      </div>
    
  );
}
