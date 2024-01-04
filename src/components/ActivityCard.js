import React from "react";

function ActivityCard({activity}){


    return (
        
        <tr>
            <td>{activity.id}</td>
            <td>{activity.activity}</td>
            <td>{activity.kind}</td>
            <td>{activity.price}</td>
            <td>{activity.participants}</td>
            <td>{activity.link}</td>
        </tr>
    )
}

export default ActivityCard