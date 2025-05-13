export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
  // {
  //   date: "March 2025",
  //   title: "Paper accepted at ICLR Workshop 2025",
  //   description: "A multi-agent system with dynamic knowledge integration has been accepted at ICLR Workshop 2025.",
  //   link: "https://iclragenticai.github.io/",
  // },
  // {
  //   date: "July 2024",
  //   title: "Paper accepted at IEEE ITSC 2024",
  //   description: "A dataset extension method for linguistic explanation of traffic risk due to road structure has been accepted at IEEE ITSC 2024.",
  //   link: "https://its.papercept.net/conferences/scripts/abstract.pl?ConfID=87&Number=419",
  // }
];
