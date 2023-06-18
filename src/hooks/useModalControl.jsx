import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Modal } from '../components/common/Modal';

export default function useModalControl() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modalOpen]);

  const ModalComponent = () => {
    return (
    <ModalComponent>
      <button>모달 열기</button>
    </ModalComponent>
    );
  };

  const ModalStyle = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    transition: transform .3s;
    transform: ${({ modalOpen }) => (modalOpen ? 'translateY(0)' : 'translateY(100%)')}; 
  `;

  return { modalOpen, openModal, closeModal, ModalComponent };
}