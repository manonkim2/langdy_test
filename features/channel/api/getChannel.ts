import { IChannel } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const getChannel = async (): Promise<IChannel> => {
  const res = await fetch(`${BASE_URL}/api/channel`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch channel");

  return res.json();
};
