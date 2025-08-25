// 단일 책임: 십성 행 렌더링
interface SipseongRowProps {
	tenGods: string[];
}

export default function SipseongRow({ tenGods }: SipseongRowProps) {
	const descriptions = ["(상관)", "(비견)", "(상관)", "(상관)"];

	return (
		<div className="flex border-t border-black">
			<div className="flex-1 text-center py-4 px-2 border-r border-black bg-gray-100">
				<div className="text-base font-medium">十星</div>
				<div className="text-xs text-gray-600">(십성)</div>
			</div>
			{tenGods.map((god, index) => (
				<div
					key={index}
					className={`flex-1 text-center py-4 px-2 ${
						index < 3 ? "border-r border-black" : ""
					}`}>
					<div className="text-base font-medium">{god}</div>
					<div className="text-xs text-gray-600">{descriptions[index]}</div>
				</div>
			))}
		</div>
	);
}
