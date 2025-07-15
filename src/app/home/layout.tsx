import type { Metadata } from "next";
import RightMenu from "@/components/RightMenu";
import LeftMenu from "@/components/LeftMenu";

export const metadata: Metadata = {
  title: "Red Net",
  description: "a ripoff of twitter lmao",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <div className="w-full hidden md:flex justify-end border-r p-5">
        <LeftMenu />
      </div>
      <div className="w-full min-w-md md:max-w-md overflow-y-scroll no-scroll">
        {children}
      </div>
      <div className="w-full hidden md:block border-l p-5">
        <RightMenu />
      </div>
    </div>
  );
}
