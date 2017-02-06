import loaderUtils from 'loader-utils';
// import { CardScriptWrapper } from '@ali/remote-component';

module.exports = function(code) {
  let cardName;
  let temp = code;

  if (code) {
    cardName = code.match(/export default (\S*);/);
  }

  if (cardName && cardName[1]) {
    temp += 'const NewCard = CardScriptWrapper()(' + cardName[1] + ');'
    temp += "ReactDOM.render(<NewCard />, document.getElementById('app'));";
  }

  return temp;
};
