import SideBarUser from "@/components/SidebarUser";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#F3F5F7] min-h-screen min-w-screen">
      <div className="flex">
        <div
          style={{
            boxShadow: "2px 0px 4px 0px #00000029",
          }}
          className="max-w-[220px] w-full bg-white"
        >
          <SideBarUser />
        </div>
        <div className="flex-1 bg-[#F3F5F7]">{children}</div>
      </div>
    </div>
  );
}
