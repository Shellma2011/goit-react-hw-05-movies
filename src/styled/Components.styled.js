import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  font-size: 28px;
  margin-bottom: 20px;
  color: #191970;
`;

const CardInfoContainer = styled.div`
  padding: 0 10px;
`;

const MainMovieTitle = styled.h2`
  font-size: 26px;
  margin-top: 20px;
  margin-bottom: 10px;
  color: #191970;
`;

const SecondaryMovieTitle = styled.h3`
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 10px;
  color: #191970;
`;

const MovieList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
`;

const MovieItem = styled.li`
  width: 280px;
  height: 280px;
  /* padding: 10px; */
  background-color: #e0ffff; // бэкдроп под картинкой

  transform: scale(1);
  transition: transform 250ms linear;
  /* text-align: center; */
  border-radius: 10px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  :hover,
  :focus {
    transform: scale(1.05);
    /* cursor: zoom-in; */
  }
`;
const MovieText = styled.p`
  margin-bottom: 10px;
  color: #191970;
  font-size: 14px;
`;

const Img = styled.img`
  border-radius: 5px;
  margin-right: auto;
  margin-left: auto;
  width: 280px;
`;

const Form = styled.form`
  text-align: center;
  margin-top: 15px;
  margin-bottom: 20px;
`;

const FormInput = styled.input`
  display: inline-block;
  font: inherit;
  font-size: 20px;
  padding: 5px 20px;

  border: 2px solid #e0ffff;
  background-color: #4169e1;

  border-radius: 5px;
  margin-right: 20px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

const FormButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 2;
  }
`;

export {
  CardInfoContainer,
  Title,
  MainMovieTitle,
  SecondaryMovieTitle,
  MovieList,
  MovieItem,
  MovieText,
  Img,
  Form,
  FormInput,
  FormButtonLabel,
  Button,
};
