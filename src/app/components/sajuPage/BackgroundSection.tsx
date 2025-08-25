interface BackgroundSectionProps {
	backgroundImage: string;
	aspectRatio?: string;
	children?: React.ReactNode;
}

export default function BackgroundSection({
	backgroundImage,
	aspectRatio = "448 / 600",
	children,
}: BackgroundSectionProps) {
	return (
		<section
			className="w-full bg-contain bg-center bg-no-repeat relative"
			style={{
				backgroundImage: `url('${backgroundImage}')`,
				aspectRatio: aspectRatio,
			}}>
			<div>{children}</div>
		</section>
	);
}
