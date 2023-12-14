import Finder from "./Finder"
import React , { useState , useEffect } from 'react';

function Activity() {
  const [activity, setActivity] = useState({});

  useEffect(()=>{
    getRandomActivity()
  }, []);

  function getRandomActivity(){
    fetch(" http://www.boredapi.com/api/activity/")
    .then((r) => r.json())
    .then((data)=> setActivity(data));
  }

  function onBoredFormSubmit(searchTerms){
    console.log(searchTerms)
    fetch(`http://www.boredapi.com/api/activity?type=${searchTerms.type}&participants=${searchTerms.participants}`)
    .then((r) => r.json())
    .then((data)=> console.log(data));
  }

  return (
      <main>
        <h1>Bored?!</h1>
        <p>Find something to do, either choose a category or find a random activity</p>
        <Finder onBoredFormSubmit={onBoredFormSubmit} onRandomQuery={getRandomActivity}/>
        <div id="idea">
          <h3>{activity.activity}</h3>
          <a>{activity.type}</a>
          <p>You can do this activity with {activity.participants === 1 ? "1 person" : activity.participants + " people" }</p>
          <p>Could cost ${activity.price}</p>
          <a href={activity.link}>{activity.link}</a>
          
        </div>
      </main>
      
    );
  }
  
  export default Activity;