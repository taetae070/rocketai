interface SpeechBubbleDownProps {
	text?: string;
	className?: string;
}

export default function SpeechBubbleDown({
	text,
	className = "",
}: SpeechBubbleDownProps) {
	return (
		<div
			className={`relative mx-auto ${className}`}
			style={{ width: "260px" }}>
			<div
				className="relative flex items-center justify-center pointer-events-none"
				style={{
					width: "100%",
					height: "180px",
					background: "center / contain no-repeat url('/chat-downside.png')",
				}}>
				<div
					className="absolute inset-0 flex items-center justify-center px-6 text-sm text-gray-800 text-center leading-tight"
					style={{
						width: "50%",
						marginBottom: "7%",
					}}>
					{text}
				</div>
			</div>
		</div>
	);
}
