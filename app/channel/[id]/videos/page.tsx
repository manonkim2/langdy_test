import { getChannel } from "@/features/channel/api/getChannel";
import { getVideos } from "@/features/video/api/getVideos";
import ChannelHeader from "@/features/channel/components/ChannelHeader";
import VideosView from "@/features/video/VideosView";

export default async function Page() {
  const [channel, videos] = await Promise.all([getChannel(), getVideos()]);

  return (
    <div className="flex flex-col pb-20">
      <ChannelHeader channel={channel} />
      <VideosView videos={videos} />
    </div>
  );
}
