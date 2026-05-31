import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-zinc-200/60 dark:border-zinc-800/60">
      {/* Top Glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="py-16">
          {/* Main Footer */}
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
            {/* Brand */}
            <div className="max-w-sm">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <Image
                    src="/logo.svg"
                    alt="VibeCode"
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    VibeCode
                  </h3>
                  <p className="text-sm text-zinc-500">
                    Code Editor
                  </p>
                </div>
              </Link>

              <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Build faster with a modern coding experience designed for
                developers who care about performance, productivity, and clean
                workflows.
              </p>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
              <div>
                <h4 className="mb-4 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  Product
                </h4>

                <div className="space-y-3">
                  <Link
                    href="/docs"
                    className="block text-sm text-zinc-600 transition-colors hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400"
                  >
                    Documentation
                  </Link>

                  <Link
                    href="/api"
                    className="block text-sm text-zinc-600 transition-colors hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400"
                  >
                    API
                  </Link>

                  <Link
                    href="/changelog"
                    className="block text-sm text-zinc-600 transition-colors hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400"
                  >
                    Changelog
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="mb-4 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  Resources
                </h4>

                <div className="space-y-3">
                  <Link
                    href="/blog"
                    className="block text-sm text-zinc-600 transition-colors hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400"
                  >
                    Blog
                  </Link>

                  <Link
                    href="/guides"
                    className="block text-sm text-zinc-600 transition-colors hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400"
                  >
                    Guides
                  </Link>

                  <Link
                    href="/faq"
                    className="block text-sm text-zinc-600 transition-colors hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400"
                  >
                    FAQ
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="mb-4 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  Company
                </h4>

                <div className="space-y-3">
                  <Link
                    href="/privacy"
                    className="block text-sm text-zinc-600 transition-colors hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400"
                  >
                    Privacy
                  </Link>

                  <Link
                    href="/terms"
                    className="block text-sm text-zinc-600 transition-colors hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400"
                  >
                    Terms
                  </Link>

                  <Link
                    href="/contact"
                    className="block text-sm text-zinc-600 transition-colors hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 flex flex-col gap-6 border-t border-zinc-200/60 pt-8 dark:border-zinc-800/60 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-zinc-500">
              © {year} VibeCode. All rights reserved.
            </p>

            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="rounded-lg border border-zinc-200 p-2 text-zinc-500 transition-all hover:border-violet-500/40 hover:text-violet-600 dark:border-zinc-800 dark:hover:border-violet-500/40 dark:hover:text-violet-400"
              >
                <FaGithub className="h-4 w-4" />
              </Link>

              <Link
                href="#"
                className="rounded-lg border border-zinc-200 p-2 text-zinc-500 transition-all hover:border-violet-500/40 hover:text-violet-600 dark:border-zinc-800 dark:hover:border-violet-500/40 dark:hover:text-violet-400"
              >
                <FaTwitter className="h-4 w-4" />
              </Link>

              <Link
                href="#"
                className="rounded-lg border border-zinc-200 p-2 text-zinc-500 transition-all hover:border-violet-500/40 hover:text-violet-600 dark:border-zinc-800 dark:hover:border-violet-500/40 dark:hover:text-violet-400"
              >
                <FaLinkedin className="h-4 w-4" />
              </Link>

              <Link
                href="#"
                className="rounded-lg border border-zinc-200 p-2 text-zinc-500 transition-all hover:border-violet-500/40 hover:text-violet-600 dark:border-zinc-800 dark:hover:border-violet-500/40 dark:hover:text-violet-400"
              >
                <FaEnvelope className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}