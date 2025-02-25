import Sidebar from "@/components/Sidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <div className="max-w-[240px] w-full">
        <Sidebar />
      </div>
      <div className="flex-1 bg-[#F3F5F7]">{children}</div>
    </div>
  );
}
