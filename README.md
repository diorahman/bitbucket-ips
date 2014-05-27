# Bitbucket IP Addresses

> What are the Bitbucket IP addresses I should use to configure my corporate firewall?

To get current IP addresses of Bitbucket

```js
var ips = require ('bitbucket-ips');
ips(function(err, addresses){
	console.log (addresses)
});
```

The current answer from Confluence:

```js
{
  inbounds: [
    '131.103.20.167',
    '131.103.20.168',
    '131.103.20.169',
    '131.103.20.170'
  ],
  outbounds: [
    '131.103.20.165',
    '131.103.20.166'
  ]
}
```


