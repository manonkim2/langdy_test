"use client";

import { useEffect, useState } from "react";

import VideoCard from "@/components/video/VideoCard";
import { ChannelResponse } from "@/types";
import ChannelHeader from "@/components/channel/Header";

const VideosPage = () => {
  const [data, setData] = useState<ChannelResponse | null>(null);
  const [loading, setLoading] = useState(true);

  // 1. 데이터 페칭 (Mock API 호출)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/channel");
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Failed to fetch data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 2. 로딩 상태 (스켈레톤 대신 심플한 스피너)
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  // 3. 에러 처리
  if (!data) return <div>채널 정보를 불러올 수 없습니다. 😢</div>;

  return (
    <div className="flex flex-col pb-20">
      {/* 채널 헤더 */}
      <ChannelHeader channel={data.channel} />

      {/* 필터 버튼 (최신순/인기순) */}
      <div className="px-4 md:px-12 mt-6 mb-4 flex gap-2">
        <button className="px-3 py-1.5 bg-black text-white text-sm font-medium rounded-lg">
          최신순
        </button>
        <button className="px-3 py-1.5 bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm font-medium rounded-lg transition-colors">
          인기순
        </button>
        <button className="px-3 py-1.5 bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm font-medium rounded-lg transition-colors">
          날짜순
        </button>
      </div>

      {/* 비디오 그리드 */}
      <div className="px-4 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
        {data.videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
        {/* 리스트가 풍성해 보이도록 데이터 뻥튀기 (선택사항) */}
        {data.videos.map((video) => (
          <VideoCard
            key={`${video.id}-dup`}
            video={{ ...video, id: `${video.id}-dup` }}
          />
        ))}
      </div>
    </div>
  );
};

export default VideosPage;
