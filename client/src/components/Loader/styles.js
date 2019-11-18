import styled from 'styled-components';

export const StyledLoader = styled.span`
    display: inline-block;
    width: 75px;
    height: 75px;
    position: relative;
    border: 8px solid #3A49E0;
    top: -20%;
    animation: loader 2s infinite ease;

    .loader {
        vertical-align: top;
        display: inline-block;
        width: 100%;
        background-color: #949eff;
        animation: loader-inner 2s infinite ease-in;
    }

    @keyframes loader {
        0% {
            transform: rotate(0deg);
        }
        
        25% {
            transform: rotate(180deg);
        }
        
        50% {
            transform: rotate(180deg);
        }
        
        75% {
            transform: rotate(360deg);
        }
        
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes loader-inner {
        0% {
            height: 0%;
        }
        
        25% {
            height: 0%;
        }
        
        50% {
            height: 100%;
        }
        
        75% {
            height: 100%;
        }
        
        100% {
            height: 0%;
        }
    }
`;