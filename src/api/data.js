import request from '@/utils/request'

export function getSensitiveData(){
    return request({
        url:'/dlp/data/namelist',
        method:'get',
    })
}