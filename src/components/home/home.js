import React from 'react';

import { Row, Col, Card } from 'react-materialize';

import UserProfile from '../user_profile/user_profile';

import Experience from '../experience/experience';

import company_avatar from '../../images/company.png';

import company_avatar2 from '../../images/company2.png';

const Home = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
      <h5 className="subtitle">About Me</h5>
      <Card>
        <div>
          <p><b>Lorem</b></p>
          <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
          <br/>
          <p><b>Ipsum</b></p>
          <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
        </div>
      </Card>
      <h5 className="subtitle">Experiences</h5>
      <Experience title="JS Developer"
                  company="CEFET-RJ"
                  description="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
                  avatar={company_avatar}
      />
      <Experience title="React Developer"
                  company="CEFET-RJ"
                  description="Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum"
                  avatar={company_avatar2}
      />
    </Col>
  </Row>
);

export default Home;
