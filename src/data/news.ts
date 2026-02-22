export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
  {
    date: "February 2026",
    title: "Paper accepted at CVPR2026",
    description: "P2GS: Physical Prior-guided Gaussian Splatting for Photometrically Consistent Urban Reconstruction has been accepted at CVPR2026.",
    link: "https://cvpr.thecvf.com/",
  },
  // {
  //   date: "July 2024",
  //   title: "Paper accepted at IEEE ITSC 2024",
  //   description: "A dataset extension method for linguistic explanation of traffic risk due to road structure has been accepted at IEEE ITSC 2024.",
  //   link: "https://its.papercept.net/conferences/scripts/abstract.pl?ConfID=87&Number=419",
  // }
];
