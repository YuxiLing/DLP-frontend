
const chart1 = [
    {
        name:'凌总',
        ip:'192.168.0.1',
        total:68,
        usb:34,
        web:12,
        print:0,
        screenShot:0,
        others:22,
    },
    {
        name:'李秘书',
        ip:'192.168.0.2',
        total:45,
        usb:17,
        web:20,
        print:0,
        screenShot:0,
        others:8,
    },
    {
        name:'刘组长',
        ip:'192.168.0.3',
        total:23,
        usb:10,
        web:8,
        print:0,
        screenShot:0,
        others:5,
    },
    {
        name:'小赵',
        ip:'192.168.0.3',
        total:44,
        usb:25,
        web:15,
        print:0,
        screenShot:0,
        others:4,
    },
    {
        name:'小钱',
        ip:'192.168.0.3',
        total:23,
        usb:10,
        web:8,
        print:0,
        screenShot:0,
        others:5,
    }
]

const chart2={
    total:263,
    online:78
}


const chart3={
    total:263,
    validate:22
}

const chart4 = {
    total_scan:45,
    non_scan:28,
    warn_scan:14,
    erro_scan:3,
}
const chart5 = {
    '1':{
        'statisc':{
            total:23,
            screen:5,
            usb:6,
            email:9,
            web:1,
            print:2,
        },
        'time_data':[
            {date:'02.01',value:3},
            {date:'02.02',value:5},
            {date:'02.03',value:9},
            {date:'02.04',value:20},
            {date:'02.05',value:21},
            {date:'02.06',value:23},
            {date:'02.07',value:23},
        ]
    },
    '2':{
        'statisc':{
            total:138,
            screen:24,
            usb:14,
            email:33,
            web:40,
            print:27,
        },
        'time_data':[
            {date:'02.01',value:67},
            {date:'02.05',value:23},
            {date:'02.10',value:11},
            {date:'02.15',value:20},
            {date:'02.20',value:9},
            {date:'02.25',value:17},
            {date:'02.29',value:23},
        ]
    },
    '3':{'statisc':{
        total:23,
        screen:5,
        usb:6,
        email:9,
        web:1,
        print:2,
    },
    'time_data':[
        {date:'02.01',value:3},
        {date:'02.02',value:5},
        {date:'02.03',value:9},
        {date:'02.04',value:20},
        {date:'02.05',value:21},
        {date:'02.06',value:23},
        {date:'02.07',value:23},
    ]},
    '4':{'statisc':{
        total:23,
        screen:5,
        usb:6,
        email:9,
        web:1,
        print:2,
    },
    'time_data':[
        {date:'02.01',value:3},
        {date:'02.02',value:5},
        {date:'02.03',value:9},
        {date:'02.04',value:20},
        {date:'02.05',value:21},
        {date:'02.06',value:23},
        {date:'02.07',value:23},
    ]}
}

const chart6 = [
    {name:'scan1',percent:28},
    {name:'scan2',percent:37},
    {name:'scan3',percent:12},
    {name:'scan4',percent:29},
    {name:'scan5',percent:55},
    {name:'scan6',percent:9},
]
export default [
    {
        url:'/dlp/violation/client/chart',
        type:'get',
        response: config => {
            const content = chart1
            return {
              code: 200,
              data: {
                total: content.length,
                statisc: content,
                items: content
              }
            }
          }

    },

    {
        url:'/dlp/client/onlinechart',
        type:'get',
        response: config => {
            const content2 = chart2
            return {
                code:200,
                data:{
                    total: content2.length,
                    items: content2
                }
            }
        }
    },

    {
        url:'/dlp/client/validatechart',
        type:'get',
        response: config => {
            const content = chart3
            return {
                code:200,
                data:{
                    total: content.length,
                    items: content
                }
            }
        }
    },

    {
        url:'/dlp/scan/resultchart',
        type:'get',
        response: config => {
            const content = chart4
            return {
                code:200,
                data:{
                    total: content.length,
                    items: content
                }
            }
        }
    },
    {
        url:'/dlp/validation/total\.*',
        type:'get',
        response: config => {
            
            const {time_scale} = config.query
            const content = chart5[time_scale]
            // const content = chart5['1']
            return {
                code:200,
                data:{
                    total: content.length,
                    items: content
                }
            }
        }
    },
    {
        url:'/dlp/scan/percent',
        type:'get',
        response: config => {
            const content = chart6
            return {
                code:200,
                data:{
                    total: content.length,
                    items: content
                }
            }
        }
    }
]