import request from '@/utils/request'

export function getChart1(params){
    return request({
        url:'/dlp/violation/client/chart',
        method:'get',
        params
    })
}

export function getChart2(params){
    return request({
        url:'/dlp/client/onlinechart',
        method:'get',
        params
    })
}

export function getChart3(params){
    return request({
        url:'/dlp/client/validatechart',
        method:'get',
        params
    })
}

export function getChart4(params){
    return request({
        url:'/dlp/scan/resultchart',
        method:'get',
        params
    })
}

export function getChart5(time_scale){
    return request({
        url:'/dlp/validation/total',
        methods:'get',
        params:{time_scale}
    })
}

export function getChart6(){
    return request({
        url:'/dlp/scan/percent',
        methods:'get',
    })
}