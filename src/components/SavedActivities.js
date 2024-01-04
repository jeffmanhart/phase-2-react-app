import React, { useEffect, useState } from "react";
import ActivityCard from "./ActivityCard";

function SavedActivities() {
  const [saved, setSaved] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:3000/activities")
    .then((r) => r.json())
    .then((data)=> setSaved(data));
  },[])

  const activityList = saved.map((a) => (
    <ActivityCard key={a.id} activity={a} />
  ));
  
  return (
    <div id="activities">
      <h2>Saved Activities</h2>
      <table border= '2'>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Activity</th>
            <th>Category</th>
            <th>Price</th>
            <th>Participants</th>
            <th>Link</th>
          </tr>
          {activityList}
        </tbody>
      </table>
    </div>
  );
}

export default SavedActivities;