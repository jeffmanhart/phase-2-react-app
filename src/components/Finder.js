import React , { useState } from "react";

function Finder({onBoredFormSubmit , onRandomQuery}) {
  const [formData, setFormData] = useState({
    type: "",
    participants: 1,
  });
  function handleSubmit(e){
    e.preventDefault();
    onBoredFormSubmit(formData)
  }  

  function handleChange(event){
    const key = event.target.name;
    let value = event.target.value;

    setFormData({
      ...formData,
      [key]: value,
    })
  }

  function handleRandomQuery(){
    onRandomQuery()
  }


  return (
    <form id="bored" onSubmit={handleSubmit}>
      <label>
        Num of Participants:
        <input 
          type="number" 
          name="participants" 
          onChange={handleChange}
          value={formData.participants}
        />
      </label>

      <label>
        Category:
        <select name="type" onChange={handleChange}>
          <option value="recreational">Recreational</option>
          <option value="education">Education</option>
          <option value="social">Social</option>
          <option value="relaxation">Relaxation</option>
          <option value="music">Music</option>
        </select>
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
      <button id="random" onClick={handleRandomQuery}>Random Activity</button>
    </form>
  );
}

export default Finder;