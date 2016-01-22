class NavCtrl {
  constructor() {
    this.app = {
      title: 'Module Loaders',
      version: '0.3.0',
      links: [{
        text: 'Webpack',
        link: 'http://webpack.github.io'
      }, {
        text: 'Require.js',
        link: 'http://requirejs.org/'
      }, {
        text: 'Jspm',
        link: 'http://jspm.io/'
      }]
    };
  }
}
export default () => {
  require('./nav.scss');  // load styles for the component
  return {
    controller: NavCtrl,
    controllerAs: 'nav',
    templateUrl: './core/nav/nav.html'
  };
};
