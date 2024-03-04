const usePrimatives = () => {

  const isArray = value => (value && value instanceof Array)
  const isFunction = value => (typeof value === 'function');
  const isNumber = value => (!isNaN(parseFloat(value)) && isFinite(value));
  const isString = value => (typeof value === 'string');
  const isObject = value => (typeof value === 'object' && value !== null && !isArray(value));

  const isValidArray = (value, isEmptyOkay) => ((isArray(value) && (isEmptyOkay || value.length > 0)));
  const isValidString = (value, isEmptyOkay) => ((isString(value) && (isEmptyOkay || value.trim().length > 0)));
  const isValidObject = (value, isEmptyOkay) => (isObject(value) && (isEmptyOkay || Object.keys(value).length > 0));
  
  const isDigits = value => {
    return isValidString(value) && 
      value
        .split('')
        .filter(ch => ('0123456789'.includes(ch))).join('') === value;
  };
  const isEqualObject = (a, b) => (!isObject(a) && !isObject(b)) || (isObject(a) && isObject(b) && JSON.stringify(a) === JSON.stringify(b));
  const isEqualString = (a, b, ignoreCase) => 
    (!isString(a) && !isString(b)) || 
    (isString(a) && isString(b) && (ignoreCase ? a.toLowerCase() === b.toLowerCase() : a === b));

  const parseJson = value => {
    try {
      return JSON.parse(value);
    } catch (error) {
      return undefined;
    }
  }
  const isJson = value => {
    if (!isValidString(value)) {
      return false;
    }
    const data = parseJson(value);
    return isObject(data) || isArray(data);
  }
  const fromEpoch = (value) => {
    if (!isNumber(value) || !isDigits(`${value}`)) {
      return null;
    }
    const ms = Number(value) * 1000;
    const date = new Date(ms);
    return date;
  };

  const removePrefix = (value, prefix) => {
    if (!isValidString(value, true)) { return value; }
    if (!isValidString(prefix, true)) { return value; }
    while (value.length >= prefix.length && value.startsWith(prefix)) {
      if (value === prefix) { 
        value = ''; 
      }
      else {
        value = value.substr(prefix.length);    
      }
    }
    return value;
  };
  const removeSuffix = (value, suffix) => {
    if (!isValidString(value, true)) { return value; }
    if (!isValidString(suffix, true)) { return value; }
    while (value.length >= suffix.length && value.endsWith(suffix)) {
      value = value.substr(0, value.length - suffix.length);
    }
    return value;
  };



  return {
    isArray,
    isFunction,
    isNumber,
    isString,
    isObject,

    isValidArray,
    isValidString,
    isValidObject,

    isDigits,
    isEqualObject,
    isEqualString,

    parseJson,
    isJson,
    fromEpoch,

    removePrefix,
    removeSuffix
  }

};

export default usePrimatives;