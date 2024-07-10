import React from 'react'
import PropTypes from 'prop-types'
import work1 from '../work1.jpeg'
import work2 from '../work2.jpeg'

const Portfolio = props => {
  return (
    <div id='portfolio'>
      <div className="container">
        <h1 className="sub-title">My Work</h1>

        <div className="work-list">

            <div className="work">
                <img src={work1} alt="work 1" />

                <div className="layer">
                    <h3>Textutil</h3>
                    <p>This page help user to perform different operation such as convert the entered text to uppercase, lowercase, copy. User can get to know how many words are there present in the entered text.</p>
                    <a href="https://nikitanagare01.github.io/TEXTUtils-React/"><i class="fa-solid fa-link"></i></a>
                </div>
            </div>

            <div className="work">
                <img src={work2} alt="work 1" />

                <div className="layer">
                    <h3>NewsMonkey</h3>
                    <p>News App which shows all types of updated News. Helpful for user to see the new the news according to his convinience such as bussiness, technology, sport, entertainement</p>
                    <a href="https://github.com/NikitaNagare01/NewsMonkey"><i class="fa-solid fa-link"></i></a>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

Portfolio.propTypes = {

}

export default Portfolio
