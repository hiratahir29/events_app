import Head from "next/head";
import { getFeaturedEvents } from "@/dummy-data";
import EventList from "@/components/events/EventList";
import NewsletterRegistration from "@/components/input/newsletter-registration";

 function Home(props) {
  const arr=props.fevents;
  return (
    
      <div style={{textAlign:"center",fontFamily:"cursive"}}>
        <Head>
          <title>Main Page</title>
          <meta name="desc" content="this page refers to featured events"/>
         </Head> 
        <h1>Home Page</h1>
        <NewsletterRegistration/> 
        <EventList list={arr}/>
      </div>
    
  );
}

export async function getStaticProps(){
  const arr=await getFeaturedEvents()
  return {
    props:{
      fevents:arr
    }
    // ,
    // revalidate:1800 //every half hour but not working cz of github pages hosting
  }
}

export default Home;