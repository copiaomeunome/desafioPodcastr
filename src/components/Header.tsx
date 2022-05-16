import '../styles/header.scss';
import logoImg from '../assets/images/logo.svg';
export function Header(){
    function monthConverter(monthNumber: number){
        let monthExtended;
        let monthList  = ['Janeiro', 'Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
        monthExtended = monthList[monthNumber];
        return monthExtended;
    }
    function dayConverter(dayNumber: number){
        let dayExtended;
        let dayList  = ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'];
        dayExtended = dayList[dayNumber];
        return dayExtended;
    }
    let date = new Date();
    let month = monthConverter(date.getMonth());
    let day = dayConverter(date.getDay())+', '+date.getDate();
    let currentDate = day + " " + month;
    return (
        <div id='header'>
            <div id='logo'><img src={logoImg} alt="" /></div>
            <p id='textoHeader'>O melhor para você ouvir, sempre</p>
            <p id='date'>{currentDate}</p>
        </div>
    )
}