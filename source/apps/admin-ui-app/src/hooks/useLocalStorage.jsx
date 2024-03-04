import usePrimatives from "./usePrimatives";

const useLocalStorage = () => {

  const { isValidString, isObject, isArray, isString, isJson, parseJson } = usePrimatives();

  const getCache = async (key) => {
    if (!isValidString(key)) {
      console.debug('useLocalStorage.getCache: key is required');
      return;
    }
    if (!window.localStorage) {
      console.debug('useLocalStorage.getCache: window.localStorage is not available');
      return;
    }
    const data = await window.localStorage.getItem(key);
    if (isString(data)) {
      return isJson(data) ? parseJson(data) : data;
    }
    return data;    
  }
  const putCache = async (key, data) => {
    if (!isValidString(key)) {
      console.debug('useLocalStorage.putCache: key is required');
      return;
    }
    if (!window.localStorage) {
      console.debug('useLocalStorage.putCache: window.localStorage is not available');
      return;
    }
    if (!isObject(data) && !isArray(data) && !isString(data)) {
      console.debug('useLocalStorage.putCache: invalid data type');
      return;
    }
    await window.localStorage.setItem(key, JSON.stringify(data));
  }
  const clearCache = async (key) => {
    if (!isValidString(key)) {
      console.debug('useLocalStorage.clearCache: key is required');
      return;
    }
    if (!window.localStorage) {
      console.debug('useLocalStorage.clearCache: window.localStorage is not available');
      return;
    }
    await window.localStorage.removeItem(key);
  }

  return {
    getCache,
    putCache,
    clearCache
  }

};

export default useLocalStorage;