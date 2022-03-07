import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import './LandingPage.css'
import RonaldoImg from '../../../../images/cris.png'

const LandingPage = () => {
  return (
    <div className="constrain">
      <div className="outer-container">
        <div className="content-section-container text-centered bp-100 hero-section">
          <img
            src="https://assets.codepen.io/6060109/workout-vector-1.png"
            alt="exercise"
          />

          <div className="hero-text">
            <h1>
              A decentralized <span className="header-bold"> fundraising </span>{' '}
              app
            </h1>
            <p>
              This project allows fans to support their favorite upcoming sports
              stars. Upon registration, a player is able to receive tokens,
              early supporters are able to buy and sell their tokens.
            </p>
            <p>
              Share that awesome idea-goal you have been sleeping on for a while
              so you can find awesome couches or funders to help you create it
              or discover great athletes from others that you would like to be
              part of as a funder.
            </p>

            <Button
              className="btn btn-primary"
              component={Link}
              to="/marketplace"
            >
              Discover
            </Button>
          </div>
        </div>

        <div className="left-to-right">
          <div className="content-section-container workout-img-2">
            <img
              src="https://assets.codepen.io/6060109/workout-vector-2.png"
              alt="exercise"
            />
          </div>
          <div className="blue-bg">
            <div className="content-section-container">
              <h2>
                Crowdfund your <span className="header-bold"> goal</span>
              </h2>
              <p>
                ‣ Share a plan and posts updates with proof of work to gain
                community trust.
              </p>
              <p>
                ‣ Offer potential funders incentives to invest in the future
                you.
              </p>
              <p>‣ Easily collect funds from backers using blockchain.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bp-100"></div>

      <div className="gradient-blue-bg">
        <div className="content-section-container text-centered tp-80 trainer-text">
          <h2 className="header-bold">Cristiano Ronaldo</h2>
          <h6>
            28 y.o. - Currently playing for Premier League club Manchester
            United
          </h6>
          <p className="player-description">
            My goal is to play as a professional player. I have always dreamt of
            becoming a sports star and this is a great time for me to accomplish
            my dream.
          </p>
          <p className="player-description">
            I strongly believe in my dream. Every career has its barriers to
            entry but I will pass those barriers and become what I want.
          </p>
          <Button
            className="btn btn-secondary"
            component={Link}
            to="/marketplace"
          >
            Get Started
          </Button>
        </div>

        <img src={RonaldoImg} alt="person" />
      </div>

      <div className="bp-100"></div>
    </div>
  )
}

export default LandingPage
