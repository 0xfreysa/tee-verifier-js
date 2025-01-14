![MIT licensed][mit-badge]
![Apache licensed][apache-badge]

[mit-badge]: https://img.shields.io/badge/license-MIT-blue.svg
[apache-badge]: https://img.shields.io/github/license/saltstack/salt

# Tee-verifier-js

NPM Modules for verifying tee code attestation.
 
> [!IMPORTANT]
> This is developed for the usage **in the Browser**. This module does not work in `nodejs`.

## License
This repository is licensed under either of

- [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0)
- [MIT license](http://opensource.org/licenses/MIT)

at your option.

## Example

```shell
cd demo/react-ts-webpack
npm i && npm run dev 
```

## Development

> [!IMPORTANT]
> **Note on Rust-to-WASM Compilation**: This project requires compiling Rust into WASM, which needs [`clang`](https://clang.llvm.org/) version 16.0.0 or newer. MacOS users, be aware that Xcode's default `clang` might be older. If you encounter the error `No available targets are compatible with triple "wasm32-unknown-unknown"`, it's likely due to an outdated `clang`. Updating `clang` to a newer version should resolve this issue.

```
# make sure you have rust installed
# https://www.rust-lang.org/tools/install
npm install

# this serve a page that will execute the example code at http://localhost:3001 
npm run dev
```

## Build for NPM

```
npm install
npm run build
```
Note: if compilation doesn't work check file 'workerHelpers.worker.js' and replace path to '../../../tlsn_wasm.js'

## Adding a new test
1. Create a new `new-test.spec.ts` file in the `test/` directory
2. Add your spec file to the entry object fin `webpack.web.dev.config.js`
3. Add a new `div` block to `test/test.ejs` like this: `<div>Testing "new-test":<div id="new-test"></div></div>`. The div id must be the same as the filename.
