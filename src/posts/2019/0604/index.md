---
path: "/atomic-design"
date: "2019-06-04"
title: "Atomic Design とは"
tags: ["React", "Vue.js", "Atomic Design"]
---
`React` のようなモダンフロントエンドで開発しているとコンポーネントの数がディレクトリ構成が破綻したり、ファイルを探すのに時間がかかったりしませんか。依存した親子関係があるともっと複雑で同一ディレクトリにまとめて置いておくと後から見たときに全然わからない、そんな事態になりやすいように感じます。

コンポーネントのディレクトリ構成は、ページ単位や機能単位で `article/list.jsx` や `article/detail.jsx` みたいに分けたりすることも多いのですが、今回は `Atomic Design` という手法を紹介していきます。`Atomic Design` は開発手法なので `React` で構築する前提で紹介していますが、`Vue.js` などその他フロントエンドフレームワークや `Flutter` のようなフロントエンド寄りなアプリ開発にも活用できます。

## `Atomic Design` とは
コンポーネントを5つの粒度に分類します。
Atom(原子): 最小要素。
Molecule(分子): 2つ以上の `Atom` をステートレスな要素。
Organism(有機体): 単機能を構成する
Template(テンプレート): ページ内のコンポーネントを設置する骨組み
Page(ページ): `Template` に実際のコンテンツを適用したもの

既存のコンポーネントがどこにあるか探す場合も、ボタンなどのパーツは `Atoms` から探せばいいし、後から見返しても複数人で開発していても似たようなコンポーネントを再実装してしまうといったことがなくなります。これによって無駄なUIコンポーネントが増えず一貫性のあるデザインで開発ができます。


### `Atom`
これ以上分解することができない最小要素。`button` や `input` 要素など。アニメーションやコンテナ要素のような抽象的なものもここに含まれる。再利用性を前提にステートレスな設計にする必要がある。

### `Molecule`
2つ以上の `Atom` を組み合わせたシンプルなコンポーネント。ここも再利用性が前提としてステートレスな設計にする必要がある。2つ以上の `Atom` と言われているが、ただのテキスト等は `Atom` を作らず直接 `Molecule` を作ってしまって良いと思う。

### `Organism`
複数の`Atom` `Molecule` から構成される単体で機能するコンポーネント。ヘッダーやフッターなど。単体で機能するかがポイントで `Organism` に ToDoリストを作成した場合、`Molecule` にはToDoアイテムを作成する。

### `Template`
ページを構成するコンポーネントを設置するページの骨組み。`Organism` 以下のコンポーネントを呼び出してページの構成を決定する。

### `Page`
ページを構成するコンテンツを取得したり、ページを開いた際のイベントを記述する。`Template` に渡すコンテンツを取得して渡す。`Helmet` もここで設定する。


### ディレクトリ構成
基本的なディレクトリ構成の一例です。採用するフレームワーク等によってディレクトリの位置を調整してください。
```javascript
components/
  atoms/
    button.jsx
    input.jsx
  molecules/
    todoItem.jsx
  organisms/
    header.jsx
    todoList.jsx
    footer.jsx
  templates/
    homeTemplate.jsx
    todoTemplate.jsx
  pages/
    homePage.jsx
    todoPage.jsx
```

## 詰まりやすいところ
`Atomic Design` で構成してていままで詰まったところの共有。

### `Page` と `Template` の違い
ページとして必要なデータは `Page` で取得します。`Template` は `Page` から渡された値を元に各コンポーネントを呼び出します。基本的には `Page` と `Template` は1対1で作成するのが推奨されていて `Page` はデータ取得やヘッダ情報( `Helmet` )の制御を行うことが多いです。まとめて1つのコンポーネントで済ませる事もあります。

### これは `Organism`？ `Molecule`？
`Page` `Template` はページ単位で1つずつ、 `Atoms` は最小要素と分かりやすいのですが 、今作っているコンポーネントが `Organism`、`Molecule` のどっちになるか悩むことが多かったです。結論として、独立して単機能として動作するものは `Organism` 、 `Organism` に依存するものは `Molecule` にしていくことで依存関係がはっきり分かりやすくなります。

### `Organism` `Molecule` `Atoms` に収まらなくなった
ネストするコンポーネントが5つで収まるうちは特に問題ないのですが、ネストが深くなってくると `Page` と `Template` はページ単位で1つなので、残る `Organism` `Molecule` `Atoms` のいずれかで複数作成する必要がでてきます。そういった場合は `Page` > `Template` > `Organism` > `Organism` > `Molecule` > `Atoms` のようになります。`Organism` が `Organism` を呼び出すのはアリです。

### `Redux` との連携
ページ自体に必要なデータは `Page` で取得するのですが、例えばヘッダーに表示しているログイン情報など共通パーツで `Redux` にアクセスすることも多いです。`Atom` と `Molecule` は再利用性を前提としステートレスな実装が要求されるので、`Redux` に接続するのは `Organism` までと決めてしまって、`Atom` と `Molecule` に関しては `Props` で値を渡すのがいいです。
