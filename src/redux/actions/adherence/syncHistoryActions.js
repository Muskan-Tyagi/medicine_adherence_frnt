import Logger from '../../../components/logger';
import Types from '../allTypes';
function syncHistory(params) {
  return {
    type: Types.SYNC_HISTORY,
    payload: params,
  };
}
function syncHitsorySuccess(data) {
  Logger.loggerInfo(data);
  return {
    type: Types.SUCCESS_SYNC_HISTORY,
    payload: data,
  };
}
function syncHistoryError(error) {
  Logger.loggerError(error);
  return {
    type: Types.FAILED_SYNC_HISTORY,
    payload: error,
  };
}

export const syncHistoryActions = {
  syncHistory,
  syncHitsorySuccess,
  syncHistoryError,
};
