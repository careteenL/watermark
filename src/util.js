/**
 * 
 * @desc 判断一个变量是否为某种类型
 * @param {Any} src 变量值
 * @param {String} type 类型 ['string', 'number', 'array', 'object'...]
 * @return {Boolean} 
 */ 
export const isType = function (src = '', type = '') {
  return Object.prototype.toString.call(src).slice(8, -1).toLowerCase() === type
}