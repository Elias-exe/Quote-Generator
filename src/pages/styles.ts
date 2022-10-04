import styled from "styled-components";

export const Container = styled.div`

.randomButtonContainer{
    display: flex;
    justify-content: flex-end;
    margin-right: 100px;
    margin-top: 31px;

    button{
       background:transparent;
       border: none;
       font-family: 'Raleway', sans-serif;
       font-size: 18px;
       display: flex;
       align-items: center;
       gap: 11px;
       cursor: pointer;
    }
}

.quoteContainer{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    p{
        width: 100%;
        max-width: 500px;
        font-family: 'Raleway', sans-serif;
        font-size: 36px;
        font-weight: bold;
    }

.quoteAuthor{
        font-size: 24px;
        background: transparent;
        border: none;
    }

    button{
        display: flex;
        width: 100%;
        height: 100px;
        justify-content: space-between;
        align-items: center;
        padding: 0 29px;
        cursor: pointer;

        .quoteInfos{
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        justify-content: start;
        }

        :hover{
            background: #333333;
            height: 100px;

            .quoteAuthor{
                color: #F2F2F2;
            }
        }
    
    .quoteGenre{
        font-size: 14px;
        color: #828282;
        
    }
    }
   }
`;
