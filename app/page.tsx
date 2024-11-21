
import HeroSection from "./hero";
import SearchSection from "./search";

export default function Home() {
	return (
		<div className="flex flex-col gap-8 bg-black p-6 lg:pt-10 ">
			<HeroSection />

			<SearchSection />

		</div>
	);
}
