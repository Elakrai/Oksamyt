import React from 'react';
import './style.css';

function AboutInfo() {
    return(
        <section className="about_info">
            <div className="about_block">
                <div className="about_info_img">

                </div>
                <div className="about_info_text">
                        <h2>Про нас</h2>
                        <p>
                            Ми надаємо послуги з пошиття і ремонту одягу з 2000 року. 
                            А у 2007 році запрацював власне сам магазин та ательє «Оксамит». 
                            За цей час накопичено багато досвіду з обслуговування клієнтів і 
                            виконання різних видів швейних та ремонтних робіт. 
                            Ми будемо раді бачити Вас завжди і надіємось, 
                            що допоможемо Вам вирішити ваші проблеми своєю копіткою  працею.
                        </p>
                </div>
            </div>
        </section>
    )
}
export default AboutInfo;