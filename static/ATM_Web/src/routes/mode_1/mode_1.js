import React from 'react';
import io from 'socket.io-client'
import video from 'video.js';
import videoSWF from 'videojs-swf/dist/video-js.swf';
import {Col, Row, Tag} from 'antd'
import "video.js/dist/video-js.css";
import back from '../../assets/back/back_large.jpg'
import './model_1.css'

const uri = 'http://localhost/test';
const options = { transports: ['websocket'] };

const content_1_height = 600 - 230
const warning_img_height = 230
const img_col = 5
const img_width = 230

class App extends React.Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            src:back,
            //频繁回头
            turn_round:back,
            //聚集
            gather:back,
            //遮挡
            shelter:back,
            //频繁出入
            come_out:back,
            //
            hand_det:back,

        };

        this._ws_new_state = this._ws_new_state.bind(this)
        this.socket = 1


    }

    _ws_new_state(data){
        let url = 'http://127.0.0.1:5000/'
        let results = data.result
        for (let result of results){
            console.log('*******')
            console.log(`${url}${result.path}`)
            console.log(result.mode)
            switch (result.mode) {
                case 0:
                    this.setState({
                        turn_round:`${url}${result.path}`
                    })
                    break
                case 1:
                    this.setState({
                        gather:`${url}${result.path}`
                    })
                    break
                case 2:
                    this.setState({
                        shelter:`${url}${result.path}`
                    })
                    break
                case 3:
                    this.setState({
                        come_out:`${url}${result.path}`
                    })
                    break
                case 4:
                    this.setState({
                        hand_det:`${url}${result.path}`
                    })
                    break
                default:
                    break
            }
        }

        // this.setState({
        //     src:`data:image/png;base64,${data.data.img}`
        //     // src:`http://192.168.88.91:9000${data.data.img}`
        // },()=>{
        // })

    }

    componentDidMount() {
        //拉流
        let options_1 = {
            autoplay:    true,
            controls:    true,
            preload:     true, //预加载
            fluid:       true, //播放器将具有流畅的大小。换句话说，它将扩展以适应其容器
            aspectRatio: '16:9',//将播放器置于流体模式，在计算播放器的动态大小时使用。由冒号（"16:9"或"4:3"）分隔的两个数字
            techOrder:   ['html5'],//Video.js技术首选的顺序
            live: true,
            sources: [{
                type: "application/x-mpegURL",
                // src: "http://192.168.88.27/hls/room_1.m3u8",
                // src: "http://192.168.88.92:8080/hls/test.m3u8",
                src: "http://192.168.88.25/hls/room.m3u8",
                withCredentials: false
            }],
            // html5: { hls: { withCredentials: true } },
            html5: { hls: { withCredentials: false } },
        }

        let options_2 = {
            autoplay:    true,
            controls:    true,
            preload:     true, //预加载
            fluid:       true, //播放器将具有流畅的大小。换句话说，它将扩展以适应其容器
            aspectRatio: '16:9',//将播放器置于流体模式，在计算播放器的动态大小时使用。由冒号（"16:9"或"4:3"）分隔的两个数字
            techOrder:   ['html5'],//Video.js技术首选的顺序
            live: true,
            sources: [{
                type: "application/x-mpegURL",
                // src: "http://192.168.88.27/hls/room_1.m3u8",
                // src: "http://192.168.88.92:8080/hls/test.m3u8",
                src: "http://192.168.88.25/hls/room_2.m3u8",
                withCredentials: false
            }],
            // html5: { hls: { withCredentials: true } },
            html5: { hls: { withCredentials: false } },
        }


        this.player_1 = video('example_video_1',options_1);


        this.player_2 = video('example_video_2',options_2);


        // let url = window.location.origin;
        let url = '127.0.0.1:5000/'
        url = `${url}Camera_Web_ws`

        //本机测试 用固定 url
        console.log('长连接 服务器')
        this.socket = io(url)
        this.socket.on('new_state',this._ws_new_state);
        this.start_time = new Date().getTime()
        // this.socket.on('new_person_state',this._ws_new_person_state);

    }

    componentWillUnmount() {
        this.player_1.dispose()
        this.player_2.dispose()
        this.socket.emit('disconnect')
    }


    render() {

        return(
            <div className="Mode_1">
                <Row gutter={16} style={{backgroundColor:'#F0F2F5', padding:10}}>
                    <Col span={12} >
                        <Tag color={'#FA0F21'} style={{position: 'absolute', top:10, right:10, zIndex:99}}>
                            {'正视摄像头'}
                        </Tag>
                        <video id="example_video_1" className="video-js vjs-custom-skin vjs-fluid"  preload="auto"  data-setup=''
                               style={{width:'100%', height:content_1_height}}
                               ref={(input) => { this.video = input; }}

                        >
                            <source src="rtmp://127.0.0.1:1935/rtmplive/room" type="rtmp/flv"/>
                        </video>
                    </Col>
                    <Col span={12} >
                        <Tag color={'#FA0F21'} style={{position: 'absolute', top:10, right:10, zIndex:99}}>
                            {'俯视摄像头'}
                        </Tag>
                        <video id="example_video_2" className="video-js vjs-custom-skin vjs-fluid"  preload="auto"  data-setup=''
                               style={{width:'100%', height:content_1_height}}
                               ref={(input) => { this.video = input; }}

                        >
                            <source src="rtmp://127.0.0.1:1935/rtmplive/room" type="rtmp/flv"/>
                        </video>
                    </Col>
                </Row>
                <Row gutter={12} type="flex" justify="space-between" style={{backgroundColor:'#F0F2F5', padding:10}}>
                    <div span={img_col} style={{width:img_width, height:warning_img_height, position:'relative'}}>
                        <Tag color={'#FA0F21'} style={{position: 'absolute', top:10, left:20}}>
                            {'聚集检测'}
                        </Tag>
                        <img width="100%" height={`${warning_img_height}`} src={this.state.turn_round}/>
                    </div>
                    <div span={img_col - 1} style={styles.waring_img}>
                        <Tag color={'#FA0F21'} style={styles.waring_tag}>
                            {'手部检测'}
                        </Tag>
                        <img width="100%" height={`${warning_img_height}`} src={this.state.gather}/>
                    </div>
                    <div span={img_col} style={styles.waring_img}>
                        <Tag color={'#FA0F21'} style={styles.waring_tag}>
                            {'频繁回头'}
                        </Tag>
                        <img width="100%" height={`${warning_img_height}`} src={this.state.shelter}/>
                    </div>
                    <div span={img_col} style={styles.waring_img}>
                        <Tag color={'#FA0F21'} style={styles.waring_tag}>
                            {'遮挡检测'}
                        </Tag>
                        <img width="100%" height={`${warning_img_height}`} src={this.state.come_out}/>
                    </div>
                    <div span={img_col} style={styles.waring_img}>
                        <Tag color={'#FA0F21'} style={styles.waring_tag}>
                            {'频繁出入'}
                        </Tag>
                        <img width="100%" height={`${warning_img_height}`} src={this.state.hand_det}/>
                    </div>
                </Row>
            </div>
        )
    }

}

const styles = {
    waring_img :{
        width:img_width,
        height:warning_img_height,
        position:'relative'
    },
    waring_tag:{
        position: 'absolute',
        top:10,
        left:20
    }
}

export default App;
