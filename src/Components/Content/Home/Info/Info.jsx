import React from "react";
import info from './Info.module.css'

function Info() {
    return <div className={info.content}>
        <b>
            <font size="6" color="#77dbfc" face="monospace">⭒O СЕБЕ⭒</font>
        </b>
        <div>
            <font size="4" color="#77dbfc" face="monospace">
                <b>⭒</b>ФИО:Андрющенко Людмила Анатольевна<b>⭒</b>
                <br></br>
                <b>⭒</b>Возраст:16 лет <b>⭒</b>
                <br></br>
                <b>⭒</b>День рождения:27.11.05<b>⭒</b>
                <br></br>
                <b>⭒</b>Ученица 10 класса, попутно учусь в IT академии BYTE. <b>⭒</b>
                <br></br>
                <b>⭒</b>Уделяю много время растениям.<b>⭒</b>
                <br></br>
                <b>⭒</b>Не очень общительная, но если найдутся
                <br></br>
                темы для разговора, с радостью поддержу наш разговор.<b>⭒</b>

            </font>

        </div>
    </div>   
}

export default Info;