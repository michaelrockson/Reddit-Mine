import { useState } from "react";

const subredditData = [
  {
    subreddit: "r/freelance",
    posts: 72,
    problems: 34,
  },
  {
    subreddit: "r/webdev",
    posts: 128,
    problems: 57,
  },
  {
    subreddit: "r/startups",
    posts: 94,
    problems: 43,
  },
  {
    subreddit: "r/entrepreneur",
    posts: 156,
    problems: 71,
  },
  {
    subreddit: "r/SaaS",
    posts: 67,
    problems: 29,
  },
  {
    subreddit: "r/smallbusiness",
    posts: 113,
    problems: 52,
  },
  {
    subreddit: "r/marketing",
    posts: 89,
    problems: 38,
  },
  {
    subreddit: "r/ProductManagement",
    posts: 76,
    problems: 31,
  },
];

export default function useReportSubredditChart() {
  const [reportsChartData] = useState(subredditData);

  return { reportsChartData };
}
