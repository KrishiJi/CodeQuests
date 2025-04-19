const axios = require('axios');

axios.post('http://localhost:5000/api/seeder/seed')
  .then(res => {
    console.log('✅', res.data);
  })
  .catch(err => {
    console.error('❌', err.message);
  });
