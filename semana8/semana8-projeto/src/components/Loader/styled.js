import styled from 'styled-components';

export const Loader1 = styled.div `
	animation:pulse 1s infinite;
`;

export const Loader2 = styled.div `
    position: relative; 
    width: 100px; 
    height: 90px;
        :before{
            position: absolute; 
            content: ""; 
            left: 50px; 
            top: 0; 
            width: 50px; 
            height: 80px; 
            background: #4a006b; 
            border-radius: 50px 50px 0 0; 
            transform: rotate(-45deg);  
            transform-origin: 0 100%;
            animation:pulsecolor 1s infinite;
        }
        :after {
            position: absolute; 
            content: ""; 
            left: 50px; 
            top: 0; 
            width: 50px; 
            height: 80px; 
            background: #4a006b; 
            border-radius: 50px 50px 0 0; 
            transform: rotate(-45deg);  
            transform-origin: 0 100%;
            animation:pulsecolor 1s infinite;
            left: 0; 
            transform: rotate(45deg); 
            transform-origin :100% 100%;
            animation:pulsecolor 1s infinite;
        }
        @keyframes pulse {
	        10% {transform: scale(1.1)}
        }
        @keyframes pulsecolor {
        10% {background: #8215b5}
}
`;

export const ContainerLoader = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TextLoader = styled.p `
    font-weight: bold;
    color: #4a006b;
`;