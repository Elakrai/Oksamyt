import React from 'react';
import './style.css';
import dress from './img/dress_one.jpeg';
import repair from './img/repair.jpeg';
import fabric from './img/fabric.jpeg';
import about from './img/about.jpeg';


function Gallery() {
    return(
        <section className="gallery">
            <div className="gallery_block">
                <div className="gallery_header">
                    <h1>Наші послуги</h1>
                </div>
                <div className="gallery_item">
                    <img src={dress} alt={"dress"} width={450} height={300}/>
                </div>
                <div className="gallery_item">
                    <h3>Пошиття</h3>
                    <p>
                        В нашому ательє ви можете зробити замовлення на пошиття нової сукні, 
                        костюма, спідниці, брюк, національного одягу за індивідуальними ескізами. 
                        Ми працюємо як зі своєю тканиною, так і з тканиною замовника. 
                        Фурнітура підбирається за бажанням клієнта. 
                        В роботу приймаємо замовлення на пошиття постільної білизни, 
                        наматрацників, штор та тюлі. 
                    </p>
                </div>
                <div className="gallery_item">
                    <img src={repair} alt={"repair"} width={450} height={300}/>
                </div>
                <div className="gallery_item">
                    <h3>Ремонт</h3>
                    <p>
                        Ми пропонуємо різні види ремонту одягу. За бажанням замовника і в стислі терміни.
                        Ремонтуємо та підганяємо як новий одяг, так і одяг бувший у вжитку в чистому вигляді. 
                        Встановлюємо кнопки, гаплики та іншу фурнітуру. Міняємо бігунки в блискавках. 
                    </p>
                </div>
                <div className="gallery_item">
                    <img src={fabric} alt={"fabric"} width={450} height={300}/>
                </div>
                <div className="gallery_item">
                    <h3>Продаж</h3>
                    <p>
                        Ми продаємо різні види тканин, блискавки, стрічки, мереживо, клейові 
                        та тканини утеплювачі, а також поролон. Виробляємо та продаємо національний одяг, 
                        новорічні костюми, подушки та постільну білизну. 
                        Шиємо чохли різних розмірів та призначення, стандартних та нестандартних розмірів. 
                        Обтягуємо ґудзики з тканини замовника.  
                    </p>
                </div>
                <div className="gallery_item">
                    <img src={about} alt={"fabric"} width={450} height={300}/>
                </div>
                <div className="gallery_item">
                    <h3>Продаж матеріалів</h3>
                    <p>
                        Також, ми продаємо  галантерейні товари і 
                        фурнітуру для шиття та рукоділля, виготовлення різних творчих поробок. 
                        Пропонуємо інструменти для в’язання, вишивки, шиття, плетення: 
                        застібки, блискавки, бігунки, ґудзики, шпиці, голки, нитки, кнопки, 
                        стрічки, мереживо, «липучки», обручі, п’яльця,  резинки та інший крам. 
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Gallery;