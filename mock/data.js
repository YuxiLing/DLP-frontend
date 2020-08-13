const nameList=[
    {id:'001',label:'dataSet1',value:'dataSet1'},
    {id:'002',label:'dataSet2',value:'dataSet2'},
    {id:'003',label:'dataSet3',value:'dataSet3'},
    {id:'004',label:'dataSet4',value:'dataSet4'},
    {id:'005',label:'dataSet5',value:'dataSet5'},
    {id:'006',label:'dataSet6',value:'dataSet6'},
]

export default [
    {
        url:'/dlp/data/namelist',
        type:'get',
        response: config => {
            return {
                code:200,
                data:nameList
            }
        }
    },
]