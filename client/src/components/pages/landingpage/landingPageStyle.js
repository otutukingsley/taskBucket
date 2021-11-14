import styled from 'styled-components'

export const LandingPage = styled.header`
  width: 100%;
  height: calc(100vh - 100px);
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  background-image: url('/images/taskbucketbg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  padding: 1rem;
  text-align: center;

  .showcase {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .content {
    width: 100%;
    h1 {
      font-size: 4.4rem;
      font-weight: 900;
      margin: 1.5rem 0;
      line-height: 1.2;
    }
    p {
      max-width: 700px;
      margin: 1.5rem auto;
      text-align: center;
      line-height: 1.2;
      color: ${({ theme }) => theme.colors.lead};
    }
  }

  .sign-up-for-free {
    margin: 20px 0;
    width: 100%;
  }
`
