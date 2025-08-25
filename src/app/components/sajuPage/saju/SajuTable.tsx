import { SajuData } from "@app/types/saju";
import SajuHeader from "./SajuHeader";
import SipseongRow from "./SipseongRow";
import CheonganRow from "./CheonganRow";
import JijiRow from "./JijiRow";
import SibiunseongRow from "./SibiunseongRow";
import SibisinsalRow from "./SibisinsalRow";
import GwiinRow from "./GwiinRow";

// 단일 책임: 사주표 전체를 렌더링하는 컴포넌트
interface SajuTableProps {
	data: SajuData;
}

export default function SajuTable({ data }: SajuTableProps) {
	return (
		<div
			className="mt-10 mx-auto p-4 sm:p-6 font-serif bg-contain bg-center bg-no-repeat"
			style={{
				width: "90%",
				backgroundImage: "url('/frame-saju.png')",
			}}>
			{/* 상단 제목 */}
			<div className="flex flex-col gap-6">
				<div className="text-center">
					<h2 className="text-lg font-bold mb-2">{data.name}의 사주</h2>
					<p className="text-base font-medium">{data.birthDate}</p>
				</div>

				{/* 사주표 전체 */}
				<div className="flex flex-col gap-1">
					{/* 헤더 (時日月年) - 표 내부 첫 행 */}
					<SajuHeader />
					{/* 십성 행 */}
					<SipseongRow tenGods={data.tenGods} />
					{/* 천간 행 */}
					<CheonganRow heavenlyStems={data.heavenlyStems} />
					{/* 지지 행 */}
					<JijiRow earthlyBranches={data.earthlyBranches} />
					{/* 십이운성 행 */}
					<SibiunseongRow twelveStates={data.twelveStates} />
					{/* 십이신살 행 */}
					<SibisinsalRow twelveSpirits={data.twelveSpirits} />
					{/* 귀인 행 */}
					<GwiinRow noblemen={data.noblemen} />
				</div>
			</div>
		</div>
	);
}
