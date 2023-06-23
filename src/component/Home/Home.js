import React, { Fragment } from "react";
import Navs from "../Navs/Navs";
import Header from "./Header";
import './Home.css';
import prideimg from './../../assets/1.png'
import ingredient from './../../assets/2.png'
import Data from "../../Data";
import { Carousel } from "react-bootstrap";
import item1 from './../../assets/1.jpg'
import item2 from './../../assets/2.jpg'
import Footer from "../Footer/Footer";

const Home = ()=> {
    const blogitem = Data.map((item)=>{
        return (
            <div className="col-md-4">
                <div className="box">
                <img src={item.img} />
                <h5>{item.title}</h5>
                <p>{item.timer}</p>
                <h4>{item.price}</h4>
                </div>
                <button><a href="">Order Now</a></button>
            </div>
        );
    })
    return (
        <Fragment>

        <Header/>
        <section id='about' className="numbers">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h2>1287+</h2>
                        <h6>SAVINGS</h6>
                    </div>
                    <div className="col-md-3">
                        <h2>5786+</h2>
                        <h6>PHOTOS</h6>
                    </div>
                    <div className="col-md-3">
                        <h2>1440+</h2>
                        <h6>ROCKETS</h6>
                    </div>
                    <div className="col-md-3">
                        <h2>7110+</h2>
                        <h6>GLOBES</h6>
                    </div>
                </div>
            </div>
        </section>
        <section id="pride" className="pride">
            <div className="container">
                <div className="row">
                <div className="col-md-7">
                        <img src={prideimg} title='prideimg' />
                    </div>
                    <div className="col-md-5">
                        <h2>We pride ourselves on making real food from the best ingredients.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <button><a href ="#">Learn More</a></button>
                    </div>
                </div>
            </div>
        </section>


        <section id='' className="ingredients">
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                <h2>We make everything by hand with the best possible ingredients.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <ul>
                    <li>Etiam sed dolor ac diam volutpat.</li>
                    <li>Erat volutpat aliquet imperdiet.</li>
                    <li>purus a odio finibus bibendum.</li>
                </ul>
                <button>
                    <a href="">Learn More</a>
                </button>
                </div>
                <div className="col-md-6">
                    <img src={ingredient} alt="ingredient"/>
                </div>
                </div>
                </div>
                
        </section>

        <section id ='' className="paralex">
        <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <h2>When a man's stomach is full it makes no <br/> difference whether he is rich or poor.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br/> finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <a href="">Watch Our Story</a>
                    </div>
                </div>
                </div>
        </section>

        <section id ="explore" className="blogs">
            <div className="container">
            <div className="row">
            <div className="col-md-12 col-lg-12">
                <h2>Explore Our Foods</h2>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet <br/> leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and <br/> Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</h6>
            </div>
            </div>
            <div className="row">
                {blogitem}
            </div>
            </div>
        </section>

        <section id='review' className="sliders">
            <div className="container">
        <div className="row ">
            <div className="col-md-12 col-lg-12">
                <h2>Testimonials</h2>
            </div>
            </div>
            </div>
            <Carousel className="container">
                
            <Carousel.Item>
                <img src={item1}/>
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <span> Someone Someone - Full Stack Web Developer</span>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={item2}/>

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <span>Zino Harkat - Photoshop Designer</span>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </section>

        <section id="faq" className="faq">
            
            <div className="container">
                <h2>Frequently Asked Questions</h2>
            <div className="row">
            <div className="col-md-6">
                    <h3> ~ Is Foodera Bread really baked fresh each day?</h3>
                    <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.
                    </p>
                </div>
                <div className="col-md-6">
                    <h3> ~ Do you bake breads containing animal fats or products?</h3>
                    <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.
                    </p>
                </div>
                <div className="col-md-6">
                    <h3> ~ Can I order your products online?</h3>
                    <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.
                    </p>
                </div>
                <div className="col-md-6">
                <h3> ~ When are you opening a shop near me?</h3>
                    <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.
                    </p>
                </div>
                </div>
                
            </div>

        </section>


        <section className="passion">
        <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <h2>Baked fresh daily by bakers with passion.</h2>
                    </div>
                </div>
                </div>
        </section>

        <Footer/>



        </Fragment>
        
    );
}


export default Home;