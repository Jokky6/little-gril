import React , {Component} from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Button, Card, Form, Input, message, Select } from 'antd';
import { connect } from 'umi';

const FormItem = Form.Item;
const {Option} = Select;

@connect(({create,loading})=>({
  create,
  loading:loading.models.create
}))
class Create extends Component{
  state={
    data:{}
  }

  onFinish=(values)=>{
    const {dispatch} = this.props;
    const value = JSON.stringify(values)
    dispatch({
      type:'create/createClientInfo',
      payload:value
    })
  };

  render(){
    const {loading} = this.props;
    const layout = {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 8,
      },
    };
    const tailLayout = {
      wrapperCol: { offset:4, span: 8 }
    };


    return(
      <PageHeaderWrapper>
        <Card title="添加客户">
          <Form {...layout} onFinish={this.onFinish}>
            <FormItem name="shop_name"
                      label="店铺名称"
                      rules={[{
                        required: true,
                        message:'店铺名称不能为空'
                      },{
            max:20,
            message: '店铺名称不能超过20字'
            }]}
                      >
              <Input/>
            </FormItem>
            <FormItem name="name"
                      label="店主姓名"
                      rules={[{
                        required: true,
                        message: '店铺姓名不能为空'
                      },{
                        max:8,
                        message:'姓名不能超过8个字符'
                      }]}>
              <Input/>
            </FormItem>
            <FormItem name="phone"
                      label="联系方式"
                      rules={[{
                        required: true,
                        message: '联系方式不能为空'
                      },{
                        pattern: /^1[3|4|5|7|8][0-9]\d{8}$/,
                        message: '手机号码不合法'
                      }]}
                      >
              <Input/>
            </FormItem>
            <FormItem name="party"
                      label="平台"
                      rules={[{
                        required: true,
                        message: '平台不能为空'
                      }]}>
              <Select>
                <Option value="1">淘宝</Option>
                <Option value="2">京东</Option>
                <Option value="3">天猫</Option>
                <Option value="4">亚马逊</Option>
              </Select>
            </FormItem>
            <FormItem {...tailLayout}>
              <Button type="primary" loading={loading} htmlType="submit">提交</Button>
            </FormItem>
          </Form>
        </Card>
      </PageHeaderWrapper>
    )
  }

}

export default Create
