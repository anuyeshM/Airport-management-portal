import callAPI from '../commons/callAPI';
import config from '../commons/config';
import CreateDataContext from './CreateDataContext';

const permissionsReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'getPermissionsData':
      return {
        ...state,
        permissionsObj: action.payload.permissions
      };
      case 'resetPermissionsData':
      return {
        ...state,
        permissionsObj: {}
      };
    default:
      return state;
  }
};

const getPermissionsData = (dispatch) => async (accessToken) => {
  try {
    let finalObj = {};
    console.log(config.api.getPermissions);
    let reqPath = config.api.getPermissions.replace('{appType}', 'airportportal');
    const apiResponse = await callAPI.get(
      reqPath,
      {},
      accessToken
    );
    let regResponse = await apiResponse.json();
    finalObj = regResponse.data;
    finalObj.overrides && finalObj.overrides.forEach((over) => {
      finalObj.defaults && finalObj.defaults.forEach((deft) => {
        if(over.assetId === deft.assetId) {
          deft = Object.assign(deft, over);
        }
      })
    })
    if ('success' === regResponse.type && 200 === regResponse.status) {
      dispatch({
        type: 'getPermissionsData',
        payload: {
          // permissions: regResponse.data,
          permissions: finalObj
        },
      });
    }
  } catch (e) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with adding permissions data',
    });
  }
};

const resetPermissionsData = (dispatch) => async () => {
  try {
    dispatch({
      type: 'resetPermissionsData',
      payload: {},
    });
  } catch (e) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with adding permissions data',
    });
  }
};

export const { Context, Provider } = CreateDataContext(
  permissionsReducer,
  {
    getPermissionsData,
    resetPermissionsData
  },
  {
    permissionsObj: {}
  }
);
