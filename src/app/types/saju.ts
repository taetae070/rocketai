// 사주 데이터 타입 정의
export interface SajuData {
	name: string;
	birthDate: string;
	birthTime: string;

	// 천간 (4개: 시, 일, 월, 년)
	heavenlyStems: string[];

	// 지지 (4개: 시, 일, 월, 년)
	earthlyBranches: string[];

	// 십성 (4개: 시, 일, 월, 년)
	tenGods: string[];

	// 십이운성 (4개: 시, 일, 월, 년)
	twelveStates: string[];

	// 십이신살 (4개: 시, 일, 월, 년)
	twelveSpirits: string[];

	// 귀인 (4개: 시, 일, 월, 년)
	noblemen: string[];
}

// 더미 데이터
export const dummySajuData: SajuData = {
	name: "김로켓",
	birthDate: "1980년 8월27일 08:10",
	birthTime: "08:10",

	heavenlyStems: ["壬", "丁", "癸", "癸"],
	earthlyBranches: ["寅", "巳", "亥", "西"],
	tenGods: ["상관", "비견", "상관", "상관"],
	twelveStates: ["死", "帝旺", "胎", "長生"],
	twelveSpirits: ["劫殺", "地殺", "驛馬殺", "將星殺"],
	noblemen: ["", "", "天乙", "太極\n文昌"],
};
