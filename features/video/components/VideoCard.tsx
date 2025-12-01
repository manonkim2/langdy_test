import Image from "next/image";

import { IVideo } from "@/types";

interface VideoCardProps {
  video: IVideo;
}

const VideoCard = ({ video }: VideoCardProps) => {
  return (
    <div className="flex flex-col gap-3 group cursor-pointer">
      {/* 1. 썸네일 영역 */}
      <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100">
        <Image
          src={`/${video.thumbnailUrl}`}
          alt={video.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-200 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <span className="absolute bottom-1.5 right-1.5 bg-black/80 text-white text-xs font-medium px-1.5 py-0.5 rounded z-10">
          {video.duration}
        </span>
      </div>

      {/* 2. 정보 영역 */}
      <div className="flex gap-3 items-start">
        <div className="relative shrink-0 mt-0.5">
          <Image
            src="/channels4_profile.jpg"
            alt="Channel Avatar"
            width={36}
            height={36}
            className="rounded-full object-cover"
          />
        </div>

        <div className="flex flex-col flex-1 gap-1">
          <h3 className="text-[15px] font-semibold text-gray-900 line-clamp-2 leading-snug group-hover:text-black">
            {video.title}
          </h3>

          <div className="text-xs text-gray-600 flex items-center">
            <span>조회수 {video.views}</span>
            <span className="mx-1 text-[10px]">•</span>
            <span>{video.publishedAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
