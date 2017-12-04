/**
 * A basic cowork config
 * @bg info
 * @param {string} conf
 @ @returns {object}
 */
module.exports = (conf = 'non', context, callback) => {
  const config = {
    baseWebUrl: 'https://cowork.progressbar.sk/',
    orderPrices: {
      day: 4,
      month: 80,
      fix: 160,
      locker: 10,
      nonstop: 20
    },
    openHours: {
      monthPass: {
        start: 6,
        end: 18
      },
      dayPass: {
        start: 8,
        end: 18
      }
    },
    allowedPlans: ['day'],
    seatCapacity: 11,
    coworkLogin: true,
    coworkSubscribe: true
  }
  callback(null, config)
}
