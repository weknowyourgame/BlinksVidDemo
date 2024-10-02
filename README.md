## Getting Started

1. clone the blinks sdk from https://github.com/thearyanag/blinks/tree/feat/media_types
2. open the repo, install dependencies, `bun run build` and run `bun link` 
3. clone the chrome ext from https://github.com/dialectlabs/blinks-chrome-extension
4. open the repo, remove `@dialectlabs/blinks` from package.json, install dependencies 
5. run `bun link @dialectlabs/blinks` to link the above repo, and run `bun run build`
6. go to `chrome://extensions/` and enable developer mode
7. click load unpacked and select the `blinks-chrome-extension/build` folder