import styled from 'styled-components';

export const PhotoContainer = styled.div`
  height: 15vh;
  flex-grow: 1;
  min-width: 16vh;
  cursor: pointer;
  margin: 15px;
  &:hover {
    transform: scale(1.1);
    transition: all 1s ease;
  }
`;

export const Image = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;
