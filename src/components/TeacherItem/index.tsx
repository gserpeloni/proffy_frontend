import React from 'react'
import whatsappIcon from '../../assets/icons/whatsapp.svg'
import "./styles.css";

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header >
                <img src="https://avatars1.githubusercontent.com/u/30409723?s=460&u=2744f4cf9f80f0f3a179609756acfc79fe36b35b&v=4" alt="" />
                <div>
                    <strong> Gustavo Serpeloni  </strong>
                    <span> Física </span>
                </div>
            </header>

            <p>
                Entusiatas dos modelos fisicos <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa, fugit eligendi expedita omnis maiores aspernatur
                commodi vel voluptates itaque, quod temporibus mollitia
                laudantium nesciunt, beatae assumenda ipsam necessitatibus.
                Vitae, ea.
             </p>

            <footer>
                <p>
                    Preço/ Hora
                <strong> R$ 80,00</strong>
                </p>

                <a href="">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Contact
                </a>
            </footer>
        </article>
    )
}

export default TeacherItem
