import React from "react";
// import { gql, useQuery } from "@apollo/client";

// const GET_USERS = gql`
//   query GetUsers {
//     users {
//       user_id
//       email
//       created_at
//     }
//   }
// `;

interface User {
  user_id: string;
  email: string;
  created_at: string;
}

const UsersPage = () => {
  // const { loading, error, data } = useQuery<{ users: User[] }>(GET_USERS);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Users List</h1>
      {/* <ul>
        {data?.users.map((user) => (
          <li key={user.user_id}>
            {user.email} - {new Date(user.created_at).toLocaleDateString()}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default UsersPage;
