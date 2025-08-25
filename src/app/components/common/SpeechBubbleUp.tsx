interface SpeechBubbleUpProps {
	text?: string;
	className?: string;
}

export default function SpeechBubbleUp({
	text,
	className = "",
}: SpeechBubbleUpProps) {
	return (
		<div
			className={`relative mx-auto ${className}`}
			style={{ width: "260px" }}>
			<div
				className="relative flex items-center justify-center pointer-events-none"
				style={{
					width: "100%",
					height: "180px",
					background: "center / contain no-repeat url('/chat-upside.png')",
				}}>
				<div
					className="w-32 absolute flex items-center justify-center px-6 text-sm text-gray-800 text-center leading-tight"
					style={{
						width: "50%",
						marginTop: "7%",
					}}>
					{text}
				</div>
			</div>
		</div>
	);
}
