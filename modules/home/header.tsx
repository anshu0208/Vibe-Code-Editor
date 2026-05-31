import Link from "next/link";
import Image from "next/image";
import UserButton from "../auth/components/user-button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 px-3 sm:px-6 pt-3">
      <div className="mx-auto max-w-7xl">
        <div
          className="
            flex items-center justify-between
            h-16 px-4 sm:px-6
            rounded-2xl
            border border-zinc-200/70 dark:border-zinc-800/70
            bg-white/80 dark:bg-zinc-950/80
            backdrop-blur-xl
            shadow-[0_8px_30px_rgb(0,0,0,0.08)]
            transition-all duration-300
          "
        >
          {/* Left Side */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3 shrink-0"
            >
              <Image
                src="/logo.svg"
                alt="VibeCode Editor"
                width={40}
                height={40}
                className="
                   transition-transform duration-300
                   group-hover:scale-105
                "
              />

              <div className="hidden sm:flex flex-col leading-none">
                <span className="font-bold text-zinc-900 dark:text-white">
                  VibeCode
                </span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  Editor
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              <Link
                href="/docs/components/background-paths"
                className="
                  px-3 py-2
                  text-sm font-medium
                  text-zinc-600 dark:text-zinc-400
                  hover:text-zinc-900 dark:hover:text-zinc-100
                  hover:bg-zinc-100 dark:hover:bg-zinc-900
                  rounded-lg
                  transition-all
                "
              >
                Docs
              </Link>

              <Link
                href="https://codesnippetui.pro/templates?utm_source=codesnippetui.com&utm_medium=header"
                target="_blank"
                className="
                  px-3 py-2
                  text-sm font-medium
                  text-zinc-600 dark:text-zinc-400
                  hover:text-zinc-900 dark:hover:text-zinc-100
                  hover:bg-zinc-100 dark:hover:bg-zinc-900
                  rounded-lg
                  transition-all
                  flex items-center gap-2
                "
              >
                API

                <span
                  className="
                    rounded-full
                    border border-emerald-500/30
                    bg-emerald-500/10
                    px-2 py-0.5
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-wide
                    text-emerald-600
                    dark:text-emerald-400
                  "
                >
                  New
                </span>
              </Link>
            </nav>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <UserButton />
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className="
            md:hidden
            mt-2
            flex items-center justify-center gap-2
            rounded-xl
            border border-zinc-200/70 dark:border-zinc-800/70
            bg-white/70 dark:bg-zinc-950/70
            backdrop-blur-xl
            p-2
          "
        >
          <Link
            href="/docs/components/background-paths"
            className="
              flex-1
              text-center
              rounded-lg
              px-3 py-2
              text-sm
              font-medium
              text-zinc-600 dark:text-zinc-400
              hover:bg-zinc-100 dark:hover:bg-zinc-900
            "
          >
            Docs
          </Link>

          <Link
            href="https://codesnippetui.pro/templates?utm_source=codesnippetui.com&utm_medium=header"
            target="_blank"
            className="
              flex-1
              text-center
              rounded-lg
              px-3 py-2
              text-sm
              font-medium
              text-zinc-600 dark:text-zinc-400
              hover:bg-zinc-100 dark:hover:bg-zinc-900
            "
          >
            API
          </Link>
        </div>
      </div>
    </header>
  );
}