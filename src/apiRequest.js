const apiRequest = async (url = '', opatiosObj = null, errMsg = null) => {
  try {
    const response = await fetch(url, opatiosObj);
    if (!response.ok) throw Error('plase reload the app');
    return await response.json();
  } catch (err) {
    errMsg = err.message;
  } finally {
    return errMsg;
  }
};

export default apiRequest;
