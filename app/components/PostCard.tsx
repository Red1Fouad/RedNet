import { Ellipsis, Heart, MessageCircle, Repeat2, Share } from "lucide-react";
import Image from "next/image";
import React from "react";
import Button from "./Button";

const PostCard = () => {
  return (
    <div className="flex border-b p-3 gap-3 items-start">
      <div>
        <div className="rounded-full w-10 h-10 overflow-hidden">
          <Image src={"/assets/user/icon.jpg"} alt="" width={40} height={40} />
        </div>
      </div>
      <div className="p-0 space-y-2">
        <div className="flex items-center -mt-2 gap-1">
          <span className="font-bold capitalize">red2</span>
          <span className="font-light">@redtwo · 2h</span>
        </div>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
          aperiam?
        </p>
        <div className="rounded-lg overflow-hidden">
          <Image
            src={"https://pbs.twimg.com/media/GE9yK3pXEAAq00b.jpg"}
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className="flex justify-between">
          <Button type="icon" icon={<MessageCircle className="w-5 h-5" />} />
          <Button type="icon" icon={<Repeat2 className="w-5 h-5" />} />
          <Button type="icon" icon={<Heart className="w-5 h-5" />} />
          <Button type="icon" icon={<Share className="w-5 h-5" />} />
          <Button type="icon" icon={<Ellipsis className="w-5 h-5" />} />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
