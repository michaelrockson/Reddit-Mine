import React from "react";
import { SpinnerRoundOutlined } from "spinners-react";

export default function LoadingScreen(): React.JSX.Element {
  return (
    <section
      className="li-flex li-items-center li-justify-center li-px-md li-animate-fade-in"
      style={{ minHeight: "80vh" }}
    >
      <div className="li-flex-col li-text-center">
        <SpinnerRoundOutlined size={80} color="#f7f8f8" />
        <p className="li-text-lg li-text-secondary li-mx-auto li-mt-md">
          We're Loading Your Page Content...
        </p>
      </div>
    </section>
  );
}
