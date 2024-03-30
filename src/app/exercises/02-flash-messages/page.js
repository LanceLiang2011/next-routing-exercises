import React from "react";
import Link from "next/link";
import toast from "react-hot-toast";

function FlashMsgExercise() {
  return (
    <main>
      <h1>Welcome to my website!</h1>
      <p>
        Got feedback? Please{" "}
        <Link href="/exercises/02-flash-messages/contact">contact us</Link>.
      </p>
    </main>
  );
}

export default FlashMsgExercise;
