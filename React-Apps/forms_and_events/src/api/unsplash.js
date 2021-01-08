import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    'Accept-Version': 'v1',
    Authorization: 'Client-ID 2S3YE6Rz_trk2sqARaKgnQoH-4ifxXETdAjO6aFWfRU',
  }
});


