import Topbar from "@/components/Topbar";
import Opening from "@/components/Opening";
import Story from "@/components/Story";
import Problem from "@/components/Problem";
import Maps from "@/components/Maps";
import CardShowcase from "@/components/CardShowcase";
import WhyPaper from "@/components/WhyPaper";
import DoesItWork from "@/components/DoesItWork";
import Valley from "@/components/Valley";
import GetCare from "@/components/GetCare";
import Plan from "@/components/Plan";
import Counting from "@/components/Counting";
import Risks from "@/components/Risks";
import Ending from "@/components/Ending";

// Retired sections live in "..\old data\parked-components" if ever needed again.

export default function Page() {
  return (
    <>
      <a href="#story" className="absolute -left-full z-30 rounded bg-ink px-4 py-2 text-white focus:left-2 focus:top-2">
        Skip to content
      </a>
      <Topbar />
      <Opening />
      <main>
        <Story />
        <Problem />
        <Maps />
        <CardShowcase />
        <WhyPaper />
        <DoesItWork />
        <Valley />
        <GetCare />
        <Plan />
        <Counting />
        <Risks />
        <Ending />
      </main>
    </>
  );
}
