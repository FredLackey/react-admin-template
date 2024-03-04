import fetch from '../lib/fetch';

const useFetch = () => {

  const {
    doGet   : _doGet,
    doPost  : _doPost,
    doPut   : _doPut,
    doDelete: _doDelete,
  } = fetch;

  const doGet = async (url, creds) => {
    return _doGet(url, creds)
  };
  const doPost = async (url, data, creds) => {
    return _doPost(url, data, creds)
  };
  const doPut = async (url, data, creds) => {
    return _doPut(url, data, creds)
  };
  const doDelete = async (url, data, creds) => {
    return _doDelete(url, data, creds)
  };

  return {
    doGet,
    doPost,
    doPut,
    doDelete
  }
}

export default useFetch;