import React from "react";

async function getData() {
  const res = await fetch("https://api.example.com/...");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  console.log("path name >>>>", slug);
  return <div>Detail blog</div>;
};

export default page;
