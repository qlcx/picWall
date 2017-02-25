import React, { Component } from 'react'

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
  componentDidMount() {
    let aImg = document.getElementsByClassName('picContainer_img')
    // 窗口可视宽度
    let windowCW = document.documentElement.clientWidth
    // 计算可以容纳多少列
    let row_cnt = Math.floor(windowCW / 240)
    // 居中
    let center = (windowCW - row_cnt * 240) / 2
    // 存放imgContainer的高度
    let arrH = []
    
    for(let i = 0; i < aImg.length; i++) {
      console.log(aImg.length)
      let j = i ? (i % row_cnt) : 0

      if(arrH.length === row_cnt) {
        // 一行排满后移到下一行
        aImg[i].style.left = center + j*240 + 'px'
        aImg[i].style.top = arrH[j] + 4 + 'px'
        arrH[j] += aImg[i].offsetHeight + 4
        
      } else {
        arrH[j] = aImg[i].offsetHeight
        aImg[i].style.left = center + 236*j+4*j + 'px'
        aImg[i].style.top = 0
      }
    }
  }

  render() {
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