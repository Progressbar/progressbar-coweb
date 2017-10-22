/**
 * A basic cowork config
 * @bg info
 * @param {string} conf
 @ @returns {object}
 */
module.exports = (conf = 'non', context, callback) => {
  const config = {
    baseWebUrl: 'https://progressbar-cowork.netlify.com/',
    orderPrices: {
      day: 4,
      month: 80,
      fix: 160,
      locker: 10,
      nonstop: 40
    },
    openHours: {
      monthPass: {
        start: 6,
        end: 18
      },
      dayPass: {
        start: 9,
        end: 18
      }
    },
    seatCapacity: 9,
    coworkLogin: true,
    coworkSubscribe: true
  }
  callback(null, config)
}
