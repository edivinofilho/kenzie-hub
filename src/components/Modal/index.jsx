import { useEffect, useState } from 'react'
import Modal from 'react-modal'
Modal.setAppElement(document.body)

export const ModalAddTech = ( {openModal} ) => {
  const [isOpen, setIsOpen] = useState(false)


  const closeModal = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    setIsOpen(openModal)
  }, [openModal])

  return (
    <div>
            
      <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel='Exemplo Modal'
      overlayClassName='modal-overlay'
      className='modal-content'>

        <h2>Modal</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quia dicta optio itaque tempore ratione in, velit repellendus architecto, alias ea libero ut eligendi eum? Ut itaque minima dolores nostrum?</p>
        <button onClick={closeModal}>X</button>
      
      </Modal>

    </div>
  )
}