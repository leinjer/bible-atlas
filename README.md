# 🗺️ 말씀 중심 성경지도 플랫폼 (Narrative-Driven Bible Atlas)

성경 본문을 읽어가는 흐름 안에서 지리적 동선(Micro-Atlas), 해발고도 단면도, 체감 거리를 한눈에 확인하고 노션(Notion) 바인더로 내보낼 수 있는 인터랙티브 웹 플랫폼입니다.

## 🚀 GitHub + Vercel 3분 무료 배포 방법 (코딩 프로그램 설치 불필요)

### 1단계: GitHub 저장소 생성 및 파일 업로드
1. [GitHub](https://github.com)에 로그인한 뒤 우측 상단 **`+` 버튼 ➔ `New repository`**를 클릭합니다.
2. Repository name에 `bible-atlas`를 입력하고 하단의 **`Create repository`**를 클릭합니다.
3. 생성된 화면에서 **`uploading an existing file`** 링크를 클릭합니다.
4. 압축을 푼 이 폴더 안의 모든 파일과 폴더(`package.json`, `index.html`, `vite.config.js`, `src` 폴더 등)를 마우스로 드래그하여 업로드 창에 끌어다 놓습니다.
5. 하단의 녹색 **`Commit changes`** 버튼을 클릭합니다.

### 2단계: Vercel 연결 및 웹사이트 자동 오픈
1. [Vercel](https://vercel.com)에 접속하여 **`Log In` ➔ `Continue with GitHub`**로 로그인합니다.
2. 대시보드에서 **`Add New...` ➔ `Project`**를 클릭합니다.
3. 방금 만든 `bible-atlas` 저장소 옆의 **`Import`** 버튼을 클릭합니다.
4. 프레임워크(Vite)가 자동으로 인식되므로 아무 설정 변경 없이 바로 **`Deploy`** 버튼을 클릭합니다.
5. 약 45초 후 폭죽 화면과 함께 **`https://bible-atlas-xxx.vercel.app`** 형태의 전용 웹사이트 주소가 생성됩니다!

### 3단계: 향후 2권(출애굽기)~6권(사도행전) 업데이트 방법
- 새 챕터가 추가된 `App.jsx` 코드를 받으시면, GitHub 저장소의 `src/App.jsx` 파일을 열어 새 코드로 붙여넣고 **`Commit changes`**만 누르세요.
- Vercel이 자동으로 감지하여 30초 만에 기존 웹 주소 그대로 최신 버전을 반영합니다.
