import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import { images, variables } from "../../../constants"

function HeroLeft() {
  const HeroLeft = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: 12.5%;
    width: 50%;
    @media (min-width: 100px) and (max-width: 900px) {
      justify-content: center;
      width: 100%;
      margin-left: 0;
    }
    @media (min-width: 900px) and (max-width: 1200px) {
      width: 50%;
      margin-left: 8%;
      margin-right: 4%;
    }
  `
  const HeroLeftContainer = styled.div`
    display: grid;
    justify-items: start;
    align-items: center;
    gap: 3rem;
    margin-top: 10rem;
    margin-bottom: 6rem;
    margin-left: 4.125rem;
    margin-right: 4rem;
    width: 657px;
    @media (min-width: 100px) and (max-width: 600px) {
      gap: 1rem;
      margin: 2rem 0 2rem 0;
      width: 100%;
    }
    @media (min-width: 600px) and (max-width: 900px) {
      gap: 2rem;
      margin: 2rem 0 2rem 0;
      width: 100%;
    }
    @media (min-width: 900px) and (max-width: 1200px) {
      gap: 2rem;
      margin: 2rem 0 2rem 0;
      width: 100%;
    }
  `
  const HeroContainerTitle = styled.span`
    font-weight: 700;
    font-size: 4.25rem;
    color: ${variables.primaryFont};
    @media (min-width: 100px) and (max-width: 600px) {
      width: 340px;
      font-size: 2rem;
      text-align: center;
    }
    @media (min-width: 600px) and (max-width: 900px) {
      width: 540px;
      font-size: 3.25rem;
      text-align: center;
    }
    @media (min-width: 900px) and (max-width: 1200px) {
      width: 540px;
      font-size: 3.5rem;
    }
  `
  const HeroContainerTitleSpan = styled.span`
    color: ${variables.tertiaryFont};
  `
  const HeroContainerButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    @media (min-width: 100px) and (max-width: 600px) {
      flex-direction: column;
      gap: 0.5rem;
    }
  `
  const HeroContainerSearch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fdd000;
    border-radius: 0.6rem;
    cursor: pointer;
    &:hover {
      background-color: #fdd000;
      transition: all 0.3s ease-in-out;
      .nav_right-title {
        color: ${variables.sevenFont};
        transition: all 0.3s ease-in-out;
      }
    }
  `
  const HeroSearchIcon = styled.img`
    padding: 1.1rem 0.4rem 1.1rem 1.1rem;
    @media (min-width: 600px) and (max-width: 900px) {
      padding: 1.1rem 0.4rem 1.1rem 1.1rem;
    }
    @media (min-width: 900px) and (max-width: 1200px) {
      padding: 1.1rem 0.4rem 1.1rem 1.1rem;
    }
  `
  const HeroSearchTitle = styled.span`
    padding: 0.4rem 0.8rem 0.4rem 0.4rem;
    font-weight: 500;
    font-size: 16px;
    color: ${variables.primaryFunction};
    @media (min-width: 100px) and (max-width: 600px) {
      font-size: 16px;
    }
    @media (min-width: 600px) and (max-width: 900px) {
      padding: 0.4rem 0.8rem 0.4rem 0.4rem;
      font-size: 18px;
    }
    @media (min-width: 900px) and (max-width: 1200px) {
      padding: 0.4rem 0.8rem 0.4rem 0.4rem;
      font-size: 18px;
    }
  `
  const HeroContainerWatch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    border: 1px solid black;
    border-radius: 0.75rem;
    cursor: pointer;
    &:hover {
      border: 1px solid ${variables.secondaryFunctionHover};
      transition: all 0.3s ease-in-out;
      .nav_right-title {
        color: ${variables.sevenFont};
        transition: all 0.3s ease-in-out;
      }
    }
  `
  const HeroWatchIcon = styled.img`
    padding: 0 0 0 3.46rem;
    @media (min-width: 600px) and (max-width: 900px) {
      padding: 1.5rem 0 1.5rem 3rem;
    }
    @media (min-width: 900px) and (max-width: 1200px) {
      padding: 1.5rem 0 1.5rem 2.5rem;
    }
  `
  const HeroWatchTitle = styled.span`
    padding: 1.5rem 3.46rem 1.5rem 0;
    font-weight: 400;
    font-size: 21px;
    color: ${variables.primaryFunction};
    @media (min-width: 100px) and (max-width: 600px) {
      padding: 1.3rem 4.7rem 1.3rem 0;
      font-size: 16px;
    }
    @media (min-width: 600px) and (max-width: 900px) {
      padding: 1.3rem 3rem 1.3rem 0;
      font-size: 18px;
    }
    @media (min-width: 900px) and (max-width: 1200px) {
      padding: 1.3rem 2.5rem 1.3rem 0;
      font-size: 18px;
    }
  `
  return (
    <HeroLeft>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5, ease: "easeInOut" }}>
        <HeroLeftContainer>
          <HeroContainerTitle>
            Upholstered
            <HeroContainerTitleSpan> furniture </HeroContainerTitleSpan>for your comfort
          </HeroContainerTitle>
          <HeroContainerButton>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: "tween" }}>
              <HeroContainerSearch>
                <HeroSearchIcon src={images.herosearch} />
                <HeroSearchTitle>Discover now</HeroSearchTitle>
              </HeroContainerSearch>
            </motion.div>
          </HeroContainerButton>
        </HeroLeftContainer>
      </motion.div>
    </HeroLeft>
  )
}

export default HeroLeft
