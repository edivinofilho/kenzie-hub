import { useState, useContext } from 'react'
import { StyledTechList } from './style'
import { TechItem } from '../TechItem/index'
import { UserContext } from '../../providers/UserContext'
import { EditTechForm } from '../EditTechForm'
import { Modal } from '../Modal/index'
import { TechContext } from '../../providers/TechContext'

export const TechList = () => {
  const { userData, setUserData } = useContext(UserContext)
  const [ editTech, setEditTech ] = useState({})
  const [updatedTech, setUpdatedTech] = useState(null)
  const { editModalIsOpen, setEditModalIsOpen } = useContext(TechContext)
  
  const handleClick = (tech) => {
    setEditModalIsOpen(true)
    setEditTech(tech)  
  }

  return (
    <StyledTechList>
      {userData.user.techs.map(tech => {
        const isUpdated = updatedTech && updatedTech.id === tech.id

        return (
          <TechItem key={tech.title} onClick={() => handleClick(tech)}>
            <p>{tech.title}</p>
            <span>{isUpdated ? updatedTech.status : tech.status}</span>
          </TechItem>
        )
      })}

      {editModalIsOpen && (
      <Modal title={"Tecnologia Detalhes"} setModalState={()=> setEditModalIsOpen()} >
        <EditTechForm tech={editTech} setUpdatedTech={setUpdatedTech} setUserData={setUserData}/>
      </Modal>
    )}
    </StyledTechList>
  )
}