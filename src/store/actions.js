import {
  routerService, articleService, historyService, shareService, commonService
}
from '../service'
import * as types from './mutation-types'

// 记录路由
export const setRouterX = ({
  dispatch
}, trasition) => {
  routerService.setRouter((trasition) => {
    dispatch(types.SWITCH_ROUTER, trasition)
  })
}

// 发布文章
export const getAllArticle = ({
  dispatch
}) => {
  articleService.getAllArticle(articles => {
    // 因为迁移的关系，创建时间丢失，估在leancloud的数据库中特别增加了一个createDate字段，用来表示之前的创建时间
    articles = articles.sort(function(a, b) {
      return new Date(Vue.prototype.$formate(b.createDate)) - new Date(Vue.prototype.$formate(a.createDate))
    })
    dispatch(types.GET_MY_ARTICLE, articles)
  })
}

// 阅读轨迹
export const getAllHistory = ({
  dispatch
}) => {
  historyService.getAllHistory(data => {
    var keys = {}
    var dates = []
    var values = {}
    for (var i = data.length-1; i >= 0; i--) {
      var key = Vue.prototype.$formate(data[i].createTime)
      var value = keys[key]
      if (!value) {
        keys[key]=key
        dates.push(key)
        values[key] = []
        values[key].push(data[i])
      } else {
        values[key].push(data[i])
      }
    }
    var keyAttr = Object.keys(keys).sort(function(a, b) {
      return new Date(b) - new Date(a)
    })
    dispatch(types.GET_MY_HISTORY, values, keyAttr)
  })
}

// 好东西分享
export const getAllShare = ({
  dispatch
}) => {
  shareService.getAllShare(shares => {
    dispatch(types.GET_MY_SHARE, shares)
  })
}

// 显示进度条
export const showLoading = ({
  dispatch
}) => {
  commonService.progressShow(data => {
    dispatch(types.PAGE_PROGRESS_SHOW, data)
  })
}

// 关闭进度条
export const hideLoading = ({
  dispatch
}) => {
  commonService.progressHide(data => {
    dispatch(types.PAGE_PROGRESS_CLOSE, data)
  })
}

