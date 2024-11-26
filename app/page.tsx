"use client";

import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
// import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]/route";
// import HeavyComponent from "./components/HeavyComponents";
import dynamic from "next/dynamic";
// import _ from "lodash";
import { useState } from "react";
import Loading from "./loading";

// const HeavyComponent = dynamic(() => import("./components/HeavyComponents"), {
//   ssr: false,
//   loading: () => <h1>Loading...</h1>,
// });

export default function Home() {
  // const session = await  getServerSession(authOptions);

  // const [isVisible, setIsVisible] = useState(false);

  // const handleClick = () => {
  //   setIsVisible((prevState) => !prevState);
  // };
  return (
    <main>
      {/* <h1>Hello {session!.user!.name}</h1> */}
      <Link href="/users">User</Link>
      <h1>Hello World</h1>
      <ProductCard />
      {/* <button onClick={handleClick}>{isVisible ? "Hide" : "Show"}</button> */}
      {/* <button
        onClick={async () => {
          const _ = (await import("lodash")).default;

          const users = [
            { name: "cs" },
            { name: "ca" },
            { name: "as" },
            { name: "a" },
          ];

          const sorted = _.orderBy(users, ["name"]);

          console.log(sorted);
        }}
      >
        {isVisible ? "Hide" : "Show"}
      </button> */}
      {/* {isVisible && <HeavyComponent />} */}
    </main>
  );
}
