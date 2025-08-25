// 단일 책임: 사주표의 한 행을 렌더링하는 컴포넌트
interface SajuRowProps {
	label: string;
	values: string[];
	className?: string;
	valueClassName?: string;
}

export default function SajuRow({
	label,
	values,
	className = "",
	valueClassName = "",
}: SajuRowProps) {
	return (
		<tr className={className}>
			<td className="border border-gray-400 bg-gray-100 text-center py-2 px-1 text-sm font-medium">
				<div className="text-xs text-gray-600 mb-1">{label}</div>
			</td>
			{values.map((value, index) => (
				<td
					key={index}
					className={`border border-gray-400 text-center py-2 px-1 ${valueClassName}`}>
					<div className="text-sm font-medium whitespace-pre-line">
						{value || ""}
					</div>
				</td>
			))}
		</tr>
	);
}
