export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  // {
  //   year: "2024",
  //   conference: "NeurIPS",
  //   title: "Scalable Causal Discovery in High-Dimensional Time Series",
  //   authors: "Jane Smith, Sarah Johnson, Yue Zhang",
  //   paperUrl: "https://arxiv.org/abs/2409.15476",
  //   //bibtex: "https://arxiv.org/abs/2409.15476.bib",
  //   tldr: "Using causal discovery to find the causal structure of high-dimensional time series data.",
  //   // if you have an image in public/images, you can use it like this:
  //   // imageUrl: "/images/publication-image.jpg"
  // },
  {
    year: "2025",
    conference: "ICLR Workshop",
    title: "Dynamic Knowledge Integration in Multi-Agent Systems for Content Inference",
    authors: "Atsushi Yamamoto, Takumi Iida, Taito Naruki, Akihiko Katagiri, Yudai Koike, Ryuta Shimogauchi, Kota Shimomura, Eri Onami, Koki Inoue, Osamu Ito",
    paperUrl: "https://openreview.net/pdf?id=5XNYu4rBe4",
  },
  {
    year: "2024",
    conference: "IEEE 27th ITSC",
    title: "How to Extend the Dataset to Account for Traffic Risk Considering the Surrounding Environment",
    authors: "Kota Shimomura, Koki Inoue, Kazuaki Ohmori, Ryuta Shimogauchi, Ryota Mimura, Atsuya Ishikawa, Takayuki Kawabuchi",
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/10920145",
  },

  {
    year: "2024",
    conference: "CVPR Workshops",
    title: "Potential Risk Localization via Weak Labeling out of Blind Spot",
    authors: "Kota Shimomura, Tsubasa Hirakawa, Takayoshi Yamashita, Hironobu Fujiyoshi",
    paperUrl: "https://openaccess.thecvf.com/content/CVPR2024W/WAD/html/Shimomura_Potential_Risk_Localization_via_Weak_Labeling_out_of_Blind_Spot_CVPRW_2024_paper.html",
    bibtex: "https://openaccess.thecvf.com/content/CVPR2024W/WAD/html/Shimomura_Potential_Risk_Localization_via_Weak_Labeling_out_of_Blind_Spot_CVPRW_2024_paper.html",
    // tldr: "Potential Risk Estimation with Single Monocular Camera.",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2024",
    conference: "2024 IEEE Intelligent Vehicles Symposium (IV)",
    title: "Human-like Guidance by Generating Navigation Using Spatial-Temporal Scene Graph",
    authors: "Hayato Suzuki, Kota Shimomura, Tsubasa Hirakawa, Takayoshi Yamashita, Hironobu Fujiyoshi, Shota Okubo, Nanri Takuya, Wang Siyuan",
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/10588867",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    // tldr: "Potential Risk Estimation with Single Monocular Camera.",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2023",
    conference: "IEEE 26th ITSC",
    title: "Human-like Guidance with Gaze Estimation and Classification-based Text Generation",
    authors: "Masaki Nambata, Kota Shimomura, Tsubasa Hirakawa, Takayoshi Yamashita, Hironobu Fujiyoshi",
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/10422062",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    // tldr: "Potential Risk Estimation with Single Monocular Camera.",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2023",
    conference: "CVPR Workshops",
    title: "Potential Risk Estimation with Single Monocular Camera",
    authors: "Kota Shimomura, Hiroki Adachi, Tsubasa Hirakawa, Takayoshi Yamashita, Hironobu Fujiyoshi, Masamitsu Tsuchiya, Yuji Yasui",
    paperUrl: "https://trust-ai.github.io/SSAD2023/assets/papers/4.pdf",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    // tldr: "Potential Risk Estimation with Single Monocular Camera.",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
];
