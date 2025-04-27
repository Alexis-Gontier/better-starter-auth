import Link from "next/link"
import { Button } from "@/components/shadcn-ui/button"
import { Shield } from 'lucide-react';

export default function page() {
  return (
    <>
      <header className="fixed top-0 z-50 h-16 w-full border-b">
        <nav className="container mx-auto h-full flex items-center justify-between">
          <div>
            <Link
              href="/"
              className="uppercase text-xl font-bold flex items-center gap-2"
            >
              <Shield />
              <span>better-starter-auth</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/sign-in">
              <Button className="cursor-pointer">
                Login
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button variant="outline" className="cursor-pointer">
                Sign Up
              </Button>
            </Link>
          </div>
        </nav>
      </header>
      <main className="min-h-screen py-16 flex flex-col items-center justify-center gap-8 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center">
          Next.js + Better-Auth + Prisma + Shadcn UI starter Kit
        </h1>
        <h2 className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, reiciendis!
        </h2>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/Alexis-Gontier/better-starter-auth" target="_blank">
            <Button className="cursor-pointer" size="lg">
              Clone le ropot
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button variant="outline" className="cursor-pointer" size="lg">
              Get Started
            </Button>
          </Link>
        </div>
      </main>
      <footer className="fixed bottom-0 z-50 h-16 w-full border-t">
        <nav className="container mx-auto h-full flex items-center justify-between">
          <div>a</div>
          <div className="flex items-center gap-4">
            <Link href="">Github</Link>
            <Link href="">Portfolio</Link>
          </div>
          <div>© 2025 Alexis-Gontier</div>
        </nav>
      </footer>
    </>
  )
}
