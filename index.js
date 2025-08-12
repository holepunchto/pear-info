'use strict'
const ref = require('pear-ref')
module.exports = function info (link, opts) {
  const ipc = global.Pear?.[global.Pear?.constructor.IPC]
  if (!ipc) throw new Error('pear-info is designed for Pear - IPC missing')
  ref.ref()
  const stream = ipc.info({ ...opts, link })
  stream.on('close', () => ref.unref())
  return stream
}
