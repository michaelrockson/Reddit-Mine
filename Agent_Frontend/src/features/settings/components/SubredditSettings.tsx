import { X } from "lucide-react";
import { useSubredditSettings } from "../hooks/useSubredditSettings.tsx";

export default function SubredditSettings() {
  const {
    activeCount,
    addSubreddit,
    draft,
    handleDraftChange,
    handleKeyDown,
    removeSubreddit,
    subreddits,
    toggleActive,
  } = useSubredditSettings();

  return (
    <div className="subreddit-settings-page">
      <div className="subreddit-settings-card">
        <div className="subreddit-settings-header">
          <h2 className="subreddit-settings-title">Reddit Sources</h2>
          <p className="subreddit-settings-subtitle">
            {activeCount} of {subreddits.length} active subreddits
          </p>
        </div>

        <div className="subreddit-settings-list-header">
          <span>Subreddit</span>
          <span>Active</span>
          <span className="subreddit-settings-column-spacer" />
        </div>

        {subreddits.map((sub) => (
          <div key={sub.id} className="subreddit-settings-row">
            <span
              className={`subreddit-settings-name ${sub.active ? "active" : ""}`}
            >
              {sub.name}
            </span>

            <button
              onClick={() => toggleActive(sub.id)}
              aria-label={`Toggle ${sub.name}`}
              className={`subreddit-settings-toggle ${sub.active ? "active" : ""}`}
            >
              <span className="subreddit-settings-toggle-thumb" />
            </button>

            <button
              onClick={() => removeSubreddit(sub.id)}
              aria-label={`Remove ${sub.name}`}
              className="subreddit-settings-remove"
            >
              <X size={15} />
            </button>
          </div>
        ))}

        <div className="subreddit-settings-form">
          <input
            value={draft}
            onChange={handleDraftChange}
            onKeyDown={handleKeyDown}
            placeholder="  r/ add subreddit…"
            className="subreddit-settings-input"
          />
          <button
            onClick={addSubreddit}
            className="li-btn li-btn-lg li-btn-primary"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
