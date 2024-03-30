import React from "react";
import ScreenSaver from "../../../../components/ScreenSaver";

export default function ColorPage({ params }) {
  return (
    <main className="screen-saver-wrapper">
      <ScreenSaver color={params.color} />
    </main>
  );
}
