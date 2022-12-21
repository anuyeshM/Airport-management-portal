const options = {
  withCredentials: true,
  credentials: "include",
};  

class callAPI {
  static async get(url, params) {
    void 0 === params && (params = {});

    let apiResponse = {};
    let reqURL = Object.keys(params).reduce(
      (acc, curr) => `${acc}${curr}=${encodeURIComponent(params[curr])}&`,
      url + '?'
    );

    try {
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
      
        },
        ...options,
      };

      apiResponse = await fetch(reqURL, requestOptions);
    } catch (e) {
      console.log('ERROR in fetching request => ', e);
      throw Error;
    }

    return apiResponse;
  }

  static async post(url, body) {
    let apiResponse = {};

    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        
        },
        body: JSON.stringify(body),
        ...options,
      };

      apiResponse = await fetch(url, requestOptions);
    } catch (e) {
      console.log('ERROR in fetching request => ', e);
      throw Error;
    }

    return apiResponse;
  }

    static async delete(url, body) {
    let apiResponse = {};

    try {
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // authorization: authToken,
        },
        ...options,
        body: JSON.stringify(body),
      };

      apiResponse = await fetch(url, requestOptions);
    } catch (e) {
      console.log('ERROR in fetching request => ', e);
      throw Error;
    }

    return apiResponse;
  }
  

  static async upload(url, dataObj) {
    let apiResponse = {};
    let formData = new FormData();

    try {
      for (var key in dataObj) {
        formData.append(key, dataObj[key]);
      }

      const requestOptions = {
        method: 'POST',
        headers: {
      
        },
        body: formData,
        ...options,
      };

      apiResponse = await fetch(url, requestOptions);
    } catch (e) {
      console.log('ERROR in fetching request => ', e);
      throw Error;
    }

    return apiResponse;
  }

  static async patch(url, body, authToken = window.access_token) {
    let apiResponse = {};

    try {
      const requestOptions = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        
        },
        body: JSON.stringify(body),
        ...options,
      };

      apiResponse = await fetch(url, requestOptions);
    } catch (e) {
      console.log('ERROR in fetching request => ', e);
      throw Error;
    }

    return apiResponse;
  }

  static async put(url, body, authToken, refreshToken) {
    let apiResponse = {};

    try {
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
    
          refreshToken
        },
        body: JSON.stringify(body),
        ...options,
      };

      apiResponse = await fetch(url, requestOptions);
    } catch (e) {
      console.log('ERROR in fetching request => ', e);
      throw Error;
    }

    return apiResponse;
  }
}

export default callAPI;



