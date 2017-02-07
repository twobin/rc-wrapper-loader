import loaderUtils from 'loader-utils';
import { CardScriptWrapper, getCurrentScriptParams } from '@ali/remote-component';

module.exports = function(code) {
  const query = loaderUtils.parseQuery(this.query);
  const { cardType } = query;

  let cardName;
  let temp = '';

  if (code) {
    cardName = code.match(/export default (\S*);/);
  }

  if (cardName && cardName[1]) {
    if (cardType === 'component' || !cardType) {
      temp += "import { CardScriptWrapper } from '@ali/remote-component';";
      temp += code;
      temp += 'const NewCard = CardScriptWrapper()(' + cardName[1] + ');';
    }

    if (cardType === 'render' || cardType === 'function') {
      temp += "import { CardScriptWrapper, getCurrentScriptParams } from '@ali/remote-component';";
      temp += code;
      temp += 'const NewCard = CardScriptWrapper()(' + cardName[1] + ');';
      temp += "ReactDOM.render(<NewCard />, document.getElementById('onenessCard-' + getCurrentScriptParams('id')));";
    }
  }

  return temp;
};
