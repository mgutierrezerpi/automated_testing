Steps

- make sure you have node `16.7.0` installed (`asdf local nodejs 16.7.0`)
- run `npm install`
- run command to generate a new vin `npm start`
- copy vin on `create_uv.js`

```javascript
    const vins = [
    '1FAHP2F83EG181879'
    ]
```
- add your username and password on `create_uv.js`

```javascript
    const email = 'your-email@cars.com'
    const password = 'your pass'
```

- open cypress `$(npm bin)/cypress open`
- run `create_uv.js`
