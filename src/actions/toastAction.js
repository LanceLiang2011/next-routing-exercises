"use server";
import { redirect } from "next/navigation";

export const handleSubmit = async () => {
  "use server";

  redirect("/exercises/02-flash-messages");
};
