import { useForm } from 'react-hook-form'
import { useContext, useState } from 'react'
import { TechContext } from '../../providers/TechContext'

import { Input } from '../Input/Input'
import { Select } from '../Select/Select'

import 'react-toastify/dist/ReactToastify.css'
import { StyledEditTechForm, StyledButtonContainer} from './styles'

export const EditTechForm = ({ tech }) => {
  const [selectedStatus, setSelectedStatus] = useState(tech.status)
  const {register, handleSubmit} = useForm({
    mode: 'onBlur',
  })
  const { submitUpdatedTech, deleteTech } = useContext(TechContext)


  const handleSaveChanges = (data) => {
    submitUpdatedTech(data, tech);
  }

  return(
    <StyledEditTechForm onSubmit={handleSubmit(submitUpdatedTech)}>
      <Input label="Nome" type="text" placeholder={`${tech.title}`} disabled={true} className="notAble"/>

      <Select label="Selecionar Status" defaultValue={tech.status} {...register("status")} onChange={(e) => setSelectedStatus(e.target.value)}>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </Select>
      
      <StyledButtonContainer>
        <button type="button"  
        className={`saveButton ${selectedStatus !== tech.status ? 'enabled' : ''}`}
        onClick={handleSubmit(handleSaveChanges)}
        >Salvar alterações
        </button>
        
        <button type="button" className="excludeButton" onClick={() => deleteTech(tech)}>Excluir</button>
      </StyledButtonContainer>

    </StyledEditTechForm>
  )
}
