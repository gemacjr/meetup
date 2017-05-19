import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';

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

}


export {
  MeetupApi
};




// export const fetchMeetups = () =>
//   fetch('http://localhost:3000/api/meetups')
//     .then(res => res.json());
