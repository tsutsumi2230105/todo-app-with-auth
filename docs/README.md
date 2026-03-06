**【概要】**  
**Todo App with Auth**  
シンプルな 認証付きの**TODO アプリケーション** です。  
React + TypeScript + Vite をベースに、  
Firebase を使ってユーザー認証と TODO の保存・管理を行います。

——————————————————————————————————————

**【セットアップ手順】**  
**1. リポジトリをクローン**  
git clone https://github.com/tsutsumi0105/todo-app-with-auth.git  
cd todo-app-with-auth

**2. 依存パッケージのインストール**  
npm install

**3. 環境変数の設定**  
プロジェクトルートに .env または .env.local を作成し、  
Firebase の設定を追加します（下記を参照）。

**4. Firebase の初期化**  
Firebase プロジェクトを作成し、  
**Firestore** と **Authentication**（Email/Password）を有効にします。

**5. 開発サーバを起動**  
npm run dev

——————————————————————————————————————

**【環境変数の説明】**  
以下のような値を .env に設定してください：  
VITE_FIREBASE_API_KEY=your_api_key  
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com  
VITE_FIREBASE_PROJECT_ID=your_project_id  
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com  
VITE_FIREBASE_MESSAGING_SENDER_ID=sender_id  
VITE_FIREBASE_APP_ID=app_id  
↑  
•VITE_FIREBASE_API_KEY: Firebase API キー  
•VITE_FIREBASE_AUTH_DOMAIN: Auth 用ドメイン  
•VITE_FIREBASE_PROJECT_ID: プロジェクトID  
•VITE_FIREBASE_STORAGE_BUCKET: ストレージバケット名  
•VITE_FIREBASE_MESSAGING_SENDER_ID: メッセージ送信者ID  
•VITE_FIREBASE_APP_ID: Firebase アプリID

——————————————————————————————————————

**【使用技術一覧】**

フロントエンド
React / TypeScript

スタイリング
SCSS (Sass)

ビルドツール
Vite

認証 / データベース
Firebase Authentication / Cloud Firestore

コード品質
ESLint / Prettier

言語
JavaScript / TypeScript

バージョン管理
GitHub
