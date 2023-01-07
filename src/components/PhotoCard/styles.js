import styled, { css } from 'styled-components';

import { fadeIn } from '../../styles/animation';
import { skeletonStyle } from '../../styles/skeleton';

export const Article = styled.article`
  min-height: 200px;
`;

export const ImgWrapper = styled.div`
  ${fadeIn()};
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`;

export const Img = styled.img`
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const ImgSkeleton = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  ${(props) => css`
    ${skeletonStyle(props.light)}
  `}
`;

export const ButtonSkeleton = styled.div`
  display: flex;
  align-items: center;
  padding-top: 8px;
  ${(props) => css`
    ${skeletonStyle(props.light)}
  `}
`;
