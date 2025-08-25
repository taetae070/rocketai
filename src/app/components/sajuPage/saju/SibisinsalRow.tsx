// 단일 책임: 십이신살 행 렌더링
interface SibisinsalRowProps {
	twelveSpirits: string[];
}

export default function SibisinsalRow({ twelveSpirits }: SibisinsalRowProps) {
	const descriptions = ["(겁살)", "(지살)", "(역마살)", "(장성살)"];

	return (
		<div className="flex border-t border-black">
			<div className="flex-1 text-center py-4 px-2 border-r border-black bg-gray-100">
				<div className="text-base font-medium">十二神殺</div>
				<div className="text-xs text-gray-600">(십이신살)</div>
			</div>
			{twelveSpirits.map((spirit, index) => (
				<div
					key={index}
					className={`flex-1 text-center py-4 px-2 ${
						index < 3 ? "border-r border-black" : ""
					}`}>
					<div className="text-base font-medium">{spirit}</div>
					<div className="text-xs text-gray-600">{descriptions[index]}</div>
				</div>
			))}
		</div>
	);
}
