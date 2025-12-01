import { IVideo } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const getVideos = async (): Promise<IVideo[]> => {
  const res = await fetch(`${BASE_URL}/api/channel/videos`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch videos");

  return res.json();
};
