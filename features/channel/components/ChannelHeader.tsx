import Image from "next/image";
import { CheckCircle, Bell } from "lucide-react";

import { IChannel } from "@/types";

interface ChannelHeaderProps {
  channel: IChannel;
}

const ChannelHeader = ({ channel }: ChannelHeaderProps) => {
  return (
    <div className="flex flex-col w-full">
      {/* 1. 채널 배너 */}
      <div className="relative w-full h-32 md:h-52 rounded-xl overflow-hidden mb-6 bg-gray-100">
        <Image
          src={`/${channel.bannerUrl}`}
          objectFit="object-cover"
          alt="channel-image"
          fill
          className="rounded-xl"
        />
      </div>

      {/* 2. 채널 정보 섹션 */}
      <div className="flex flex-col md:flex-row px-4 md:px-12 gap-6 mb-6">
        {/* 프사 */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-white overflow-hidden relative">
          <Image src={`/${channel.avatarUrl}`} alt="channel-avatar" fill />
        </div>

        {/* 텍스트 정보 */}
        <div className="flex flex-col justify-center flex-1 gap-2">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {channel.name}
            </h1>
            <CheckCircle size={18} className="text-gray-500 fill-current" />
          </div>

          <div className="text-sm text-gray-500 flex flex-wrap gap-2 items-center font-medium">
            <span>{channel.handle}</span>
            <span className="text-[10px]">•</span>
            <span>구독자 {channel.subscriberCount}명</span>
            <span className="text-[10px]">•</span>
            <span>동영상 32개</span>
          </div>

          <p className="text-sm text-gray-500 line-clamp-1 max-w-2xl cursor-pointer hover:text-gray-700">
            {channel.description}{" "}
            <span className="font-semibold text-gray-900 ml-1">더보기</span>
          </p>

          {/* 구독 버튼 그룹 */}
          <div className="flex gap-2 mt-2">
            <button className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-colors">
              구독중
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-900 text-sm font-semibold rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2">
              <Bell size={16} />
              <span className="hidden sm:inline">알림 설정</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. 탭 메뉴  */}
      <div className="flex gap-1 border-b border-gray-200 px-4 md:px-12 overflow-x-auto sticky top-14 bg-white z-30 scrollbar-hide">
        {channel.tabs.map((tab) => (
          <button
            key={tab}
            className={`px-6 py-3 text-sm font-semibold whitespace-nowrap border-b-[3px] transition-colors
              ${
                tab === "동영상"
                  ? "border-gray-900 text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChannelHeader;
