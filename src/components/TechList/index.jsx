import { useState, useContext } from 'react'
import { StyledTechList } from './style'
import { TechItem } from '../TechItem/index'
import { useEffect } from 'react'
import { UserContext } from '../../providers/UserContext'

export const TechList = () => {
  const { userData } = useContext(UserContext)
  const [ editTech, setEditTech ] = useState({})
  
  const handleClick = (tech) => {
    setEditTech({
      title: `${tech.title}`,
      status: `${tech.status}`
    })
  }
  console.log(editTech)

  return (
    <StyledTechList>
      {userData.user.techs.map(tech => {
        return (
          <TechItem key={tech.title} onClick={() => handleClick(tech)}>
            <p>{tech.title}</p>
            <span>{tech.status}</span>
          </TechItem>
        )
      })}
    </StyledTechList>
  )
}