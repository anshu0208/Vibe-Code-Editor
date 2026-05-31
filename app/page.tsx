import { Button } from "@/components/ui/button";
import UserButton from "@/modules/auth/components/user-button";
import Image from "next/image";

export default function Home() {
  return (
   
  <div>
    <Button className= "bg-red-700">
      Get started
    </Button>
    <UserButton />
  </div>
  );
}
