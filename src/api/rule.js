import request from '@/utils/request'

export function getRuleList(){
    return request({
        url:'/dlp/rule/namelist',
        method:'get',
    })
}

export function getRules(){
    return request({
        url:'/dlp/rule/list',
        method:'get',
    })
}

export function addRule(form){
    return request({
        url:'/dlp/rule/list',
        method:'post',
        params:{form}
    })
}

export function editRule(form){
    return request({
        url:'/dlp/rule/list',
        method:'put',
        params:{form}
    })
}

export function deleteRule(form){
    return request({
        url:'/dlp/rule/list',
        method:'delete',
        params:{form}
    })
}