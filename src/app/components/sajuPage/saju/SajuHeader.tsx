// 단일 책임: 사주표 헤더(時日月年) 렌더링
export default function SajuHeader() {
	return (
		<div className="flex border-t border-black">
			<div className="flex-1"></div>
			<div className="flex-1 text-center py-4 px-2 border-r border-black">
				<div className="text-3xl font-bold">時</div>
			</div>
			<div className="flex-1 text-center py-4 px-2 border-r border-black">
				<div className="text-3xl font-bold">日</div>
			</div>
			<div className="flex-1 text-center py-4 px-2 border-r border-black">
				<div className="text-3xl font-bold">月</div>
			</div>
			<div className="flex-1 text-center py-4 px-2">
				<div className="text-3xl font-bold">年</div>
			</div>
		</div>
	);
}
