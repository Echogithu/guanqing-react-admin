import React from 'react'
import {Card,  Row, Col,  Icon} from 'antd'
import Enroll from './Enroll'

class Lecture extends React.Component {
  render () {
    return (
      <div >
        <Row  type="flex" justify="center">
          <Col  >
            <Card
              hoverable
              style={{ width:400,padding:20}}
              cover={<img alt="example" src="http://gmw.dgut.edu.cn/wechat/Uploads/Picture/2018-04-22/5adc14de3bb9d.jpg" />}

            >
              <h2 style={{fontSize:16 ,color:'#002766',overflow:'hidden'}}>
                招新摆摊 | 新生摆摊宣传
              </h2>
                <Icon type="clock-circle" theme="outlined" /> 2018/09/25
                <Icon type="environment" theme="outlined"  style={{marginLeft:20}}/> 大礼堂
                <Icon type="user" theme="outlined"  style={{marginLeft:20}}/>吕敬人
                <br/>
                <Enroll />
            </Card>
          </Col>
        </Row>

      </div>

      )
      }
    }

export default Lecture
