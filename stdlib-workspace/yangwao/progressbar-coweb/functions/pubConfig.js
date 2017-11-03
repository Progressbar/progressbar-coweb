/**
 * A basic cowork config
 * @bg info
 * @param {string} conf
 @ @returns {object}
 */

const lib = require('lib')

module.exports = (conf = 'non', context, callback) => {
  return lib[`${context.service.identifier}.config`]((err, config) => {
    if (err) {
      callback(null, {
        code: 'Config error'
      })
    }

    callback(null, config)
  })
}
