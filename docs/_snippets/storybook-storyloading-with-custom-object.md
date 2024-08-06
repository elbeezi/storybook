```js filename=".storybook/main.js" renderer="common" language="js"
module.exports = {
  stories: [
    {
      // 👇 The directory field sets the directory your stories
      directory: '../packages/stories',
      // 👇 The titlePrefix field will generate automatic titles for your stories
      titlePrefix: 'MyComponents',
      // 👇 Storybook will load all files that contain the stories extension
      files: '*.stories.*',
    },
  ],
  addons: ['@storybook/addon-essentials'],
};
```