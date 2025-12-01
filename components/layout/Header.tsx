import { Menu, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-white flex items-center justify-between px-4 z-50 border-b border-gray-100 md:border-none">
      {/* 1. 로고 & 메뉴 영역 */}
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Menu size={20} className="text-gray-900" />
        </button>
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="w-8 h-5 bg-red-600 rounded-lg flex items-center justify-center relative">
            <div className="w-0 h-0 border-t-[3px] border-t-transparent border-l-[6px] border-l-white border-b-[3px] border-b-transparent ml-0.5"></div>
          </div>
          <span className="text-xl font-bold tracking-tighter font-sans relative bottom-px">
            YouTube
          </span>
        </div>
      </div>

      {/* 2. 검색창 영역  */}
      <div className="hidden md:flex items-center flex-1 max-w-[600px] ml-10">
        <div className="flex w-full">
          <div className="flex w-full relative">
            <input
              type="text"
              placeholder="검색"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500 shadow-inner text-sm"
            />
          </div>
          <button className="px-5 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200 transition-colors">
            <Search size={18} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* 3. 우측 아이콘 영역 */}
      <button className="p-1.5 ml-2 hover:bg-gray-100 rounded-full">
        <div className="w-8 h-8 bg-purple-600 rounded-full text-white flex items-center justify-center text-sm font-medium">
          L
        </div>
      </button>
    </header>
  );
};

export default Header;
