import React from 'react'
import PageHeader from '../../components/PageHeader/index';
import TeacherItem from '../../components/TeacherItem/index';

import "./styles.css"

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">

            <PageHeader title="Estes sâo os proffys disponiveis.">
                <form  id="search-teachers">

                    <div className="input-block">
                        <label htmlFor="subject"> Matéria</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time"> Matéria</label>
                        <input type="text" id="time" />
                    </div>

                </form>
            </PageHeader>

            {/* Conteudo principal da pagina */}
            <main>
                <TeacherItem />
                <TeacherItem />
            </main>

        </div>
    )
}

export default TeacherList