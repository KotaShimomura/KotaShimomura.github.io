export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
  {
    date: "Sept 2026",
    title: "Preprint at arXiv",
    description: "EviSplat: Preserving Multi-View Evidence in 3D Gaussian Splatting for Open-Vocabulary Segmentation",
    link: "https://arxiv.org/abs/2609.34853",
  },
  // {
  //   date: "February 2026",
  //   title: "Paper accepted at CVPR2026",
  //   description: "P2GS: Physical Prior-guided Gaussian Splatting for Photometrically Consistent Urban Reconstruction has been accepted at CVPR2026.",
  //   link: "https://cvpr.thecvf.com/",
  // },
  // {
  //   date: "July 2024",
  //   title: "Paper accepted at IEEE ITSC 2024",
  //   description: "A dataset extension method for linguistic explanation of traffic risk due to road structure has been accepted at IEEE ITSC 2024.",
  //   link: "https://its.papercept.net/conferences/scripts/abstract.pl?ConfID=87&Number=419",
  // }
];
