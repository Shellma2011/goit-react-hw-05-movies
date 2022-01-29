import styled from 'styled-components';

const MovieTitle = styled.h2`
  font-size: 26px;
  margin-top: 20px;
  margin-bottom: 10px;
  color: black;
`;

const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const MovieItem = styled.li`
  background-color: #e7ecf2;

  height: 300px;
  margin-bottom: 15px;
  width: 350px;
  transform: scale(1);
  transition: transform 250ms linear;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  :hover,
  :focus {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
const MovieText = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Img = styled.img`
  border-radius: 4px;
  margin-right: auto;
  margin-left: auto;
  width: 300px;
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
  MovieTitle,
  MovieList,
  MovieItem,
  MovieText,
  Img,
  Form,
  FormInput,
  FormButtonLabel,
  Button,
};
