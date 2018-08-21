/**
 * 
 * @desc index
 */ 

import __canvasWM from './page'
import __picWM from './image'

import { isType } from './util'

const waterMark = function (config) {
  if (config === undefined) {
    config = {}
  }
  if (config === undefined || isType(config, 'object')) {
    config.type = config.type ? config.type : 'page'
  } else {
    console.error('[Config Error]: The \'config\' is expected to be object')
    return
  }
  if (config.type === 'page') {
    __canvasWM(config)
  } else if (config.type === 'image') {
    __picWM(config)
  } else {
    console.error('[Type Error]: The type can only be \'page\' or \'image\'')   
  }
}

export default waterMark
