
export default  function (promise: Promise<any>, callback?: (err, data) => void): Promise<any> {
  if (!callback) {
    return promise;
  }

  promise.then(
    function (result) {
      callback(null, result);
    }, function (error) {
      callback(error || new Error, null);
    }
  );
}
