import React from 'react'
import {FooterContainer,GridBox} from './StyledFooter'

function Footer() {
  return (
    <>
      <FooterContainer>
        <GridBox>

        <p>🍎 All rights by<br/> sookyoung.lee</p>
        <a 
        title = '인스타그램'
        target = 'blank'
        href ='https://www.instagram.com/2so0ok2/'>
        <i className="fab fa-instagram"></i>
        </a>
        <a 
        title = '깃허브'
        target = 'blank'
        href ='https://github.com/22sook00/chooseMyMeal'>
        <i className="fab fa-github-square"></i>
        </a>
        <a 
        title = '벨로그'
        target = 'blank'
        href ='https://velog.io/@22soook00'>
        <i className="fab fa-vimeo-square"></i>
        </a>
        </GridBox>
      </FooterContainer>
    </>
  )
}

export default Footer
