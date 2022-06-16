import React from 'react';
import ReactPlayer from 'react-player'

export default function Live() {
  return (
    <div className='liveScreen'>
      <ReactPlayer  controls={true} playing={true} url='http://103.199.161.254/Content/asianetnews/Live/Channel(Asianetnews)/index.m3u8' />
    </div>
  )
}
