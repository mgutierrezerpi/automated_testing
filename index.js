// generate a bunch of vins

const https = require('https')

async function get_new_vin() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'randomvin.com',
      port: 443,
      path: '/getvin.php?type=real',
      method: 'GET'
    }
      
    const req = https.request(options, res => {
      var body = '';
      res.on('data', function(chunk) {
        body += chunk;
      });
      res.on('end', function() {
        resolve(body)
      });
    })
    
    req.on('error', error => {
      reject(error)
    })
    
    req.end()
  })
}

async function get_vins(number_of_vins) {
  const vins = []
  for (const _x of Array(number_of_vins).keys()) {
    const vin = await get_new_vin()
    vins.push(vin)
  }
  return vins
}

get_vins(3).then(console.log)
