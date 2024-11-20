
import HeroSection from "./hero";
import SearchSection from "./search";

export default function Home() {
	return (
		<div className="bg-black p-6 lg:pt-10 ">
			<HeroSection />
			<SearchSection />

		</div>
	);
}
