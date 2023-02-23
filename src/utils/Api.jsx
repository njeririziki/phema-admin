import axios from "axios";

const instance= axios.create({
    baseURL:'https://api.phemaagri.com',
   responseType:'json'
});

instance.interceptors.request.use(function (config) {
   
    let tokened='185|3tqzmqQA0M5wYHqC2P3MWaOz8vPhlocyu4mEhvqX';
      console.log('token' + tokened)
     config.headers['Authorization'] =  `Bearer ${tokened}` ;
   
    return config;
  }, function(error) {
    return Promise.reject(error);
  });



export default instance;