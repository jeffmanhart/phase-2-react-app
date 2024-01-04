import Finder from "./Finder"
import React , { useState , useEffect } from 'react';

function Activity() {
  const [activity, setActivity] = useState({});
  const [saveChecked, setCheck] = useState(false)

  useEffect(()=>{
    getRandomActivity()
  }, []);

  function getRandomActivity(){
    fetch(" http://www.boredapi.com/api/activity/")
    .then((r) => r.json())
    .then((data)=> setActivity(data));
  }

  function onBoredFormSubmit(searchTerms){
    fetch(`http://www.boredapi.com/api/activity?type=${searchTerms.type}&participants=${searchTerms.participants}`)
    .then((r) => r.json())
    .then((data)=> setActivity(data));
  }

  function handleSaveCheck(){
    setCheck(!saveChecked)
    fetch("http://localhost:3000/activities",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        activity : activity.activity,
        kind : activity.type,
        participants : activity.participants,
        price : activity.price,
        link :activity.link
      }
        )
    })
  }

  return (
      <main>
        <h1>Bored?!</h1>
        <p>Find something to do, either choose a category or find a random activity</p>
        <Finder onBoredFormSubmit={onBoredFormSubmit} onRandomQuery={getRandomActivity}/>
        <hr></hr>
        <div id="idea">
          <label>
            <input type="checkbox"
              value={saveChecked}
              onChange={handleSaveCheck}
            />
            {"Save Idea for Later"}
          </label>
          <h3>{activity.activity}</h3>
          <a>{activity.type}</a>
          <p>You can do this activity with {activity.participants === 1 ? "1 person" : activity.participants + " people" }</p>
          <p>Could cost ${activity.price} or more</p>
          <a href={activity.link}>{activity.link}</a>
        </div>
      </main>
      
    );
  }
  
  export default Activity; 