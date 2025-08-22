export default function Home() {
	return (
		<div className="py-8">
			<div className="text-center mb-8">
				<h1 className="text-2xl font-bold text-gray-800 mb-2">
					프론트엔드 반응형 코딩테스트
				</h1>
				        <p className="text-gray-600">
          디자인 에셋을 바탕으로 반응형 웹페이지를 구현합니다
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Vercel 배포 준비 완료
        </p>
			</div>

			<div className="bg-white rounded-lg shadow-md p-6">
				<h2 className="text-lg font-semibold mb-4">프로젝트 설정 완료</h2>
				<div className="space-y-2">
					<div className="flex items-center text-green-600">
						<span className="mr-2">✓</span>
						<span>Next.js 프로젝트 생성</span>
					</div>
					<div className="flex items-center text-green-600">
						<span className="mr-2">✓</span>
						<span>Tailwind CSS 설정</span>
					</div>
					<div className="flex items-center text-green-600">
						<span className="mr-2">✓</span>
						<span>반응형 레이아웃 기본 설정 (max-w-md: 448px)</span>
					</div>
					<div className="flex items-center text-green-600">
						<span className="mr-2">✓</span>
						<span>프로젝트 폴더 구조 설정</span>
					</div>
				</div>
			</div>
		</div>
	);
}
