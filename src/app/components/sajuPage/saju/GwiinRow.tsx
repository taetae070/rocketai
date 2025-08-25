// 단일 책임: 귀인 행 렌더링
interface GwiinRowProps {
	noblemen: string[];
}

export default function GwiinRow({ noblemen }: GwiinRowProps) {
	return (
		<div className="flex border-t border-b border-black">
			<div className="flex-1 text-center py-5 px-2 border-r border-black bg-gray-100">
				<div className="text-base font-medium">貴人</div>
				<div className="text-xs text-gray-600">(귀인)</div>
			</div>
			<div className="flex-1 text-center py-5 px-2 border-r border-black">
				<div className="text-base font-medium">{noblemen[0] || ""}</div>
				<div className="text-xs text-gray-600">(없음)</div>
			</div>
			<div className="flex-1 text-center py-5 px-2 border-r border-black">
				<div className="text-base font-medium">{noblemen[1] || ""}</div>
				<div className="text-xs text-gray-600">(없음)</div>
			</div>
			<div className="flex-1 text-center py-5 px-2 border-r border-black">
				<div className="text-base font-medium">天乙</div>
				<div className="text-xs text-gray-600">(천을귀인)</div>
			</div>
			<div className="flex-1 text-center py-5 px-2">
				<div className="text-base font-medium">太極</div>
				<div className="text-xs text-gray-600 mb-1">(태극귀인)</div>
				<div className="text-base font-medium">文昌</div>
				<div className="text-xs text-gray-600">(문창귀인)</div>
			</div>
		</div>
	);
}
