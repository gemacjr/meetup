import axios from 'axios';
import { Platform } from 'react-native';

if (Platform.OS !== 'ios') {
  url = 'http://10.0.3.2:3000/api';
} else {
  url = 'http://localhost:3000/api';
}


axios.defaults.baseURL = url;

const fakeGroupId = '591e5d07562895305aaa3c57';

class MeetupApi {
  constructor(){
    this.groupId = fakeGroupId;
    this.path = `/groups/${this.groupId}/meetups`;
  }

  async fetchGroupMeetups(){
    try {
      const { data } = await axios.get(this.path);
      return data.meetups;
    } catch (e) {
      throw e;
    }
  }

  async createGroupMeetups(args){
    try {
      const res = await axios.post(`${this.path}/new`, { ...args });
      console.log(res);
      return res;

    } catch (e) {
      console.log(e);
    }
  }

}


export {
  MeetupApi
};




// export const fetchMeetups = () =>
//   fetch('http://localhost:3000/api/meetups')
//     .then(res => res.json());
