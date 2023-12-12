import React from "react";

function About() {
  const bio = "lorem Ipsum"
    return (
    <div id="About">
      <h2>About</h2>
      {bio && bio.length > 1 ? <p>{bio}</p> : null}
      <img src="https://media.licdn.com/dms/image/C4E03AQGJx3Z9ZjsRvg/profile-displayphoto-shrink_800_800/0/1571669935914?e=2147483647&v=beta&t=6zQPI7l7Nfym-M_-m8IpxroqIrryQYZxApU6dKH4PDc" alt="Jeffrey Manhart" />
    </div>
  );
}

export default About;