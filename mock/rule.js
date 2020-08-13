const ruleList = [
    { value: "02391", label: "策略1" },
    { value: "02392", label: "策略2" },
    { value: "02393", label: "策略3" },
    { value: "02394", label: "策略4" },
    { value: "02395", label: "策略5" },
    { value: "02396", label: "策略6" }
  ]
const allRule = [
    {id:'001',time:'2020.02.19',name:'file1',mode:'',dir:'/usr/lib',dirUse:'***',file:'PDF',fileUse:'***',zip:'***',code:'##'},
    {id:'002',time:'2020.02.19',name:'file1',mode:'',dir:'/usr/lib',dirUse:'***',file:'PDF',fileUse:'***',zip:'***',code:'##'},
    {id:'003',time:'2020.02.19',name:'file1',mode:'',dir:'/usr/lib',dirUse:'***',file:'PDF',fileUse:'***',zip:'***',code:'##'},
    {id:'004',time:'2020.02.19',name:'file1',mode:'',dir:'/usr/lib',dirUse:'***',file:'PDF',fileUse:'***',zip:'***',code:'##'},
    {id:'005',time:'2020.02.19',name:'file1',mode:'',dir:'/usr/lib',dirUse:'***',file:'PDF',fileUse:'***',zip:'***',code:'##'},
    {id:'006',time:'2020.02.19',name:'file1',mode:'',dir:'/usr/lib',dirUse:'***',file:'PDF',fileUse:'***',zip:'***',code:'##'},
]
export default [
    {
        url:'/dlp/rule/namelist',
        type:'get',
        response: _ => {
            return {
                code:200,
                data:ruleList
            }
            
        }
    },
    {
        url:'/dlp/rule/list',
        type:'get',
        response: _ => {
            return {
                code:200,
                data:allRule
            }
            
        }
    },
    {
        url:'/dlp/rule/list',
        type:'post',
        response: config => {
            const {form} =config.query
            return {
                code:200,
            }
            
        }
    }
]