import Footer from "@/modules/home/footer";
import { Header } from "@/modules/home/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | VibeCode",
    default: "Code Editor for VibeCoders - VibeCode",
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white dark:bg-black">
      {/* Grid */}
      <div
        className="
          absolute inset-0
          [background-size:60px_60px]
          [background-image:
          linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),
          linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)]
          dark:[background-image:
          linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),
          linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
        "
      />

      {/* Center Fade */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-white dark:bg-black
          [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black_75%)]
        "
      />

      {/* Top Glow */}
      <div
        className="
          absolute
          top-[-250px]
          left-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-violet-500/15
          blur-[140px]
        "
      />

      {/* Left Glow */}
      <div
        className="
          absolute
          left-[-200px]
          top-[20%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />

      {/* Right Glow */}
      <div
        className="
          absolute
          right-[-200px]
          top-[40%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-fuchsia-500/10
          blur-[120px]
        "
      />

      {/* Gradient Mesh */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.08),transparent_35%)]
          dark:bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.15),transparent_35%)]
        "
      />

      {/* Noise Layer */}
      <div
        className="
          absolute inset-0
          opacity-[0.02]
          [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22 viewBox=%220 0 160 160%22%3E%3Cg fill=%22%23000%22 fill-opacity=%221%22%3E%3Ccircle cx=%223%22 cy=%223%22 r=%221%22/%3E%3C/g%3E%3C/svg%3E')]
          dark:opacity-[0.04]
        "
      />

      {/* Content */}
      <div className="relative z-10">
        <Header />

        <main className="relative w-full">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
}