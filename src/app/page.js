import AboutSection from "@/component/shared/AboutSection";
import Banner from "@/component/shared/Banner";
import IdeaCard from "@/component/shared/IdeaCard";
import SheareYourIdea from "@/component/shared/FAQCard";
import Image from "next/image";
import FAQCard from "@/component/shared/FAQCard";

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`)
  const ideas = await res.json()
  return (
    <div className="">
      <Banner></Banner>
      <div className="max-w-[1280px] mx-auto my-4">
        <h1 className="text-[30px] font-bold">Popular Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">

          {
            ideas.map((idea, indx) => <IdeaCard key={indx} idea={idea}></IdeaCard>)
          }
        </div>
      </div>
        <AboutSection></AboutSection>
        <FAQCard></FAQCard>

    </div>
  );
}
