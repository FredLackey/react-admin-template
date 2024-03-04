import removePrefix from '../utils/remove-prefix';
import removeSuffix from '../utils/remove-suffix';
import isValidString from '../utils/is-valid-string';
import isObject from '../utils/is-object';
import  { Buffer } from './buffer';

const IS_EMPTY_STRING_OKAY = true;

const toUrl = (value = '/') => {

  let url = value;
      url = removePrefix(url, '/');
      url = removeSuffix(url, '/');

  return url.toLowerCase().startsWith('http')
    ? url
    : `http://${url}`;
};
const toBody = value => {
  if (isObject(value)) {
    return JSON.stringify(value);
  }
  if (isValidString(value)) {
    return value;
  }
  return undefined;
};

const addHeaders = (creds = {}, headers = {}) => {

  const { user, pass, password, token } = creds;

  const result = { 'Content-Type': 'application/json' };
  if (user || pass || password) {
    result.Authorization = `Basic ${Buffer.from(`${user}:${pass || password}`).toString('base64')}`;
  }
  if (token) {
    result.Authorization = `Bearer ${token}`;
  }

  Object.keys(headers)
    .filter(key => (key && isValidString(headers[key], IS_EMPTY_STRING_OKAY)))
    .forEach(key => {
      result[key] = headers[key];
    });
  
  return result;
};

export const doPromise = async ({ method = 'GET', url, data, creds = {}, headers = {} }) => {

  try {
    
    const response = await fetch(toUrl(url), {
      // credentials: 'same-origin', // 'include', default: 'omit'
      method,
      body   : toBody(data),
      headers: addHeaders(creds, headers),
    });
    
    const status = response.status;
    const isOkay = status >= 200 && status < 300;
    let resData = await response.json();
    if (resData?.data) {
      resData = resData.data;
    }

    return {
      ok: isOkay,
      status,
      data   : resData,
      message: data?.message
    };

  } catch (ex) {
    return {
      ok     : false,
      status : 500,
      data   : null,
      message: 'Failure calling server.',
      error  : ex.message
    }
  }

  // return fetch(toUrl(url), {
  //   // credentials: 'same-origin', // 'include', default: 'omit'
  //   method,
  //   body   : toBody(data),
  //   headers: addHeaders(creds, headers),
  // })
  // .then(response => response.json())
  // .catch(error => console.debug(error));
};


export const doGet = async (url, creds = {}, headers = {}) => {
  const response = await doPromise({ url, creds, headers });
  return response;
};
export const doPost = async (url, data, creds = {}, headers = {}) => {
  const response = await doPromise({ method: 'POST', url, data, creds, headers });
  return response;
};
export const doPut = async (url, data, creds = {}, headers = {}) => {
  const response = await doPromise({ method: 'PUT', url, data, creds, headers });
  return response;
};
export const doDelete = async (url, data, creds = {}, headers = {}) => {
  const response = await doPromise({ method: 'DELETE', url, data, creds, headers });
  return response;
};

export const ping = async (creds = {}, headers = {}) => {
  const response = await doGet('/', creds, headers);
  return response || 'FAILURE';
};

export default {
  ping,

  doGet,
  doPost,
  doPut,
  doDelete
};
