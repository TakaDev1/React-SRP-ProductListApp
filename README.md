# React-SRP-ProductListApp

React + TypeScript + Tailwind CSS を使用して、**SRP（Single Responsibility Principle：単一責任の原則）**を意識した商品一覧アプリを実装する練習用プロジェクトです。

## 概要

Fake Store APIから商品データを取得し、商品一覧として表示します。

データ取得処理と商品表示処理をそれぞれ独立させることで、コンポーネントごとの責務を明確にしています。

## 使用技術

* React
* TypeScript
* Vite
* Tailwind CSS
* Fake Store API

## 主な機能

* Fake Store APIから商品データを取得
* 商品一覧の表示
* API通信エラーの表示
* TypeScriptによる型定義
* Custom Hookによるデータ取得処理の分離
* Tailwind CSSによるスタイリング

## プロジェクト構成

```text
src/
├── components/
│   └── DisplayProducts.tsx
├── hooks/
│   └── useProducts.ts
├── types/
│   └── ProductType.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 各ファイルの責務

### `types/ProductType.ts`

商品データの型を定義します。

```ts
export interface Product {
  id: number;
  title: string;
  price: number;
}
```

### `hooks/useProducts.ts`

Fake Store APIから商品データを取得します。

* APIリクエスト
* データ取得
* エラーハンドリング
* 商品データの状態管理

を担当します。

### `components/DisplayProducts.tsx`

`useProducts`から商品データを受け取り、商品一覧を画面に表示します。

データ取得処理そのものは担当しません。

### `App.tsx`

`DisplayProducts`を配置し、アプリ全体を構成します。

## SRPについて

SRP（Single Responsibility Principle）は、

> 1つのモジュールやコンポーネントは、1つの責務を持つ

という考え方です。

このアプリでは、以下のように責務を分離しています。

```text
useProducts
    ↓
データ取得・状態管理

DisplayProducts
    ↓
商品データの表示

ProductType
    ↓
商品データの型定義

App
    ↓
アプリ全体の構成
```

これにより、API通信の変更が商品表示コンポーネントに直接影響しにくくなり、それぞれの処理を独立して変更・テストしやすくしています。

## API

商品データの取得には Fake Store API を使用しています。

```text
https://fakestoreapi.com/products
```

## 学習ポイント

* SRP（単一責任の原則）
* Custom Hook
* `useEffect`
* `useState`
* `fetch`
* 非同期処理
* TypeScriptの型定義
* `unknown`と`instanceof Error`
* コンポーネントの責務分離
* Tailwind CSS

## エラーハンドリング

API通信に失敗した場合は、`Error`型かどうかを確認してエラーメッセージを取得します。

```ts
catch (error) {
  if (error instanceof Error) {
    setError(error.message);
  }
}
```

`catch`で受け取る値はTypeScriptでは`unknown`として扱われるため、`instanceof Error`によって`Error`型へ絞り込んでいます。

## 起動方法

```bash
npm install
npm run dev
```

ブラウザで表示されたURLにアクセスしてください。
