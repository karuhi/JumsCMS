import Api from './index'

export default {
  testPosting () {
    const item = { text: 'Success!' }
    return Api().get('/posts', item)
  }
  // 他の処理も追加可能
}