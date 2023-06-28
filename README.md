Bite-Games Landing:

This project was implemented in two sizes: mobile version (375px), tablet version (768px).
In Registration you can fill the number and pin with validation. Carousel with games, and menu for open and explore my experience.

- [FIGMA](https://www.figma.com/file/ov8fhyDyFBcOz7PRnPC1eh/TEST?type=design&node-id=1-316&mode=design&t=DosWjaS9CyKtwCxq-0)

- [DEMO LINK](https://reptiloid044.github.io/bite-games/)

________________________________________________________

HOW TO INSTALL THE PROJECT?

- 1 Step:
Fork my repository;

- 2 Step:
Clone the project on your PC;

- 3 Step:
npm install or npm i;

- 4 Step:
npm run dev;

Ready to hack!

________________________________________________________

TECHNOLOGIES:

- HTML
- BEM
- SCSS
- JS

***Important!!!

If you would like to switch to language "AR", you should make some manipulation with:

- 1 Step:
Go to webpack.config.js and change 
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: 'src/index-ar.html',
    }),
    new BundleAnalyzerPlugin(),
  ],
;

- 2 Step:
Go to ./src/index.js and change 
  import './index-ar.html';
  import './styles/main-ar.scss';
  import './scripts/main';
;

- 3 Step:
npm run dev;
