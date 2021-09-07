# console-log-node
console log nodejs

### Install
Install with npm:

`$ npm install --save console-log-cmd`

### Examples

```
const { info, success, warn, error} = require('./log');
info('info!');
success('success!');
warn('[module]', 'warn!');
error('[module]', 'error!');
```
