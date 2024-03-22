import {LogBox} from 'react-native';

if (__DEV__) {
  const ignoreWarns = [
    'ViewPropTypes will be removed from React Native',
    'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    'new NativeEventEmitter() was called with a non-null argument without the required addListener method.',
    'new NativeEventEmitter() was called with a non-null argument without the required removeListeners method.',
    'Deprecation warning: value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info. Arguments: [0] _isAMomentObject: true, _isUTC: true, _useUTC: true, _l: undefined, _i: 2016-9-26 19:30, _f: undefined, _strict: undefined, _locale: [object Object]',
    'Deprecation warning: value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info. Arguments: [0] _isAMomentObject: true, _isUTC: true, _useUTC: true, _l: undefined, _i: 2016-9-26 19:30, _f: undefined, _strict: undefined, _locale: [object Object]'
  ];

  const warn = console.warn;
  console.warn = (...arg) => {
    for (const warning of ignoreWarns) {
      if (arg[0].startsWith(warning)) {
        return;
      }
    }
    warn(...arg);
  };

  LogBox.ignoreLogs(ignoreWarns);
  LogBox.ignoreLogs(['new NativeEventEmitter']);
}
