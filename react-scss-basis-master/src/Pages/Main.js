import '../styles/Main.scss';
import React from "react";
import logo from '../images/logo.png';
import hero from '../images/heroimg.png'
import triangle from '../images/Triangle.svg'
import cursor from '../images/cursor.png'
import {useEffect, useState} from 'react';

function Main() {

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div class="App">
      <div class="circle-1"></div>
      <div class='main-page'>
        <div class="top-bar">
          <div class='top-bar-logo'>
            <img class="top-bar-logo-img" src={logo}></img>
          </div>
          <div class="top-bar-inner">
            <p class="top-bar-inner-product">Product</p>
            <p class="top-bar-inner-price">Pricing</p>
            <p class="top-bar-inner-customers">Customers</p>
            <p class="top-bar-inner-resources">Resources</p>
            <div class="top-bar-sign-in">
              <p class="top-bar-sign-in-p">Sign in</p>
            </div>
            <div class="top-bar-sign-up">
              <p class="top-bar-sign-up-p">Sign up</p>
            </div>
          </div>
        </div>
        <div class="hero">
          <div class='hero-left-side'>
            <div class='hero-left-side-text'>
              <p class='hero-left-side-text-p'>Work at the speed<br />of thought</p>
              <p class='hero-left-side-text-pp'>Tools, tutorials, design and innovation experts, all in<br />
              one place! The most intuitive way to imagine<br />your next user experience.</p>
            </div>
            <div class="hero-left-side-buttons">
              <div class='hero-left-side-button1'>
                <p class="hero-left-side-button1-p">Get started</p>
              </div>
              <div class='hero-left-side-button2'>
                <div class='hero-left-triangle'></div>
                <p class='hero-left-side-button2-p'>Watch the video</p>
              </div>
            </div>
          </div>
          <div class="hero-right-side">
            <img class="hero-right-side-img" src={hero}></img>
          </div>
        </div>
        <div class="feature">
          <div class="feature-head">
            <p class='feature-head-p'>Product was Built Specifically<br />for You</p>
          </div>
          <div class="feature-cards">
            <div class="feature-cards-1">
              <div class="feature-cards-1-icon">
                <div class="feature-cards-1-icon-img">
                  <img src={cursor} class="feature-cards-1-img"></img>
                </div>
                <p class="feature-cards-1-icon-p">First click tests</p>
                <p class="feature-cards-1-icon-pp">While most people enjoy casino<br />gambling.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

export default Main;
