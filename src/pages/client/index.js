import React, {Component} from "react";
import {Card,Table} from 'antd';
import {PageHeaderWrapper} from "@ant-design/pro-layout";
import {connect} from 'umi'

@connect(({client,loading})=>({
  client,
  loading:loading.models.client
}))
class ClientList extends Component{

  state={
    page:1,
    count:5
  }

  componentDidMount() {
    const {page,count} = this.state
    this._loadNew(page,count)
  }

  _loadNew(page,count){
    const { dispatch } = this.props;
    dispatch({
      type: 'client/getData',
      payload: {page:page-1,count}
    });
  }

  handleDelete(record){
    const {dispatch} = this.props;
    dispatch({
      type:'client/deleteData',
      payload: record.id,
      callback:this.deleteSuccess
    })
  }

  deleteSuccess=()=>{
    console.log('删除成功')
    const {page,count} = this.state
    this._loadNew(page,count)
  }

  render(){
    const {client:{data},loading} = this.props;
    const columns = [
      {
        title:'ID',
        dataIndex:'id',
        align:'center'
      },
      {
        title: '店铺名称',
        dataIndex: 'shop_name',
        align:'center'
      },
      {
        title: '店主姓名',
        dataIndex: 'name',
        align:'center'
      },
      {
        title:'联系方式',
        dataIndex:'phone',
        align:'center'
      },
      {
        title:'平台',
        dataIndex:'party',
        align:'center',
        render:(text,record)=>{
          if(record.party===1){
            return('淘宝')
          }
          if(record.party===2){
            return('京东')
          }
          if(record.party===3){
            return('天猫')
          }
          if(record.party===4){
            return('亚马逊')
          }
        },
      },
      {
        title:'操作',
        dataIndex:'action',
        align:'center',
        valueType: 'option',
        render: (text, record) => (
          <>
            <a
              onClick={()=>this.handleDelete(record)}
            >
              删除
            </a>
          </>)
      }
    ]

    return(
      <PageHeaderWrapper>
       <Card title='客户列表'>
         <Table
           columns={columns}
           rowKey={record=>record.id}
           dataSource={data.items}
           loading={loading}
           pagination={{
             pageSize:this.state.count,
             total:data.total,
             onChange:(page,pageSize)=>{
               this.setState({
                 page
               });
               this._loadNew(page,pageSize)
             }}}
           />
       </Card>
      </PageHeaderWrapper>
    )
  }}



export default ClientList


