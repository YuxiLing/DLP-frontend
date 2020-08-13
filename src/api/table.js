import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/dlp/table/list',
    method: 'get',
    params
  })
}
