import styled from 'styled-components'

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: ${({ theme }) => theme.colors.navcolor};
  padding: 1rem;
  height: 100px;

  .nav-brand-link {
    color: ${({ theme }) => theme.colors.black};
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
`

export const Navwrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1135px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`
