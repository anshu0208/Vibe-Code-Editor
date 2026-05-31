import Image from "next/image";
import loginSvg from "@/public/login.svg";
import SignInFormClient from "@/modules/auth/components/sign-in-form-client";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto flex min-h-screen items-center justify-center px-6">
        <div className="grid w-full max-w-6xl gap-12 lg:grid-cols-2 items-center">

          <div className="hidden lg:flex justify-center">
            <Image
              src={loginSvg}
              alt="Authentication Illustration"
              className="w-[500px] h-auto"
              priority
            />
          </div>

          <div className="flex justify-center">
            <SignInFormClient />
          </div>

        </div>
      </div>
    </main>
  );
}