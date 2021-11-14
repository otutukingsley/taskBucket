import React from 'react'
import { LandingPage } from './landingPageStyle'
import { Container } from '../../themes/globalStyles'

const Landingpage = () => {
  return (
    <LandingPage>
      <Container>
        <div className="showcase">
          <div className="content">
            <h1>
              The task tracking <br /> tool you'll enjoy using
            </h1>
            <p>
              Task Bucket is a MERN (MongoDB, Express, React, Nodejs) stack web
              application I created from scratch, to build and practice my web
              development skills. It is a website that helps you to safely manage
              and track your daily tasks.
            </p>
          </div>
          <div className="sign-up-for-free">
            <button className="btn btn-lg btn-sign-up">Sign up for free</button>
          </div>
        </div>
      </Container>
    </LandingPage>
  )
}

export default Landingpage
