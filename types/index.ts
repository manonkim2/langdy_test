export interface IChannel {
  id: string;
  name: string;
  handle: string;
  subscriberCount: string;
  description: string;
  avatarUrl: string;
  bannerUrl: string;
  tabs: string[];
}

export interface IVideo {
  id: string;
  title: string;
  thumbnailUrl: string;
  views: string;
  publishedAt: string;
  duration: string;
}

export interface ChannelResponse {
  channel: IChannel;
  videos: IVideo[];
}
