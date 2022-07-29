import React from "react";
import Avaj from '../../../../img/Ava.jpg';
import ava from './Ava.module.css'

function Ava() {
  return <div className={ava.content}>



<p className="name">Андрющенко Люда</p>

      <div className="ava">
        <table border="20px">
          <img src={Avaj} height='250' width='250' ></img>

          <div className="btn">
            <button>Фотографии</button>

            <button>Истории</button>
            <div><button onClick={like}></button></div>
          </div>
        </table>
      </div>



     




  </div>



}


function like() {
  alert("Вы жмякнули на кнопку");
}


export default Ava;