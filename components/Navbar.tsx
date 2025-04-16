import { UserButton } from "@clerk/nextjs";

import { MainNav } from "./MainNav";
import StoreSwitcher from "./StoreSwitcher";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
import { ThemeToggle } from "./themeToggle";

const Navbar = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <StoreSwitcher items={stores}></StoreSwitcher>
        <MainNav className="mx-6"></MainNav>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle></ThemeToggle>
          <UserButton afterSignOutUrl="/"></UserButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
