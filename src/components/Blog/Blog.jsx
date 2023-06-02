//import { useState } from 'react';
//import PropTypes from 'prop-types'
import './index.scss';

function Blog() {

  return (
    <>
      <div className='blog'>
        <div className='blog__description'>
          <div>
            <h2>Super Easy Booking</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel debitis provident animi odit eum quo, temporibus labore excepturi quasi totam fugit voluptatum necessitatibus sequi voluptatibus saepe facere accusamus vero quis!</p>
          </div>
          <div className='blog__attribute'>
            <img src="/explore.jpg" alt="explore" />
            <h4>Explore</h4>
          </div>
          <div className='blog__attribute'>
            <img src="/get_quotes.jpg" alt="get quotes" />
            <h4>Get Quotes</h4>
          </div>
          <div className='blog__attribute'>
            <img src="/customize.jpg" alt="customize" />
            <h4>Customize</h4>
          </div>
          <div className='blog__attribute'>
            <img src="/book_enjoy.jpg" alt="book enjoy" />
            <h4>Book & Enjoy</h4>
          </div>
        </div>
      </div>

      <div className='blog__published'>
        <div className='blog__published--article'>
          <img src="/mountain.jpg" alt="mountain" />
          <div className='blog__newsletter'>
            <h4>Posted By: Julia Holmes</h4>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta labore, similique, nobis iusto velit...</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            <button>READ MORE</button>
          </div>
        </div>

        <div className='blog__published--article blog__show'>
          <img src="/expedition.jpg" alt="mountain" />
          <div className='blog__newsletter'>
            <h4>Posted By: Julia Holmes</h4>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta labore, similique, nobis iusto velit...</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            <button>READ MORE</button>
          </div>
        </div>

        <div className='blog__subscribe'>
          <div className='blog__news'>
            <h3>Subscribe Our News</h3>
            <p>Subscribe and receive our newsletters to follow the news about our fresh and fantastic products</p>
          </div>
          <div className='blog__email'>
            <h4>Enter Your Email</h4>
            <button>Subscribe</button>
          </div>
        </div>
      </div>

    </>
  );
}


export default Blog;

