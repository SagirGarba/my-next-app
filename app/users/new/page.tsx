"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const NewPage = () => {
  const router = useRouter();
  return (
    <div>
      <button className="btn btn-primary" onClick={() => router.push("/users")}>Create</button>
      <p>NewPage</p>
    </div>
  );
};

export default NewPage;
