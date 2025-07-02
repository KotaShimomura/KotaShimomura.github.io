export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
    {
    date: "July 2025",
    title: "Paper accepted at IEEE ITSC 2025",
    description: "Enhancing Navigation Text Generation and Visual Explanation Using Spatio-Temporal Scene Graphs with Graph Attention Networks",
    link: "https://ieee-itsc.org/2025/",
  },
  {
    date: "June 2025",
    title: "Paper accepted at ICCV2025",
    description: "OD-RASE: Ontology-Driven Risk Assessment and Safety Enhancement for Autonomous Driving",
    link: "https://iccv.thecvf.com/",
  },
  // {
  //   date: "July 2024",
  //   title: "Paper accepted at IEEE ITSC 2024",
  //   description: "A dataset extension method for linguistic explanation of traffic risk due to road structure has been accepted at IEEE ITSC 2024.",
  //   link: "https://its.papercept.net/conferences/scripts/abstract.pl?ConfID=87&Number=419",
  // }
];
