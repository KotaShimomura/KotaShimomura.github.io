export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2024—Present",
    institution: "Chubu University",
    degree: "Ph.D.,Department of InformationEngineering",
    advisor: "Prof. Takayoshi Yamashita and Prof. Hironobu Fujiyoshi",
  },
  {
    year: "2022—2024",
    institution: "Chubu University",
    degree: "M.E.,Department of InformationEngineering",
    thesis: "Potential Risk Localization using Single Monoculer Camera",
    advisor: "Prof. Takayoshi Yamashita and Prof. Hironobu Fujiyoshi",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
  {
    year: "2020—2022",
    institution: "Chubu University",
    degree: "B.E., Department of InformationEngineerin",
    thesis: "Failure Cause Analysis of Automotive Parts Using Machine Learning",
    advisor: "Prof. Tohgoroh Matsui",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
