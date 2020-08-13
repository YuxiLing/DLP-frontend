import request from '@/utils/request'

export function getScanList(){
    return request({
        url:'/dlp/scan/result/list',
        method:'get',
    })
}

export function postScanList(data){
    return request({
        url:'/dlp/scan/result/list',
        method:'post',
        data
    })
}