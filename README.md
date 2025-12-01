### 랭디 프론트엔드 개발자 사전 과제

#### 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data Fetching**: Mock API (Next.js Route Handlers)

### 💡 아키텍처 및 설계 의도 (Architecture Decisions)

#### 1. FSD(Feature-Sliced Design) 기반 모듈화 전략

단순한 파일 분리를 넘어, 시스템의 **응집도와 확장성**을 동시에 확보하는 모듈화 전략을 채택했습니다.

- `features/`: 채널, 비디오 등 **핵심 도메인 단위**로 컴포넌트, 데이터 페칭 로직, 타입을 수직적으로 격리하여 **높은 응집도**를 구현했습니다. 이는 기능 추가/제거 시 영향 범위를 최소화하여 **장기적인 확장성**에 유리합니다.
- `components/`: **도메인 독립적인** Button 등 공통 UI 요소와 Layout을 분리하여 **재사용성**과 **유지보수 표준**을 확립했습니다.

#### 2. RSC(Server Component)를 활용한 렌더링 최적화

유튜브 페이지의 핵심인 **초기 로딩 성능(TTFB)**과 **SEO**를 위해 컴포넌트 렌더링 주체를 명확히 분리했습니다.

- **Server Component (SC)**: `app/page.tsx`는 **데이터 오케스트레이션** 및 **Server-Side Parallel Fetching (`Promise.all`)**을 통해 데이터 지연을 최소화합니다.
- **Client Component (CC) 격리**: 상호작용이 없는 UI 영역은 SC로 유지하여 **Zero Runtime Overhead**를 달성할 **수 있는 구조를 선제적으로 마련**했습니다. 상호작용이 필요한 컴포넌트만 **Leaf Component** 형태로 분리하여 **잠재적인 JS 번들 사이즈**를 극단적으로 최소화하도록 설계했습니다.

#### 3. 중첩 레이아웃(Nested Layout)을 통한 구조적 분리

요구사항인 **레이아웃과 페이지 컨텐츠의 분리**를 Next.js의 핵심 기능인 중첩 레이아웃으로 해결했습니다.

- `app/channel/[id]/layout.tsx`에 `Header`와 `Sidebar`를 배치하여 페이지 이동 시 **리렌더링을 방지**하고 네비게이션을 **SPA(Single Page Application)처럼** 고정했습니다.

#### 4. RESTful Mock API 설계 및 데이터 처리

- **리소스 분리**: 채널 정보와 비디오 리스트를 각각의 독립적인 RESTful 리소스(`api/channel`, `api/channel/videos`)로 분리했습니다. 이는 **페이지네이션, 무한 스크롤** 등 추후 데이터 확장에 필요한 유연성을 제공합니다.

### 📂 Directory Structure

```
.
├── app/
│   ├── api/                     \# Route Handlers (Mock API)
│   ├── channel/[id]/videos/
│   │   └── page.tsx             \# Server Component: 데이터 페칭 담당
│   └── channel/[id]/layout.tsx  \# Header/Sidebar 고정
│
├── features/                    \# 핵심 기능 (도메인)
│   ├── channel/
│   │   ├── api/                 \# getChannel fetcher 함수
│   │   └── components/          \# ChannelHeader 등 UI
│   └── video/
│       ├── api/                 \# getVideos fetcher 함수
│       └── components/          \# VideoList, VideoCard 등 UI
│
├── components/
│   ├── ui/                      \# Button 등 원자 컴포넌트
│   └── layout/                  \# Header, Sidebar
│
├── types/                       \# TypeScript 인터페이스
├── constants/                   \# Mock Data 상수
└── .env.local                   \# NEXT\_PUBLIC\_API\_URL 포함

```

### 🚀 How to Run

1. 의존성 설치

```
yarn install
```

2. 환경 변수 설정
   프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 입력합니다.

```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

3. 개발 서버 실행

```
yarn run dev
```

4. 접속

```
브라우저에서 `http://localhost:3000`으로 접속 (자동 리다이렉트)
```
