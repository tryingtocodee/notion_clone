
import Footer from "./_components/footer";
import Heading from "./_components/heading";
import HeroImages from "./_components/heroImages";


export default function MarketingPage() {
  return (
    <div className="flex flex-col min-h-full items-center justify-center">
      <div className="flex flex-col  md:justify-start text-center gap-y-5 px-6 pb-10">
        <Heading />
        <HeroImages />
      </div>
      <Footer/>
    </div>
  );
}
