/**
 * @description - selenium standalone management
 * @author - yang.yuncai <383235388@qq.com>
 */

module.exports = {
  version: '3.14.0',
  baseURL: 'https://npm.taobao.org/mirrors/selenium',
  drivers: {
    chrome: {
      version: '2.41',
      arch: process.arch,
      baseURL: 'https://npm.taobao.org/mirrors/chromedriver',
    },
  },
};
