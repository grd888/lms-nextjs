"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { GithubIcon, Loader } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import React from "react";

export default function LoginPage() {
  const [githubPending, startGithubTransition] = React.useTransition();

  async function signInWithGithub() {
    startGithubTransition(async () => {
      await authClient.signIn.social({
        provider: "github",
        callbackURL: "/",
        fetchOptions: {
          onSuccess: () => {
            toast.success("Signed in with GitHub");
          },
          onError: () => {
            toast.error("Internal Server Error");
          },
        },
      });
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome Back!</CardTitle>
        <CardDescription>Login with your Github Email Account</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <Button
          onClick={signInWithGithub}
          className="w-full"
          variant="outline"
          disabled={githubPending}
        >
          {githubPending ? (
            <>
              <Loader className="size-4 animate-spin" />
              <span>Loading ...</span>
            </>
          ) : (
            <>
              <GithubIcon className="size-4" />
              Sign in with GitHub
            </>
          )}
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-card px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>

        <div className="grid gap-3">
          <div className="grid gap-2">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="name@website.com"
            />
          </div>
        </div>

        <Button>Continue with Email</Button>
      </CardContent>
    </Card>
  );
}
