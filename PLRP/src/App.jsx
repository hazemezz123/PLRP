import React from "react";
import ProfileCard from "./components/Info";

function App() {
  return (
    <div className="container d-flex flex-wrap justify-content-center gap-4 mt-5">
      <ProfileCard
        name="Ahmed Khaled"
        age={22}
        jobTitle="Frontend Developer"
        bio="I love coding and UI/UX design."
        image="https://randomuser.me/api/portraits/men/32.jpg"
      />

      <ProfileCard
        name="Sara Ali"
        age={25}
        jobTitle="Data Scientist"
        bio="Passionate about AI and Machine Learning."
        image="https://randomuser.me/api/portraits/women/45.jpg"
      />

      <ProfileCard
        name="Omar Hassan"
        age={28}
        jobTitle="Backend Engineer"
        bio="I enjoy working with databases and APIs."
        image="https://randomuser.me/api/portraits/men/76.jpg"
      />
    </div>
  );
}

export default App;
