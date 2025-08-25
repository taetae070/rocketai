import BackgroundSection from "@components/sajuPage/BackgroundSection";
import SpeechBubbleDown from "@components/common/SpeechBubbleDown";
import SpeechBubbleUp from "@components/common/SpeechBubbleUp";
import SajuTable from "@components/sajuPage/saju/SajuTable";
import { dummySajuData } from "@app/types/saju";

export default function Home() {
	return (
		<div
			className="min-h-screen w-full"
			style={{ backgroundColor: "#F3F2EF" }}>
			<div className="w-full max-w-md mx-auto">
				<BackgroundSection
					backgroundImage="/first.png"
					aspectRatio="448 / 786">
					<div style={{ position: "absolute", bottom: "-15%" }}>
						{/* <div className="absolute bottom-8 right-90"> */}
						<SpeechBubbleUp text="이제 본격적으로 OO님의 사주팔자를 분석해볼 차례네요." />
					</div>
				</BackgroundSection>
				<BackgroundSection
					backgroundImage="/second.png"
					aspectRatio="448 / 600">
					<div style={{ position: "absolute", bottom: "-5%", zIndex: 99999 }}>
						<SpeechBubbleDown text="제가 OO님의 사주를 보기 쉽게 표로 정리했어요." />
					</div>
				</BackgroundSection>
				<BackgroundSection
					backgroundImage="/third.png"
					aspectRatio="448 / 370"
				/>

				<div className="mt-10">
					<SajuTable data={dummySajuData} />
				</div>
			</div>
		</div>
	);
}
