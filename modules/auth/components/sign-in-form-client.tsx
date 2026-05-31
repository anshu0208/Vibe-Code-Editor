import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaGithub } from "react-icons/fa";
import { signIn } from "@/auth";

async function handleGithubSignIn() {
  "use server";
  await signIn("github");
}

export default function SignInFormClient() {
  return (
    <Card className="w-full max-w-md border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
      <CardHeader className="space-y-3">
        <CardTitle className="text-3xl font-bold text-center">
          Welcome Back
        </CardTitle>

        <CardDescription className="text-center text-muted-foreground">
          Sign in to continue to Vibe Code Editor
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form action={handleGithubSignIn}>
          <Button
            type="submit"
            variant="secondary"
            className="w-full h-11 text-base"
          >
            <FaGithub className="mr-2 h-5 w-5" />
            Continue with GitHub
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          Secure OAuth authentication powered by GitHub
        </div>
      </CardContent>
    </Card>
  );
}