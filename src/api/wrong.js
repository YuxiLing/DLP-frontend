import request from '@/utils/request'

export function getWrongList(form){
    return request({
        url:'/dlp/wrong/result/list',
        method:'get',
        params:{form}
    })
}

export function getWrongDetail(id){
    return request({
        url:'/dlp/wrong/result/detail',
        method:'get',
        params:{id}
    })
}

export function getChart1(time_scale,activeName){
    return request({
        url:'/dlp/wrong/chart1',
        method:'get',
        params:{time_scale,activeName}
    })
}

export function getChart2(time_scale,activeName){
    return request({
        url:'/dlp/wrong/chart2',
        method:'get',
        params:{time_scale,activeName}
    })
}

export function getWrongRules(){
    return request({
        url:'/dlp/wrong/rules',
        method:'get',
    })
}
export function deleteRule(id){
    return request({
        url:'/dlp/wrong/rules',
        method:'delete',
        params:{id}
    })
}
export function submitRule(form){
    return request({
        url:'/dlp/wrong/rules',
        method:'post',
        params:{form}
    })
}
export function changeWrongRuleStatus(id,status){
    return request({
        url:'/dlp/wrong/rules/status',
        method:'put',
        params:{id,status}
    })
}