import PushAlert from './notification';

class SessionManager {
  static isSessionValid(expiryTime) {
    return (new Date(expiryTime)).getTime() > (new Date()).getTime();
  }

  static getAuthSession() {
    try {
      const loggedInUser = {
        isAuthenticated: true,
      };
      
      if(!loggedInUser.isAuthenticated) throw Error('Session lost!');
      return loggedInUser.isAuthenticated;

    } catch (e) {
      // SessionManager.resetAuthSession();
      console.log(e.message);
    }
  }

  static setAuthSession(params) {
    const loginInfo = {
      timestamp: (new Date()).getTime(),
      data: params
    }
    localStorage.setItem('loggedUser', JSON.stringify(loginInfo));
  }

  static resetAuthSession() {
    localStorage.clear();
  }
}

export default SessionManager;