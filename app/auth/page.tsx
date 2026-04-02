import Link from "next/link"
import { ArrowRight, Wallet, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center px-5">
      {/* Background animation elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-10" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-[12px] bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/30">
              <span className="text-primary-foreground font-bold text-lg">Cx</span>
            </div>
            <div>
              <span className="font-semibold text-lg text-foreground">Confluxi</span>
            </div>
          </Link>
          <h1 className="text-3xl font-bold text-foreground tracking-tight">Welcome Back</h1>
          <p className="text-muted-foreground mt-2">Sign in to access your credit profile</p>
        </div>

        {/* Auth Card */}
        <div className="bg-card border-2 border-primary/30 rounded-[24px] p-8 shadow-xl backdrop-blur-sm mb-6">
          <div className="space-y-5">
            {/* Email Login */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[12px] bg-primary/10 flex items-center justify-center text-primary">
                  <Mail size={18} />
                </div>
                <h2 className="text-lg font-semibold text-foreground">Sign in with Email</h2>
              </div>
              <div className="space-y-3">
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="rounded-[12px]"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-xs font-semibold text-foreground mb-2">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="rounded-[12px]"
                  />
                </div>
                <Button className="w-full rounded-[12px] h-11 font-semibold shadow-lg shadow-primary/30">
                  Sign In
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border/50" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-card text-muted-foreground">or continue with</span>
              </div>
            </div>

            {/* Wallet Login */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[12px] bg-primary/10 flex items-center justify-center text-primary">
                  <Wallet size={18} />
                </div>
                <h2 className="text-lg font-semibold text-foreground">Connect Wallet</h2>
              </div>
              <Button
                variant="outline"
                className="w-full rounded-[12px] h-11 font-semibold border-2 hover:bg-primary/5"
              >
                <Wallet size={16} className="mr-2" />
                Connect MetaMask / Fluent
              </Button>
            </div>
          </div>
        </div>

        {/* Sign Up Link */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/auth/signup" className="font-semibold text-primary hover:text-primary/80 transition-colors">
              Sign up
            </Link>
          </p>
        </div>

        {/* Demo Button */}
        <div className="mt-8 p-4 bg-secondary/40 border border-border/50 rounded-[16px] text-center">
          <p className="text-xs text-muted-foreground mb-3">Ready to test drive?</p>
          <Link href="/dashboard">
            <Button variant="outline" className="w-full rounded-[12px] h-10 font-semibold">
              Enter Demo Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
