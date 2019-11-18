import styled from 'styled-components';

export const StyledSearch = styled.form`
    position: relative;
    width: 100%;
    max-width: 260px;
    margin: 44px auto;
    input[type="text"] {
        border-radius: 6px;
        border: none;
        outline: none;
        width: 100%;
        font-size: 1.75rem;
        padding: 18px;
        height: 50px;
        background: #f2f2f2;
        &::placeholder {
            color: #aaa;
        }
    }
    button {
        background: #3A49E0;
        color: #fff;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        margin: 6px;
        font-size: 1.5rem;
        border-radius: 5px;
        padding: 12px 20px;
        border: none;
        outline: none;
        &:before {
            content: "";
            position: absolute;
            margin: auto;
            top: 10px;
            right: 0;
            bottom: 0;
            left: 10px;
            width: 8px;
            height: 2px;
            background: white;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
        }
        &:after {
            content: "";
            position: absolute;
            margin: auto;
            top: -5px;
            right: 0;
            bottom: 0;
            left: -5px;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            border: 2px solid white;
        }
    }
    @media(min-width:768px) {
        min-width: 600px;
    }
`;