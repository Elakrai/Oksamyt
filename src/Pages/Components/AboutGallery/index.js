import React from 'react';
import './style.css';
import dress from './img/dress_img.jpeg';
import bag from './img/bag_img.jpeg';
import snowman from './img/snowman.jpg';
import pack from './img/pack.jpeg';
import winter_suit from './img/winter_suit.jpeg';
import threads from './img/threads.jpeg';
import needle_details from './img/needle_details.jpeg';
import needle_stuff from './img/needle_stuff.jpeg';
import shelves from './img/shelves.jpeg';
import needle_stuff_two from './img/needle_stuff_two.jpeg';

function AboutGallery() {
    return(
        <section className="about_gallery">
        <div className="about_gallery_block">
            <div className="about_gallery_header">
                <h1>Наші вироби та товари</h1>
            </div>
            <div className="about_gallery_item">
                <img src={dress} alt={"dress"} width={450} height={300}/>
            </div>
            <div className="about_gallery_item">
                <img src={bag} alt={"bag"} width={450} height={300}/>
            </div>
            <div className="about_gallery_item">
                <img src={snowman} alt={"snowman"} width={450} height={300}/>
            </div>
            <div className="about_gallery_item">
                <img src={pack} alt={"pack"} width={450} height={300}/> 
            </div>
            <div className="about_gallery_item">
                <img src={winter_suit} alt={"winter_suit"} width={450} height={300}/>
            </div>
            <div className="about_gallery_item">
                <img src={threads} alt={"threads"} width={450} height={300}/>
            </div>
            <div className="about_gallery_item">
                <img src={needle_details} alt={"needle_details"} width={450} height={300}/>
            </div>
            <div className="about_gallery_item">
                <img src={needle_stuff} alt={"needle_stuff"} width={450} height={300}/>
            </div>
            <div className="about_gallery_item">
                <img src={shelves} alt={"shelves"} width={450} height={300}/>
            </div>
            <div className="about_gallery_item">
                <img src={needle_stuff_two} alt={"needle_stuff_two"} width={450} height={300}/>
            </div>
        </div>
    </section>
    )
}
export default AboutGallery;