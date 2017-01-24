import loaderUtils from 'loader-utils';
// import { CardScriptWrapper } from '@ali/remote-component';

module.exports = function(code) {
  let temp = code;

  // temp += 'const NewCard = CardScriptWrapper()(MyCard);'
  temp += "ReactDOM.render(<MyCard />, document.getElementById('app'));";

  return temp;
};
