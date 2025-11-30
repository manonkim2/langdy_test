import { MoreVertical, CheckCircle } from "lucide-react";
import { Video } from "@/types";
interface VideoCardProps {
  video: Video;
}

const VideoCard = ({ video }: VideoCardProps) => {
  return (
    <div className="flex flex-col gap-3 group cursor-pointer">
      {/* 썸네일 영역 */}
      <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100">
        {/* 실제 이미지 대신 배경색 사용 (이미지 있으면 <img /> 태그로 교체) */}
        <div
          className={`w-full h-full ${video.thumbnailUrl} group-hover:scale-105 transition-transform duration-200 ease-out`}
        />

        {/* 시간 뱃지 */}
        <span className="absolute bottom-1.5 right-1.5 bg-black/80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
          {video.duration}
        </span>
      </div>

      {/* 정보 영역 */}
      <div className="flex gap-3 items-start">
        {/* 아바타 영역 (메인 페이지 리스트용 - 채널 페이지에선 숨길 수도 있음) */}
        <div className="w-9 h-9 rounded-full bg-gray-300 shrink-0 mt-0.5" />

        <div className="flex flex-col flex-1 gap-1">
          {/* 제목 */}
          <h3 className="text-[15px] font-semibold text-gray-900 line-clamp-2 leading-snug group-hover:text-black">
            {video.title}
          </h3>

          {/* 메타 데이터 */}
          <div className="text-sm text-gray-600 flex flex-col">
            <div className="flex items-center hover:text-gray-900">
              <span>알려줘랭짱</span>
              <CheckCircle
                size={12}
                className="ml-1 text-gray-500 fill-current"
              />
            </div>
            <div className="flex items-center">
              <span>조회수 {video.views}</span>
              <span className="mx-1 text-[10px]">•</span>
              <span>{video.publishedAt}</span>
            </div>
          </div>
        </div>

        <button className="opacity-0 group-hover:opacity-100 p-1 -mr-2 hover:bg-gray-100 rounded-full transition-opacity">
          <MoreVertical size={18} className="text-gray-900" />
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
