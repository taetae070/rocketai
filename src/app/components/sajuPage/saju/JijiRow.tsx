// 단일 책임: 지지 행 렌더링
interface JijiRowProps {
	earthlyBranches: string[];
}

export default function JijiRow({ earthlyBranches }: JijiRowProps) {
	const colors = ["#38a169", "#c53030", "#2d3748", "white"];
	const descriptions = ["임목", "사화", "해수", "유금"];

	return (
		<div className="flex border-t border-black">
			<div className="flex-1 text-center py-5 px-2 border-r border-black bg-gray-100">
				<div className="text-base font-medium">地支</div>
				<div className="text-xs text-gray-600">(지지)</div>
			</div>
			{earthlyBranches.map((branch, index) => (
				<div
					key={index}
					className={`flex-1 text-center py-5 px-2 ${
						index < 3 ? "border-r border-black" : ""
					}`}>
					{index === 3 ? (
						<div className="inline-block w-14 h-14 rounded-lg flex items-center justify-center text-black text-2xl font-bold border-2 border-black bg-white mx-auto">
							{branch}
						</div>
					) : (
						<div
							className="inline-block w-14 h-14 rounded-lg flex items-center justify-center text-white text-2xl font-bold mx-auto"
							style={{ backgroundColor: colors[index] }}>
							{branch}
						</div>
					)}
					<div className="text-xs text-gray-600 mt-2">
						{descriptions[index]}
					</div>
				</div>
			))}
		</div>
	);
}
