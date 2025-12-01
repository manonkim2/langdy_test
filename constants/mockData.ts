import { IChannel, IVideo } from "@/types";

// 채널 목업 데이터
export const MOCK_CHANNEL: IChannel = {
  id: "알려줘랭짱",
  name: "알려줘랭짱",
  handle: "@langzzang",
  subscriberCount: "9.29만명",
  description: "랭디(Langdy) 일본어 오리지널 콘텐츠",
  avatarUrl: "channels4_profile.jpg",
  bannerUrl: "channels4_banner.jpg",
  tabs: ["홈", "동영상", "Shorts", "재생목록", "게시물"],
};

// 비디오 목업 데이터
export const MOCK_VIDEOS: IVideo[] = [
  {
    id: "v1",
    title: "잘때 틀어만 두세요 | 일본인 발음 연속듣기",
    thumbnailUrl: "thumbnail_1.webp",
    views: "1.2만회",
    publishedAt: "2일 전",
    duration: "10:05",
  },
  {
    id: "v2",
    title: " 일본어 동사 ない형 50 | 3일간 듣기만 하세요 ",
    thumbnailUrl: "thumbnail_2.webp",
    views: "8.5천회",
    publishedAt: "5일 전",
    duration: "15:20",
  },
  {
    id: "v3",
    title: " 일본어 た형, 일본인은 딱 이거만 써요 ",
    thumbnailUrl: "thumbnail_3.webp",
    views: "2.1만회",
    publishedAt: "2주 전",
    duration: "08:45",
  },
  {
    id: "v4",
    title: " 한본어 난무하는 곱창 먹방 ",
    thumbnailUrl: "thumbnail_1.webp",
    views: "5.2천회",
    publishedAt: "3주 전",
    duration: "12:10",
  },
  {
    id: "v5",
    title: "🇯🇵아주 보통의 일본어 속도",
    thumbnailUrl: "thumbnail_2.webp",
    views: "3만회",
    publishedAt: "1개월 전",
    duration: "05:00",
  },
  {
    id: "v6",
    title: " 일본어 て형, 이렇게 쉽다니! (+단어장 제공) ",
    thumbnailUrl: "thumbnail_3.webp",
    views: "4.5만회",
    publishedAt: "2개월 전",
    duration: "09:30",
  },
  {
    id: "v7",
    title: " 🇯🇵: 한국인 사기만 3번... 그래도 한국에 사는 이유 ",
    thumbnailUrl: "thumbnail_1.webp",
    views: "1.5천회",
    publishedAt: "3개월 전",
    duration: "21:15",
  },
  {
    id: "v8",
    title:
      " JLPT 단어 난이도? 일본인이 딱 정리해줄게요 | 독학 필수 일본어 단어200개 모음 ",
    thumbnailUrl: "thumbnail_2.webp",
    views: "10만회",
    publishedAt: "4개월 전",
    duration: "04:20",
  },
];
