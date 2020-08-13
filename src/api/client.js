import request from '@/utils/request'

export function getGroupList(){
    return request({
        url:'/dlp/client/group',
        method:'get',
    })
}

export function addGroup(form){
    return request({
        url:'/dlp/client/group',
        method:'post',
        params:{form}
    })
}

export function putGroup(form){
    return request({
        url:'/dlp/client/group',
        method:'put',
        params:{form}
    })
}

export function deleteGroup(id){
    return request({
        url:'/dlp/client/group',
        method:'delete',
        params:{id}
    })
}

export function getGroupInfo(){
    return request({
        url:'/dlp/client/infogroup',
        method:'get',
    })
}

export function getGroupDetail(id){
    return request({
        url:'/dlp/client/detailgroup',
        method:'get',
        params:{id}
    })
}

export function getClientList(){
    return request({
        url:'/dlp/client/list',
        method:'get'
    })
}

export function getIPList(){
    return request({
        url:'/dlp/client/ip',
        method: 'get'
    })
}

export function getStatusInfo(){
    return request({
        url:'/dlp/client/status',
        method:'get'
    })
}

export function searchValidate(type,key){
    return request({
        url:'/dlp/client/validateinfo',
        method:'get',
        params:{type,key}
    })
}

export function getClientInfo(){
    return request({
        url:'/dlp/client/info',
        method:'get',
    })
}

export function getNoGroupClient(){
    return request({
        url:'/dlp/client/nogroup',
        method:'get',
    })
}