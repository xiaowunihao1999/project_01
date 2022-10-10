import request from '@/utils/request'
export const getListAPI = function() {
 return  request({
    url:'http://geek.itheima.net/v1_0/channels'
  })
}
