import styled from 'styled-components';
import { NavLink as LinkRouter } from 'react-router-dom';
import { fadeIn } from '../../styles/animation';

export const Nav = styled.nav`
  align-items: center;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  display: flex;
  position: fixed;
  height: 50px;
  justify-content: space-around;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 500px;
  width: 100%;
  z-index: 100;
`;

export const NavLink = styled(LinkRouter)`
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;

  &[aria-current] {
    color: #000;

    &:after {
      ${fadeIn({ time: '0.5s' })};
      content: '.';
      position: absolute;
      bottom: 0;
      font-size: 34px;
      line-height: 34px;
    }
  }
`;
