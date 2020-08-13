
const tableData = [
    {
        id:'001',
        time: '2020-02-01 15:59:16',
        ip: '211.87.234.15',
        operate: 'block',
        rule: 'test1',
        data: 'data_rule_1',
        name: '禁止截屏',

    },
    {
        id:'002',
        time: '2020-02-01 15:59:16',
        ip: '211.87.234.15',
        operate: 'block',
        rule: 'test2',
        data: 'data_rule_1',
        name: 'USB禁止',

    },
    {
        id:'003',
        time: '2020-02-01 15:59:16',
        ip: '211.87.234.15',
        operate: 'block',
        rule: 'test2',
        data: 'data_rule_1',
        name: 'USB禁止',

    },
    {
        id:'004',
        time: '2020-02-01 15:59:16',
        ip: '211.87.234.15',
        operate: 'pass',
        rule: 'test3',
        data: 'data_rule_1',
        name: 'Email拦截',

    }
]
const detailSet = {
    '001':{
        id:'001',
        time: '2020-02-01 15:59:16',
        ip: '211.87.234.15',
        operate: 'block',
        rule: 'test1',
        data: 'data_rule_1',
        name: '禁止截屏',
    },
    '002':{
        id:'002',
        time: '2020-02-01 15:59:16',
        ip: '211.87.234.15',
        operate: 'block',
        rule: 'test2',
        data: 'data_rule_1',
        name: 'USB禁止',
    },
    '003':{
        id:'003',
        time: '2020-02-01 15:59:16',
        ip: '211.87.234.15',
        operate: 'block',
        rule: 'test2',
        data: 'data_rule_1',
        name: 'USB禁止',
    },
    '004':{
        id:'004',
        time: '2020-02-01 15:59:16',
        ip: '211.87.234.15',
        operate: 'pass',
        rule: 'test3',
        data: 'data_rule_1',
        name: 'Email拦截',
    }
}
const chart1Data = {
    "first": {
        '1': [{ date: '03.01', value: 34 }, { date: '03.02', value: 12 }, { date: '03.03', value: 75 }, { date: '03.04', value: 51 },
        { date: '03.05', value: 6 }, { date: '03.06', value: 9 }, { date: '03.07', value: 23 },],
        '2': [{ date: '02.01', value: 21 }, { date: '02.08', value: 12 }, { date: '02.15', value: 71 }, { date: '02.22', value: 51 },
        { date: '03.02', value: 6 }, { date: '03.09', value: 9 }, { date: '03.15', value: 23 },],
        '3': [{ date: '03.01', value: 17 }, { date: '03.02', value: 12 }, { date: '03.03', value: 71 }, { date: '03.04', value: 51 },
        { date: '03.05', value: 6 }, { date: '03.06', value: 9 }, { date: '03.07', value: 23 },],
        '4': [{ date: '03.01', value: 15 }, { date: '03.02', value: 12 }, { date: '03.03', value: 71 }, { date: '03.04', value: 51 },
        { date: '03.05', value: 6 }, { date: '03.06', value: 9 }, { date: '03.07', value: 23 },],
    }
}

const chart2Data = {
    "first": {
        '1':[
            {ip:'192.168.0.173',value:17},{ip:'192.168.0.23',value:11},{ip:'192.168.0.88',value:5},
            {ip:'192.168.0.173',value:3},{ip:'192.168.0.173',value:3},{ip:'192.168.0.173',value:1}
        ],
        '2':[
            {ip:'192.168.0.173',value:18},{ip:'192.168.0.23',value:11},{ip:'192.168.0.88',value:5},
            {ip:'192.168.0.173',value:3},{ip:'192.168.0.173',value:3},{ip:'192.168.0.173',value:1}
        ],
        '3':[
            {ip:'192.168.0.173',value:21},{ip:'192.168.0.23',value:11},{ip:'192.168.0.88',value:5},
            {ip:'192.168.0.173',value:3},{ip:'192.168.0.173',value:3},{ip:'192.168.0.173',value:1}
        ],
        '4':[
            {ip:'192.168.0.173',value:25},{ip:'192.168.0.23',value:11},{ip:'192.168.0.88',value:5},
            {ip:'192.168.0.173',value:3},{ip:'192.168.0.173',value:3},{ip:'192.168.0.173',value:1}
        ],
    }
}
const ruleList = [
    {id:'001',time:'2020-02-13-19:20:43',name:'test1',rule:'截屏禁止',client:2,aim:'txt',operate:'block',data:19,status:1},
    {id:'002',time:'2020-02-13-19:20:43',name:'test1',rule:'USB禁止',client:2,aim:'txt',operate:'block',data:19,status:0},
    {id:'003',time:'2020-02-13-19:20:43',name:'test1',rule:'Web拦截',client:2,aim:'txt',operate:'block',data:19,status:1},
    {id:'004',time:'2020-02-13-19:20:43',name:'test1',rule:'Web拦截',client:2,aim:'txt',operate:'block',data:19,status:0},
    {id:'005',time:'2020-02-13-19:20:43',name:'test1',rule:'Web拦截',client:2,aim:'txt',operate:'block',data:19,status:1},
]

export default [
    {
        url: '/dlp/wrong/result/list',
        type: 'get',
        response: config => {
            const{form} = config.query
            const content =tableData
            // if(form.name){
            //     content=[tableData[0]]
            // }else{
            //     content=tableData
            // }
            return {
                code: 200,
                data: content
            }
        }
    },
    {
        url:'/dlp/wrong/result/detail',
        type:'get',
        response: config => {
            const {id} = config.query
            const content = detailSet[id]
            return {
                code:200,
                data:content,
            }
        }
    },
    {
        url: '/dlp/wrong/chart1',
        type: 'get',
        response: config => {
            const { time_scale, activeName } = config.query
            const content = chart1Data[activeName][time_scale]
            return {
                code: 200,
                data: content
            }
        }
    },
    {
        url:'/dlp/wrong/chart2',
        type: 'get',
        response: config => {
            const { time_scale, activeName } = config.query
            if(activeName!="first"){
                activeName = "first"
            }
            const content = chart2Data[activeName][time_scale]
            return {
                code: 200,
                data: content
            }
        }
    },
    {
        url:'/dlp/wrong/rules',
        type:'get',
        response: config => {
            const content = ruleList
            return {
                code:200,
                data: content
            }
        }
    },
    {
        url:'/dlp/wrong/rules',
        type:'delete',
        response: config => {
            const {id} = config.query
            const index = ruleList.findIndex((one) => one.id==id)
            ruleList.splice(index,index+1)
            return {
                code:200,
            }
        }
    },
    {
        url:'/dlp/wrong/rules',
        type:'post',
        response: config => {
            const {form} = config.query
            //提交表单
            ruleList.push(
                {id:'006',time:'2020-03-10-19:20:43',
                name:'test1',rule:'Web拦截',
                client:2,aim:'txt',
                operate:'block',data:19,status:1}
            )
            const mess = 'success'
            return {
                code:200,
                message:mess
            }
        }
    },
    {
        url:'/dlp/wrong/rules/status',
        type:'put',
        response: config => {
            const {id,status} = config.query
            //修改数据
            const item = ruleList.find((one) => one.id==id)
            item.status = Number(status)
            
            return {
                code:200,
            }
        }
    }
]