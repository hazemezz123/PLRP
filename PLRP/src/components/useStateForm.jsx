import React, { useState } from "react";

const useStateForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  return (
    <div>
      <form action="">
        <input
          type="email"
          placeholder="enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={() =>
            alert(`the name is : ${name} , the email is : ${email} `)
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default useStateForm;
