import React from "react"
import styled from "styled-components"

import Left from "./Left"
import Middle from "./Middle"
import Right from "./Right"

function Wrapper() {
  const Wrapper = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 11rem;
    height: 5rem;
    border-bottom: 1px solid rgba(210, 215, 211, 0.2);
    box-shadow: 0 2px 4px 0 rgba(210, 215, 211, 0.2);
    @media (min-width: 100px) and (max-width: 700px) {
      justify-content: space-between;
      gap: 0;
      padding-left: 1rem;
      padding-right: 1.25rem;
      border-bottom: 1px solid rgba(210, 215, 211, 0.3);
      box-shadow: 0 2px 4px 0 rgba(210, 215, 211, 0.3);
    }
    @media (min-width: 700px) and (max-width: 750px) {
      justify-content: space-between;
      gap: 0;
      padding-left: 0.2rem;
      padding-right: 0.2rem;
    }
    @media (min-width: 750px) and (max-width: 900px) {
      justify-content: space-between;
      gap: 0;
      padding-left: 1rem;
      padding-right: 1.25rem;
    }
    @media (min-width: 900px) and (max-width: 1000px) {
      gap: 2rem;
    }
    @media (min-width: 1000px) and (max-width: 1100px) {
      gap: 4rem;
    }
    @media (min-width: 1100px) and (max-width: 1200px) {
      gap: 6rem;
    }
    @media (min-width: 1200px) and (max-width: 1300px) {
      gap: 11rem;
    }
  `
  return (
    <Wrapper>
      <Left />
      <Middle />
      <Right />
    </Wrapper>
  )
}

export default Wrapper
