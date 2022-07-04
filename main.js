import ReactDOM from 'react-dom';
import React from 'react';
import MainFlow from '../ui-core/widgets/MainFlow/MainFlow';

const getCurrentScript = () => {
  if (document.currentScript) {
    return document.currentScript.src;
  }
  const scripts = document.getElementsByTagName('script');
  return scripts[scripts.length - 1].src;
}

const currentScript = getCurrentScript();

window.NeocarWidgets = {
  main: ({ container, ...props }) => {
    console.log('>>>Widget props', props);
    if (props.i18n === undefined) {
      props.i18n = (currentScript.substring(0, currentScript.lastIndexOf('/')) + '/locales');
    }
    return ReactDOM.render(<MainFlow {...props} />, container);
  }
};
