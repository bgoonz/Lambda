# Parcel

## 🚀 Getting Started

> Parcel is a web application bundler, differentiated by its developer experience. It offers blazing fast performance utilizing multicore processing, and requires zero configuration.

Parcel is a web application bundler, differentiated by its developer experience. It offers blazing fast performance utilizing multicore processing, and requires zero configuration.

First install Parcel using Yarn or npm:

Yarn:

```text
yarn global add parcel-bundler
```

npm:

```text
npm install -g parcel-bundler
```

Create a package.json file in your project directory using:

```text
yarn init -y
```

or

```text
npm init -y
```

Parcel can take any type of file as an entry point, but an HTML or JavaScript file is a good place to start. If you link your main JavaScript file in the HTML using a relative path, Parcel will also process it for you, and replace the reference with a URL to the output file.

Next, create an index.html and index.js file.

NB: Parcel converts JS assets to ES5, which won't run in in the context of a `<script type="module">` tag, so just use plain `<script>` tags with no `type` attribute in your source HTML.

```text
console.log('hello world')
```

Parcel has a development server built in, which will automatically rebuild your app as you change files and supports [hot module replacement](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/hmr.html) for fast development. Point it at your entry file:

```text
parcel index.html
```

Now open [http://localhost:1234/](http://localhost:1234/) in your browser. If hot module replacement isn't working you may need to [configure your editor](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/hmr.html#safe-write). You can also override the default port with the `-p <port number>` option.

Use the development server when you don't have your own server, or your app is entirely client rendered. If you do have your own server, you can run Parcel in `watch` mode instead. This still automatically rebuilds as files change and supports hot module replacement, but doesn't start a web server.

```text
parcel watch index.html
```

You can also use [createapp.dev](https://createapp.dev/parcel) to create a Parcel project in the browser. Select the features you need such as React, Vue, Typescript and CSS, and you will see the project being generated in real-time. You can use this tool for learning how to set up a new project and you can also download the project as a ZIP-file and get started coding instantly.

### Multiple entry files

In case you have more than one entry file, let's say `index.html` and `about.html`, you have 2 ways to run the bundler:

Specifying the file names:

```text
parcel index.html about.html
```

Use tokens and create a glob:

```text
parcel *.html
```

_NOTE:_ In case you have a file structure like this:

* folder-1

  -- index.html

* folder-2

  -- index.html

Going to [http://localhost:1234/folder-1/](http://localhost:1234/folder-1/) won't work, instead you will need to explicitly point to the file [http://localhost:1234/folder-1/index.html](http://localhost:1234/folder-1/index.html).

### Building for production

When you're ready to build for production, the `build` mode turns off watching and only builds once. See the [Production](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/production.html) section for more details.

### Adding parcel to your project

Sometimes it's not possible to install Parcel globally e.g. if you're building on someone else's build agent or you want to use a CI to build your project programmatically. In this case, you can install and run Parcel as a local package.

To install with Yarn:

```text
yarn add parcel-bundler --dev
```

To install with NPM:

```text
npm install parcel-bundler --save-dev
```

Then, add these tasks scripts to your project, by modifying your `package.json`:

```text
{
  "scripts": {
    "dev": "parcel <your entry file>",
    "build": "parcel build <your entry file>"
  }
}
```

Then, you will be able to run it:

```text
yarn dev

npm run dev


yarn build

npm run build
```

### Help us improve the docs

If something is missing or not entirely clear, please [file an issue on the website repository](https://github.com/parcel-bundler/website/issues) or [edit this page](https://github.com/parcel-bundler/website/edit/master/src/i18n/en/docs/getting_started.md).

[Source](https://parceljs.org/getting_started.html)

