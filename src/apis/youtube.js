import axios from 'axios';

const KEY ='AIzaSyCOyHY3pqe8s6cn9weqjQcAshuuUlndmMQ';


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
