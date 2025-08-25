// 단일 책임: 십이운성 행 렌더링
interface SibiunseongRowProps {
	twelveStates: string[];
}

export default function SibiunseongRow({ twelveStates }: SibiunseongRowProps) {
	const descriptions = ["(사)", "(제왕)", "(태)", "(장생)"];

	return (
		<div className="flex border-t border-black">
			<div className="flex-1 text-center py-4 px-2 border-r border-black bg-gray-100">
				<div className="text-base font-medium">十二運星</div>
				<div className="text-xs text-gray-600">(십이운성)</div>
			</div>
			{twelveStates.map((state, index) => (
				<div
					key={index}
					className={`flex-1 text-center py-4 px-2 ${
						index < 3 ? "border-r border-black" : ""
					}`}>
					<div className="text-base font-medium">{state}</div>
					<div className="text-xs text-gray-600">{descriptions[index]}</div>
				</div>
			))}
		</div>
	);
}
