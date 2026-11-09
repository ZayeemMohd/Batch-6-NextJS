import { userModel } from "@/src/utils/db";

// server component
export default async function UsersPage() {
  // const data = await userModel.find().select("-password");

    // const response = await fetch("http://localhost:3000/api/v1/users");
    // const data = await response.json();

  return (
    <div>
      <h2> Admin page: Available UsersPage</h2>
      {/* {data.map((userObj) => {
        return <div key={userObj._id}> {userObj.username} </div>;
      })} */}
    </div>
  );
}
