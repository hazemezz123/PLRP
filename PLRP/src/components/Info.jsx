const ProfileCard = ({ name, age, jobTitle, bio, image }) => {
  return (
    <div className="card text-center shadow-lg p-3" style={{ width: "18rem" }}>
      <img
        src={image}
        className="card-img-top rounded-circle mx-auto"
        alt={name}
        style={{ width: "80px", height: "80px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text text-muted">{jobTitle}</p>
        <p className="text-dark">{bio}</p>
        <p className="fw-bold">Age: {age}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
