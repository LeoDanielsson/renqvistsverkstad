import Layout from '../components/layout';
import styled from 'styled-components';
import { white, gold, black, copper } from '../colors';
import { events } from './program';
import Container from '../components/container';
import Event from '../components/event';
import Link from 'next/link';
import { large } from '../breakpoints';

const Hero = styled.div`
  height: 80vh;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  background-color: black;
  background-image: url('/images/gryta.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (min-width: ${large}) {
    background-image: linear-gradient(
        to left,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.1) 30%,
        rgba(0, 0, 0, 0.1) 70%,
        rgba(0, 0, 0, 1) 100%
      ),
      url('/images/gryta.jpg');
    background-size: 60%;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${white};
  font-size: 20px;
  padding: 0 8px;
  h1 {
    margin-top: 1.666rem;
    font-size: 2.5em;
    color: ${white};
  }
  justify-content: center;
`;

const CtaLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: ${white};
  cursor: pointer;
  text-align: right;
  padding: 8px 16px;
  line-height: 1;
  border: 1px solid ${white};
  border-radius: 2px;
  &:hover {
    background: ${white};
    color: ${black};
  }
`;

const Home = () => (
  <Layout title='Hem'>
    <Hero>
      <HeroContent>
        <p>Föreningen Renqvists verkstad presenterar</p>
        <h1>Skulptörens verkstad</h1>
        <p>Ett museum för skulptörens alla hantverk</p>
        <Link href='/program'>
          <CtaLink>
            Till årets kursprogram{' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentcolor'
              width='1em'
              height='1em'
            >
              <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' />
              <path d='M0 0h24v24H0z' fill='none' />
            </svg>
          </CtaLink>
        </Link>
      </HeroContent>
    </Hero>
  </Layout>
);

export default Home;
