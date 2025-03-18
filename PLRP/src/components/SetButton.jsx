import { useContext } from "react";
import { UserContext } from "../UserContext";

const SetButton = () => {
  const { setUser } = useContext(UserContext);
  return (
    <div>
      <h1>The User Now is : </h1>
      <button
        onClick={() => {
          setUser("newName");
        }}
      >
        Updata User
      </button>
    </div>
  );
};

export default SetButton;
