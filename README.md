# pear-info

> View Pear project information by link

## Usage

```js
import info from 'pear-info'
```

```js
function status(info) {
  console.log(info)
}
const link = 'pear://....'
const stream = info(link, opts)
stream.on('data', status)
```

## License

Apache-2.0
