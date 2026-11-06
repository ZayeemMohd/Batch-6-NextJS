"use client";

import { useEffect, useState } from "react";

export default function UsersPage() {
  const [userData, setUserData] = useState(null);

  async function fetchUser() {
    const response = await fetch("/api/v1/users");
    const data = await response.json();
    setUserData(data.data);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  if (userData == null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2> Admin page: Available UsersPage</h2>
      {userData.map((userObj) => {
        return <div key={userObj._id}> {userObj.username} </div>;
      })}
    </div>
  );
}
