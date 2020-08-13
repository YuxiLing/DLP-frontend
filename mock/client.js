const groupList=[
    { value: "001", label: "技术组" },
    { value: "002", label: "销售组" }
  ]
const groupInfo =[
    {id:'001',name:'咸鱼组',comments:'*****',time:'2020-03-10 12:00:03',detail:'****'},
    {id:'002',name:'销售组',comments:'*****',time:'2020-03-10 12:00:03',detail:'****'},
    {id:'003',name:'后端技术组',comments:'*****',time:'2020-03-10 12:00:03',detail:'****'},
    {id:'004',name:'前端技术组',comments:'*****',time:'2020-03-10 12:00:03',detail:'****'},
    {id:'005',name:'人力资源部',comments:'*****',time:'2020-03-10 12:00:03',detail:'****'},
    {id:'006',name:'财务部',comments:'*****',time:'2020-03-10 12:00:03',detail:'****'},
    {id:'007',name:'综合部',comments:'*****',time:'2020-03-10 12:00:03',detail:'****'},
    {id:'008',name:'董事长',comments:'*****',time:'2020-03-10 12:00:03',detail:'凌老板 \t 192.168.0.1 \t 2020-03-11 12:20:32'},
    {id:'009',name:'腊鱼组',comments:'*****',time:'2020-03-10 12:00:03',detail:'****'},
]
const clientList=[
    { group: "001", value: "2432", label: "Miss Liu" },
    { group: "001", value: "2433", label: "Mr Wang" },
    { group: "002", value: "2434", label: "Miss Kong" },
    { group: "002", value: "2435", label: "Miss Chen" }
  ]
const ipList = [
    {label:'192.168.0.177',value:'192.168.0.177'},
    {label:'192.168.0.178',value:'192.168.0.178'},
    {label:'192.168.0.179',value:'192.168.0.179'},
    {label:'192.168.0.171',value:'192.168.0.171'},
    {label:'192.168.0.172',value:'192.168.0.172'},
    {label:'192.168.0.173',value:'192.168.0.173'},
]
const statusList = {
    total:210,
    online:123,
    validate:73,
    scan:172,
    normal:63,

}
const infoList=[
    {name:'凌总',ip:'202.117.23.09',type:'董事',times:'36'},
    {name:'小李',ip:'202.117.23.09',type:'综合部',times:'26'},
    {name:'小刘',ip:'202.117.23.09',type:'综合部',times:'19'},
    {name:'小凌',ip:'202.117.23.09',type:'综合部',times:'17'},
    {name:'小赵',ip:'202.117.23.09',type:'后端技术组',times:'11'},
    {name:'小钱',ip:'202.117.23.09',type:'未分组',times:'8'},
    {name:'小王',ip:'202.117.23.09',type:'综合部',times:'7'},
    {name:'小李',ip:'202.117.23.09',type:'综合部',times:'6'},
    {name:'小刘',ip:'202.117.23.09',type:'综合部',times:'3'},
    {name:'小凌',ip:'202.117.23.09',type:'综合部',times:'1'},
    {name:'小赵',ip:'202.117.23.09',type:'后端技术组',times:'0'},
    {name:'小钱',ip:'202.117.23.09',type:'未分组',times:'0'},
    {name:'咸鱼',ip:'202.117.23.09',type:'咸鱼组',times:'0'},
]

const clientInfoList = [
    {id:'001',name:'小王',ip:'202.117.23.09',status:'综合部',comments:'**********',time:'2020-01-11-12:29:01',detail:'凌老板     192.168.0.1     2020-03-11 12:20:32'},
    {id:'002',name:'小李',ip:'202.117.23.09',status:'未分组',comments:'**********',time:'2020-01-11-12:29:01',detail:'****'},
    {id:'003',name:'小刘',ip:'202.117.23.09',status:'综合部',comments:'**********',time:'2020-01-11-12:29:01',detail:'****'},
    {id:'004',name:'小凌',ip:'202.117.23.09',status:'综合部',comments:'**********',time:'2020-01-11-12:29:01',detail:'****'},
    {id:'005',name:'小赵',ip:'202.117.23.09',status:'后端技术组',comments:'**********',time:'2020-01-11-12:29:01',detail:'****'},
    {id:'006',name:'小钱',ip:'202.117.23.09',status:'未分组',comments:'************',time:'2020-01-11-12:29:01',detail:'****'},
    {id:'007',name:'咸鱼',ip:'202.117.23.09',status:'咸鱼组',comments:'***********',time:'2020-01-11-12:29:01',detail:'凌老板     192.168.0.1     2020-03-11 12:20:32'},
]

const noGroupList = [
    {id:'002',name:'小李'},
    {id:'006',name:'小钱'},
]
export default [
    {
        url:'/dlp/client/group',
        type:'get',
        response: _ => {
            return {
                code:200,
                data:groupList
            }
            
        }
    },
    {
        url:'/dlp/client/group',
        type:'post',
        response: _ => {
            return {
                code:200
            }
            // setTimeout(_ => {
            //     return {code:200}
            // },500)
        }
    },
    {
        url:'/dlp/client/infogroup',
        type:'get',
        response: _ => {
            return {
                code:200,
                data:groupInfo
            }
        }
    },
    {
        url:'/dlp/client/list',
        type:'get',
        response: _ => {
            return {
                code:200,
                data:clientList
            }
            
        }
    },
    {
        url:'/dlp/client/ip',
        type:'get',
        response: _ => {
            return {
                code:200,
                data:ipList
            }
        }
    },
    {
        url:'/dlp/client/status',
        type:'get',
        response: _ => {
            return {
                code:200,
                data:statusList
            }
        }
    },
    {
        url:'/dlp/client/validateinfo',
        type:'get',
        response: config => {
            const {type,key} = config.query
            return {
                code:200,
                data:infoList
            }
        }
    },
    {
        url:'/dlp/client/info',
        type:'get',
        response: _ => {
            return {
                code:200,
                data:clientInfoList
            }
        }
    },
    {
        url:'/dlp/client/nogroup',
        type:'get',
        response: _ => {
            return {
                code:200,
                data:noGroupList
            }
        }
    }
]