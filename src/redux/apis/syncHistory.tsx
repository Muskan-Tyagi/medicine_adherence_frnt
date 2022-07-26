import axios from './axiosDeclaration';
import { API_URLS } from '../../constants/apiurl';


interface Iparams {
  meds_id: any;
  syncData: any;
}

const syncHistory = {
  syncmedicineHistory: async (params: Iparams) => {
    const {meds_id, syncData} = params;
    let response = await fetch(`${API_URLS.SYNC_HISTORY}?medId=${meds_id}`, {
      method: 'POST',
      body: JSON.stringify(syncData),
      headers: {
        'Content-type': 'application/json',
      },
    });
    return response;
  }
};


export default syncHistory;