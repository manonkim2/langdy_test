import Button from "@/components/ui/Button";
import VideoCard from "@/features/video/components/VideoCard";
import { IVideo } from "@/types";

interface VideosViewProps {
  videos: IVideo[];
}

const VideosView = ({ videos }: VideosViewProps) => {
  return (
    <>
      {/* 필터 버튼 */}
      <div className="px-4 md:px-12 mt-6 mb-4 flex gap-2">
        <Button variant="primary">최신순</Button>
        <Button>인기순</Button>
        <Button>날짜순</Button>
      </div>

      {/* 비디오 그리드 */}
      <div className="px-4 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
        {/* 더미 추가 */}
        {videos.map((video) => (
          <VideoCard
            key={`${video.id}-dup`}
            video={{ ...video, id: `${video.id}-dup` }}
          />
        ))}
      </div>
    </>
  );
};

export default VideosView;
