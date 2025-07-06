import { useState } from "react";

interface UserInfo {
  name: string;
  age: number;
  email: string;
}

const UserInfoDynamic = () => {
  const [profile, setProfile] = useState<UserInfo>({
    name: "",
    age: 0,
    email: "",
  });

  const updateName = (name: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, name }));
  };
  const updateAge = (age: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, age: +age }));
  };
  const updateEmail = (email: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, email }));
  };
  return (
    <div>
      <h2>User Information</h2>
      <input
        type="text"
        placeholder="Name"
        value={profile.name}
        onChange={(e) => {
          updateName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Age"
        value={profile.age > 0 ? profile.age : ""}
        onChange={(e) => {
          updateAge(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Email"
        value={profile.email}
        onChange={(e) => {
          updateEmail(e.target.value);
        }}
      />

      <h3>Profile Summary</h3>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
      <p>Email: {profile.email}</p>
    </div>
  );
};

export default UserInfoDynamic;
