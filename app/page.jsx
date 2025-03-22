import Hero from "@/components/ui/Hero";

export default function Home() {
  return (
  <div className="w-full min-h-screen bg-bgcolor bg-grid-white/[0.1] relative flex items-center justify-center">
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-bgcolor [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
   <Hero/>
  </div>
  );
}
