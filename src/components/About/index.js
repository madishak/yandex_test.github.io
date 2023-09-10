import './styles.css';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>Madina Karachai</h1>
      <div className='img__container'>
        <img className='img-madina' src='/madina.jpeg' alt='madina'/>
        <img className='img-madina' src='/madina_school.jpeg' alt='madina_school'/>
      </div>
      <a className='link-git' href="https://github.com/madishak/yandex_test">Git репозиторий</a>
      <p>
        Когда, после тёмных дней, ты возвращаешься за работу,
        когда в свободное время ты интересуешься машиннным обучением, когда с радостью преподаёшь
        WEB, и день не день, без строчки кода - ты точно на своём месте. Так я
        понимаю, что программирование - это моё! Мне нравится, то что создается
        людьми, структурированное, творческое и виден результат своих трудов,
        программирование как раз из этой области, поэтому и любимое занятие))!
      </p>
      <Link to="game" className="btn">Play Game</Link>
      <p>CSS Trick</p>
      <video className="video" controls='controls' poster='/madina.jpeg'><source src='/karachai.mp4'/></video>
    </div>
  );
};

export default About;
