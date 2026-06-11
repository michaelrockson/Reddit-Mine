import React from "react";
import type { GreetingProps } from "./models/UiModels.ts";
import { useGreeting } from "./hooks/useGreeting.tsx";

export default function UserGreeting({
  username,
}: GreetingProps): React.JSX.Element {
  const { greetingMessage, greetingIcon } = useGreeting();

  const firstName = username.split(" ")[0];

  return (
    <div className="li-greeting">
      <div className="li-greeting-icon-wrap">{greetingIcon}</div>
      <div>
        <h2 className="li-greeting-headline">
          {greetingMessage}, <span>{firstName}</span>
        </h2>
        <p className="li-greeting-sub">
          Here's what's happening with your agents and pipelines today.
        </p>
      </div>
    </div>
  );
}
