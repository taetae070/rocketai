// 단일 책임: 천간 행 렌더링
interface CheonganRowProps {
	heavenlyStems: string[];
}

export default function CheonganRow({ heavenlyStems }: CheonganRowProps) {
	const colors = ["#2d3748", "#c53030", "#2d3748", "#2d3748"];
	const descriptions = ["임수", "정화", "계수", "계수"];

	return (
		<div className="flex border-t border-black">
			<div className="flex-1 text-center py-5 px-2 border-r border-black bg-gray-100">
				<div className="text-base font-medium">天干</div>
				<div className="text-xs text-gray-600">(천간)</div>
			</div>
			{heavenlyStems.map((stem, index) => (
				<div
					key={index}
					className={`flex-1 text-center py-5 px-2 ${
						index < 3 ? "border-r border-black" : ""
					}`}>
					<div
						className="inline-block w-14 h-14 rounded-lg flex items-center justify-center text-white text-2xl font-bold mx-auto"
						style={{ backgroundColor: colors[index] }}>
						{stem}
					</div>
					<div className="text-xs text-gray-600 mt-2">
						{descriptions[index]}
					</div>
				</div>
			))}
		</div>
	);
}
