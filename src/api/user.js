import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/dlp/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/dlp/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/dlp/user/logout',
    method: 'post'
  })
}
