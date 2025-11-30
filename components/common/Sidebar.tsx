import {
  Home,
  PlaySquare,
  Clock,
  ThumbsUp,
  Film,
  Flame,
  ShoppingBag,
  Music2,
  Gamepad2,
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { icon: <Home size={20} />, label: "홈" },
    { icon: <PlaySquare size={20} />, label: "Shorts" },
    { icon: <Film size={20} />, label: "구독" },
    { divider: true },
    { icon: <Clock size={20} />, label: "시청 기록" },
    { icon: <ThumbsUp size={20} />, label: "좋아요 표시한 동영상" },
    { divider: true },
    { title: "탐색" },
    { icon: <Flame size={20} />, label: "인기 급상승" },
    { icon: <ShoppingBag size={20} />, label: "쇼핑" },
    { icon: <Music2 size={20} />, label: "음악" },
    { icon: <Gamepad2 size={20} />, label: "게임" },
  ];

  return (
    <aside className="fixed left-0 top-14 bottom-0 w-60 hover:overflow-y-auto bg-white hidden md:block z-40 pb-4 scrollbar-hide">
      <div className="px-3 py-3">
        {menuItems.map((item, idx) => {
          if (item.divider)
            return (
              <div key={idx} className="my-3 border-t border-gray-200 mx-2" />
            );

          if (item.title)
            return (
              <div
                key={idx}
                className="px-3 py-2 text-base font-bold text-gray-900 mt-2"
              >
                {item.title}
              </div>
            );

          return (
            <div
              key={idx}
              className="flex items-center px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
            >
              <div className="mr-5 text-gray-900">{item.icon}</div>
              <span className="text-sm font-medium text-gray-900 truncate">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>

      <div className="px-5 mt-4 text-[11px] font-medium text-gray-500">
        <p className="mb-2">
          소개 보도자료 저작권
          <br />
          문의하기 크리에이터
          <br />
          광고 개발자
        </p>
        <p>© 2025 Google LLC</p>
      </div>
    </aside>
  );
};

export default Sidebar;
