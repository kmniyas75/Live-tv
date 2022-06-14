import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Main() {
  
  return (
    <div className="container">
      <section id='4-icons'>
  <div className="row g-2">
    <div className="col-6">
     <div className="p-3 border rounded bg-light text-center">
       <a href="/live"><img className='img-fluid' src="http://surl.li/ceuwu" alt='images'></img></a>
      <div className="d-flex justify-content-center align-items-center h-100">
          <a className="btn btn-lg" href="/live" role="button"
          ><button class="btn btn-primary" type="button"><h3>Live</h3></button></a>
      </div>
     </div>
    </div>
    <div className="col-6">
    <div className="p-3 border rounded bg-light text-center">
    <a href="/html"><img className='img-fluid' src="http://surl.li/ceuwu" alt='images'></img></a>
      <div className="d-flex justify-content-center align-items-center h-100">
          <a className="btn btn-lg" href="/html" role="button"
          ><button class="btn btn-primary" type="button"><h3>HTML</h3></button></a>
      </div>
     </div>
    </div>
    <div className="col-6">
    <div className="p-3 border rounded bg-light text-center">
    <a href="/polling"><img className='img-fluid' src="http://surl.li/ceuwu" alt='images'></img></a>
      <div className="d-flex justify-content-center align-items-center h-100">
          <a className="btn btn-lg" href="/polling" role="button"
          ><button class="btn btn-primary" type="button"><h3>POLLING</h3></button></a>
      </div>
     </div>
    </div>
    <div className="col-6">
    <div className="p-3 border rounded bg-light text-center">
    <a href="/screen"><img className='img-fluid' src="http://surl.li/ceuwu" alt='images'></img></a>
      <div className="d-flex justify-content-center align-items-center h-100">
          <a className="btn btn-lg" href="/screen" role="button"
          ><button class="btn btn-primary" type="button"><h3>SCREEN</h3></button></a>
      </div>
     </div>
    </div>
  </div>
  </section>

  <section id='news'>
   
  </section>
</div>

  )
}
