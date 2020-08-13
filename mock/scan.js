
const tableData= [
    {
      time: "2020-02-11-20:03:21",
      name: "test1",
      ip: "192.168.0.1",
      rule: "策略一",
      comment: "*****",
      result: "未完成"
    },
    {
      time: "2020-02-11-20:03:21",
      name: "test2",
      ip: "192.168.0.1",
      rule: "策略一",
      comment: "*****",
      result: "已完成"
    },
    {
      time: "2020-02-11-20:03:21",
      name: "test3",
      ip: "192.168.0.1",
      rule: "策略一",
      comment: "*****",
      result: "已完成"
    },
    {
      time: "2020-02-11-20:03:21",
      name: "test4",
      ip: "192.168.0.1",
      rule: "策略一",
      comment: "*****",
      result: "未完成"
    },
    {
      time: "2020-02-11-20:03:21",
      name: "test5",
      ip: "192.168.0.1",
      rule: "策略一",
      comment: "*****",
      result: "未完成"
    },
    {
      time: "2020-02-11-20:03:21",
      name: "test6",
      ip: "192.168.0.1",
      rule: "策略一",
      comment: "*****",
      result: "已完成"
    },
    {
      time: "2020-02-11-20:03:21",
      name: "test7",
      ip: "192.168.0.1",
      rule: "策略一",
      comment: "*****",
      result: "已完成"
    }
  ]

export default [
    {
        url:'/dlp/scan/result/list',
        type:'get',
        response: config => {
            const content = tableData
            if(content){
                return {
                    code:200,
                    data:content
                }
            }else {
                return {
                    code:500,
                }
            }
        }
    },
    {
        url:'/dlp/scan/result/list',
        type:'post',
        response:config => {
            try{
                // tableData.push(config.body)
                return {
                    code:200,
                }
            }catch(err){
                return {
                    code:500,
                }
            }
            
            
        }
    }
]