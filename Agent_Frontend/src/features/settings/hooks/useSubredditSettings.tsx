import { useState, type ChangeEvent, type KeyboardEvent } from "react";

export interface Subreddit {
  id: number;
  name: string;
  active: boolean;
}

const INITIAL_SUBREDDITS: Subreddit[] = [
  { id: 1, name: "r/SaaS", active: true },
  { id: 2, name: "r/entrepreneur", active: true },
  { id: 3, name: "r/webdev", active: true },
  { id: 4, name: "r/smallbusiness", active: true },
  { id: 5, name: "r/freelance", active: true },
  { id: 6, name: "r/startups", active: true },
  { id: 7, name: "r/productivity", active: false },
  { id: 8, name: "r/nocode", active: false },
];

function normalizeSubreddit(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  const withoutPrefix = trimmed.replace(/^r\//i, "");
  return `r/${withoutPrefix}`;
}

export function useSubredditSettings() {
  const [subreddits, setSubreddits] = useState<Subreddit[]>(INITIAL_SUBREDDITS);
  const [draft, setDraft] = useState("");

  const activeCount = subreddits.filter((subreddit) => subreddit.active).length;

  function toggleActive(id: number) {
    setSubreddits((prev) =>
      prev.map((subreddit) =>
        subreddit.id === id
          ? { ...subreddit, active: !subreddit.active }
          : subreddit,
      ),
    );
  }

  function removeSubreddit(id: number) {
    setSubreddits((prev) => prev.filter((subreddit) => subreddit.id !== id));
  }

  function addSubreddit() {
    const name = normalizeSubreddit(draft);
    if (!name || name === "r/") return;

    const alreadyExists = subreddits.some(
      (subreddit) => subreddit.name.toLowerCase() === name.toLowerCase(),
    );

    if (alreadyExists) {
      setDraft("");
      return;
    }

    setSubreddits((prev) => [...prev, { id: Date.now(), name, active: true }]);
    setDraft("");
  }

  function handleDraftChange(event: ChangeEvent<HTMLInputElement>) {
    setDraft(event.target.value);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") addSubreddit();
  }

  return {
    subreddits,
    draft,
    activeCount,
    toggleActive,
    removeSubreddit,
    addSubreddit,
    handleDraftChange,
    handleKeyDown,
  };
}
