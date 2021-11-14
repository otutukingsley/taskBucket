import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    scroll-behavior: smooth;
}
body{
    font-family: 'DM Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.navcolor};
    color: ${({ theme }) => theme.colors.black};
}
a{
    text-decoration: none;
}
ul{
    list-style: none;
}
img{
    width: 100%;
    height: 100%;
}
.btn{
    border: none;
    padding: 7px 20px;
    border-radius: .5rem;
    font-size: 1rem;
    font-weight: 500;
    outline: none;
    cursor: pointer;
}

.btn-log-in{
    background-color: transparent;
    color: ${({ theme }) => theme.colors.purple};
    padding: 0;
}

.btn-sign-up{
    background-color: ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.white}
}
.btn-lg{
    padding: 20px 40px;
    font-size: 1.2rem;
}
`

export const Container = styled.div`
  max-width: 1135px;
  margin: 0 auto;
  text-align: center;
  display: block;
  width: 100%;
  height: 100%;
  //   border: 2px solid red;
`
