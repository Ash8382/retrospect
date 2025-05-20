💡 프로젝트 구상 – 개인 포트폴리오 V2
🎯 주요 목표
기술 스택 사용법 복습 (TS + React + Chakra + Supabase)

SSR or CSR 구조 선택해 배포 가능하게

데이터 기반 구성 (ex. 프로젝트 목록, 블로그 등 동적 처리)

확장성과 재사용성 고려한 UI 구조 설계

🔧 기술 스택 구성
분류	스택
프론트엔드	React + TypeScript + Chakra UI
인증 & DB	Supabase (인증 + DB)
백엔드 (선택적)	Node.js (API 프록시나 SSR용)
배포	Vercel (또는 Netlify), Supabase 호스팅
기타	GitHub Actions (배포 자동화), Markdown 렌더링 (react-markdown)

📦 주요 기능 리스트
1. 소개 페이지 (Home)
간단한 자기 소개

기술 스택 리스트 (아이콘 or 뱃지 스타일)

소셜 링크 (GitHub, 블로그, 이메일 등)

2. 프로젝트 목록 (Projects)
Supabase에서 동적으로 데이터 불러오기

썸네일, 설명, 기술스택, 링크 포함

필터/검색 (ex. "React", "Fullstack" 등 태그)

3. 블로그 연동 (Blog)
Supabase에 마크다운 저장 → 렌더링

정적 or 동적 라우팅

글 리스트 + 상세 페이지

4. 경력/이력 페이지 (Career or Resume)
이력 정리 + 기술 히스토리 (표 형태 or 타임라인)

PDF 다운로드 기능 (선택)

5. 로그인 기능 (선택)
(본인만 글 작성/수정 가능하게)

Supabase Auth → OAuth(GitHub 로그인) 등

🧱 폴더 구조 예시 (프론트)
bash
복사
편집
/src
  /components      → 재사용 UI 컴포넌트
  /pages           → 라우팅 페이지
  /hooks           → 커스텀 훅
  /services        → Supabase API 호출 모듈
  /types           → TypeScript 타입 정의
  /utils           → 날짜 포맷 등 유틸 함수
  /data            → 정적 데이터
📆 작업 순서 제안
초기 세팅

Vite 또는 CRA + TypeScript

Chakra UI & 폴더 구조 정리

라우팅 설정 (React Router)

Supabase 연동

DB 구조 설계 (projects, blog_posts, users)

인증 테스트

프로젝트 페이지부터 시작

Supabase → 프로젝트 리스트 CRUD

UI 컴포넌트 재사용 구조로 설계

블로그 기능 구현

마크다운 입력 + 렌더링

상세 페이지 라우팅

Home 및 기타 페이지

소개, 커리어, 연락처

배포 & 최적화

Vercel 배포

SEO 태그, Open Graph 설정

🧠 보너스 아이디어 (고급화)
프로젝트/블로그 관리용 관리자 페이지 (Auth + Dashboard)

GitHub API 연동하여 최근 커밋 리스트 띄우기

다크모드 토글

애니메이션 (Framer Motion 등)
