import Link from "next/link";
import React from "react";
import { sort } from "fast-sort";

interface Users {
  address: { city: string }; 
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
  sortOrder1?: string; 
}

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: Users[] = await res.json();

  const sortedUsers = sort(users).asc((user) => {
    if (sortOrder === "email") return user.email;
    if (sortOrder === "name") return user.name;
    if (sortOrder === "city") return user.address.city;
    if (sortOrder === "id") return user.id;
    return user.id; 
  });

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>
              <Link href="/users?sortOrder=id">Id</Link>
            </th>
            <th>
              <Link href="/users?sortOrder=name">Name</Link>
            </th>
            <th>
              <Link href="/users?sortOrder=email">Email</Link>
            </th>
            <th>
              <Link href="/users?sortOrder=city">City</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
