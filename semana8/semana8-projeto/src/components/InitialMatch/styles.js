import styled, { keyframes } from 'styled-components';

export const ContainerProfileSingle = styled.div `
  margin: 10px 0;
  width: 358px;
  height: 430px;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.5s;
  box-shadow: rgba(117, 117, 117, 0.77) 0px 2px 10px 0px;
`;

export const ContainerImg = styled.div `
  background-image: url(${props=>props.photo});
  height: 100%;
  width: 100%;
  filter: blur(30px);
  position: absolute;
  background-size:cover;
`;

export const ImagemProfileSingle = styled.img `
  width: 100%;
  display: block;
  z-index: 1;
`;

export const TextProfileSingle = styled.div `
  height: 30%;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  z-index: 2;
  padding: 15px;
  color: #fff;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
`;

export const NameAndAge = styled.div `
  display: flex;
  align-items: flex-end;
`;

export const Name = styled.h2 `
  margin-bottom: 0;
`;

export const Age = styled.p `
  font-size: 20px;
  margin-left: 5px;
  margin-bottom: 0;
`;

export const BioText = styled.p `
  margin-right: 20px;
`;