<template>
    <div>
        <a-card :title="msg">
            <a-button slot="extra" @click="expartExe">导出</a-button>
            <a-table
                :columns="columns"
                :dataSource="optionData"
                :pagination="false">
            </a-table>
        </a-card>
    </div>
</template>
<script>

import { export2Excel } from '../excel/Export2Excel'

export default {
    props: {
        msg: String
    },
    data() {
        return {
            optionData: [
                {
                userName: '操作人1',
                createTime: '2019-9-9 11：11',
                operation: '创建c2b订单'
                },
                {
                userName: '操作人2',
                createTime: '2019-9-12 11：11',
                operation: '用户到店鉴定'
                }
            ],
            columns: [
                {
                title: '操作人',
                dataIndex: 'userName'
                },
                {
                title: '操作时间',
                dataIndex: 'createTime'
                },
                {
                title: '操作记录',
                dataIndex: 'operation'
                }
            ]
        }
    },
    methods: {
        expartExe () {
            console.log('expartExe', 'expartExe()')
            // export2Excel(this.columns1,this.optionData)
            import('@/excel/Export2Excel').then(excel => {
                const tHeader = ['操作人','操作时间', '操作记录'] //表头
                var filterVal = ['userName','createTime', 'operation'] //表头对应字段名
                var list = this.optionData //数据来源
                var data = this.formatJson(filterVal,list) //数据格式化
                var index1='商品列表' //导出时文件名
                excel.export_json_to_excel(tHeader, data, index1) //导出文件
		    })
        },
        //对导出数据格式化处理
        formatJson(filterVal, jsonData) {
            return jsonData.map(v => filterVal.map(j => {
                if (j === 'status') {
                if(v[j] === 'yes' || v[j] == '上架'){
                    return v[j]='上架'
                }
                if(v[j] === 'no' || v[j] == '下架'){
                    return v[j]='下架'
                }
                }else{  
                    return v[j]
                }
            }))
        } 	 
  }
}
</script>