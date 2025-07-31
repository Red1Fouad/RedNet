import DetailNav from "@/components/DetailNav";
import React from "react";

const Page = async ({ params }: { params: Promise<{ post_id: string }> }) => {
  const { post_id } = await params;
  return (
    <div>
      <DetailNav />
      {post_id}
    </div>
  );
};

export default Page;

//
