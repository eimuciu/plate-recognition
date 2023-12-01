var fs = require('fs');

var CloudmersiveImageApiClient = require('cloudmersive-image-api-client');
var defaultClient = CloudmersiveImageApiClient.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'API KEY';
var apiInstance = new CloudmersiveImageApiClient.RecognizeApi();

// File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
var imageFile = Buffer.from(
  fs.readFileSync(__dirname + '/mercedes.jpg').buffer,
);

var callback = function (error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(
      'API called successfully. Returned data: ' + JSON.stringify(data),
    );
    console.log('Current directory:', __dirname);
  }
};
apiInstance.recognizeDetectVehicleLicensePlates(imageFile, callback);
