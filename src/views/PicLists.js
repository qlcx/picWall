import React, { Component } from 'react'
import { Spin } from 'antd'

import PicContainer from '../components/picLists/PicContainer'
import './PicLists.css'

const picDatas = [
  'https://dummyimage.com/v640x4:3&text=1',
  'https://dummyimage.com/v640x4:4&text=2',
  'https://dummyimage.com/v640x2:3&text=3',
  'https://dummyimage.com/v640x4:10&text=4',
  'https://dummyimage.com/v640x4:6&text=5',
  'https://dummyimage.com/v640x3:5&text=6',
  'https://dummyimage.com/v640x5:3&text=7',
  'https://dummyimage.com/v640x6:5&text=8',
  'https://dummyimage.com/v640x7:7&text=9',
  'https://dummyimage.com/v640x1:3&text=10',
  'https://dummyimage.com/v640x2:3&text=11',
  'https://dummyimage.com/v640x4:3&text=12',
  'https://dummyimage.com/v640x4:3&text=13',

  'https://dummyimage.com/v640x4:3&text=1',
  'https://dummyimage.com/v640x4:4&text=2',
  'https://dummyimage.com/v640x2:3&text=3',
  'https://dummyimage.com/v640x4:10&text=4',
  'https://dummyimage.com/v640x4:6&text=5',
  'https://dummyimage.com/v640x3:5&text=6',
  'https://dummyimage.com/v640x5:3&text=7',
  'https://dummyimage.com/v640x6:5&text=8',
  'https://dummyimage.com/v640x7:7&text=9',
  'https://dummyimage.com/v640x1:3&text=10',
  'https://dummyimage.com/v640x2:3&text=11',
  'https://dummyimage.com/v640x4:3&text=12',
  'https://dummyimage.com/v640x4:3&text=13',
  'https://dummyimage.com/v640x4:3&text=1',
  'https://dummyimage.com/v640x4:4&text=2',
  'https://dummyimage.com/v640x2:3&text=3',
  'https://dummyimage.com/v640x4:10&text=4',
  'https://dummyimage.com/v640x4:6&text=5',
  'https://dummyimage.com/v640x3:5&text=6',
  'https://dummyimage.com/v640x5:3&text=7',
  'https://dummyimage.com/v640x6:5&text=8',
  'https://dummyimage.com/v640x7:7&text=9',
  'https://dummyimage.com/v640x1:3&text=10',
  'https://dummyimage.com/v640x2:3&text=11',
  'https://dummyimage.com/v640x4:3&text=12',
  'https://dummyimage.com/v640x4:3&text=13',
  'https://dummyimage.com/v640x4:3&text=1',
  'https://dummyimage.com/v640x4:4&text=2',
  'https://dummyimage.com/v640x2:3&text=3',
  'https://dummyimage.com/v640x4:10&text=4',
  'https://dummyimage.com/v640x4:6&text=5',
  'https://dummyimage.com/v640x3:5&text=6',
  'https://dummyimage.com/v640x5:3&text=7',
  'https://dummyimage.com/v640x6:5&text=8',
  'https://dummyimage.com/v640x7:7&text=9',
  'https://dummyimage.com/v640x1:3&text=10',
  'https://dummyimage.com/v640x2:3&text=11',
  'https://dummyimage.com/v640x4:3&text=12',
  'https://dummyimage.com/v640x4:3&text=13',
]

class PicLists extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
    }
  }

  componentDidMount() {
    // 等待渲染
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
      this._changePicsLayout()      
    }, 500)

    // 监听页面大小
    window.addEventListener('resize', this._changePicsLayout.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._changePicsLayout.bind(this))
  }

  // 设置图片布局
  _changePicsLayout() {
    let aImg = document.getElementsByClassName('picContainer_img')
    // 窗口可视宽度
    let windowCW = document.documentElement.clientWidth
    // 计算可以容纳多少列
    let row_cnt = Math.floor(windowCW / 235)
    // 居中
    let center = (windowCW - row_cnt * 235) / 2
    // 存放imgContainer的高度
    let arrH = []
    
    for(let i = 0; i < aImg.length; i++) {
      let j = i ? (i % row_cnt) : 0

      if(arrH.length === row_cnt) {
        // 一行排满后移到下一行
        let min = this._findMinH(arrH)
        aImg[i].style.left = center + min*235 +'px'
        aImg[i].style.top = arrH[min] + 10 + 'px'
        arrH[min] += aImg[i].offsetHeight + 15
        
      } else if(i < row_cnt) {
        arrH[j] = aImg[i].offsetHeight + 10
        aImg[i].style.left = center + 235*j + 'px'
        aImg[i].style.top = 10 + 'px'
      } else {
        arrH[j] = aImg[i].offsetHeight
        aImg[i].style.left = center + 235*j + 'px'
        aImg[i].style.top = 0
      }
    }
    
  }

  // 获取长度最短的一列
  _findMinH(arrH) {
    let min_cnt = 0
    for(let i = 0; i < arrH.length; i++) {
      min_cnt = Math.min(arrH[min_cnt], arrH[i]) === arrH[min_cnt] ? min_cnt : i      
    }

    return min_cnt
  }

  render() {
    if(this.state.isLoading && !document.getElementsByClassName('picContainer_img').offsetHeight) {
      return(
        <div className='picList_root'>        
          <Spin size='large' tip='loading'/>
        </div>
      )
    }

    return(
      <div className='picList_root'>
      {this._renderPicList()}
      </div>
    )
  }

  // 渲染图片列表
  _renderPicList() {
    return picDatas.map((data, i) => {
      return(
        <PicContainer key={i} picUrl={data} />
      )
    })
  }
}

export default PicLists 