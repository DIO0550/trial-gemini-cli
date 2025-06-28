# Minesweeper Project

This project is to create a Minesweeper game.

# Technologies Used

- Next.js
- React
- Storybook
- Lint
- Prettier
- TypeScript
- TailwindCSS

# Directory Structure

```
/Users/dio/work/trial-gemini-cli/minesweeper/src
├── app/
│   ├── layout.tsx         # 全ページ共通のレイアウト
│   ├── page.tsx           # メインのゲーム画面を表示するエントリーポイント
│   └── globals.css        # グローバルなCSS
│
├── features/
│   └── game/              # 「ゲーム」という機能に関する全てのファイルをここに集約
│       ├── components/    # ゲーム機能でのみ使用するコンポーネント
│       │   ├── GameBoard.tsx  # ゲーム盤
│       │   ├── Cell.tsx       # 個々のセル
│       │   └── GameStatus.tsx # ゲームの状態表示(タイマー、残りマイン数など)
│       │
│       ├── hooks/         # ゲーム機能に特化したカスタムフック
│       │   └── useMinesweeper.ts # ゲームの状態やロジックを管理する
│       │
│       ├── logic/         # ゲームのコアロジック (Reactに依存しない純粋なTypeScript)
│       │   ├── board.ts     # 盤面の生成、マインの配置など
│       │   └── index.ts     # ロジックのエントリーポイント
│       │
│       └── types/         # ゲーム機能で使われる型定義
│           └── index.ts     # CellState, GameStateなど
│
├── components/
│   └── ui/                # アプリケーション全体で共有される汎用的なUIコンポーネント
│       ├── Button.tsx     # ボタン
│       ├── Modal.tsx      # モーダルウィンドウ (ゲームクリア/オーバー時など)
│       └── Icon.tsx       # アイコン
│
├── lib/
│   └── utils.ts           # プロジェクト全体で使われる便利関数など
│
├── hooks/
│   └── useLocalStorage.ts # (例) 複数の機能で共有されうるグローバルなフック
│
└── config/
    └── index.ts           # ゲームの設定値 (難易度ごとの盤面サイズ、マイン数など)
```
