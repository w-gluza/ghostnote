/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  return (
    <div>
      {users.map((user: any) => (
        <>
          <p key={user.id}>nick: {user.nick}</p>
          <p key={user.id}>mail: {user.email}</p>
          <p key={user.id}>xp: {user.xp}</p>
          <p key={user.id}>level: {user.level}</p>
        </>
      ))}
    </div>
  );
}
