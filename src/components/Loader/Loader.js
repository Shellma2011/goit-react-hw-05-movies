import styled from 'styled-components';
import { TailSpin } from 'react-loader-spinner';

const LoaderContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;
export { LoaderContainer };

export const Loader = () => {
  return (
    <LoaderContainer>
      <TailSpin height={80} width={80} color="#696969" arialLabel="loading" />
    </LoaderContainer>
  );
};
