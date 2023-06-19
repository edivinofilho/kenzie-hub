// import { useState } from 'react'
import { StyledTechList } from './style'
import { TechItem } from '../TechItem/index'

export const TechList = () => {
  // const [ techList, setTechList ] = useState([])

  return (
    <StyledTechList>
      <TechItem />
    </StyledTechList>
  )
}