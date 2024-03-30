import React from "react";

import Link from "next/link";

const COLORS = ["red", "blue", "pink", "hotpink"];

function ScreenSaverExercise() {
  return (
    <main>
      <ul>
        {COLORS.map((c) => (
          <li key={c}>
            <Link href={`/exercises/01-screensaver/${c}`}>
              {c[0].toUpperCase() + c.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ScreenSaverExercise;
