export const initialState = [
  {
    cardTitle: "New Draft",
    xs: 12,
    sm: 12,
    md: 4,
    lg: 4,
    xl: 3,
  },
  {
    cardTitle: "Discussions",
    xs: 12,
    sm: 12,
    md: 5,
    lg: 5,
    xl: 6,
    cardBody: [
      {
        image:
          "https://designrevision.com/demo/shards-dashboard-lite/images/avatars/1.jpg",
        title: "James Johnson on Hello World! – 3 days ago",
        desc: "Well, the way they make shows is, they make one show ...",
      },
      {
        image:
          "https://designrevision.com/demo/shards-dashboard-lite/images/avatars/2.jpg",
        title: "James Johnson on Hello World! – 3 days ago",
        desc: "After the avalanche, it took us a week to climb out. Now...",
      },
      {
        image:
          "https://designrevision.com/demo/shards-dashboard-lite/images/avatars/3.jpg",
        title: "James Johnson on Hello World! – 3 days ago",
        desc: "My money's in that office, right? If she start giving me...",
      },
    ],
  },
  {
    cardTitle: "Top Refferals",
    xs: 12,
    sm: 12,
    md: 3,
    lg: 3,
    xl: 3,
    cardBody: [
      { type: "display", userName: "Jhon Doe", money: "$4,100" },
      { type: "display", userName: "Pacc Man", money: "$2,345" },
      { type: "display", userName: "Jim Brown", money: "$3,000" },
      { type: "display", userName: "Jhon Doe", money: "$4,100" },
      { type: "display", userName: "Pacc Man", money: "$2,345" },
      { type: "display", userName: "Jim Brown", money: "$3,000" },
      { type: "display", userName: "Jhon Doe", money: "$4,100" },
      { type: "display", userName: "Pacc Man", money: "$2,345" },
      { type: "component", placeholder: "Last Week", linkText: "View Report" },
    ],
  },
];
