import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import SidebarNav from "./SidebarNav";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/masuk");

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#faf4e8" }}>
      <SidebarNav email={user.email ?? ""} />
      <main style={{ flex: 1, padding: "36px 40px", overflow: "auto" }}>
        {children}
      </main>
    </div>
  );
}
