'use client';

import React from 'react';
// import CompanyForm, { CompanyFormProps } from '@/app/components/company-form';
import CompanyForm from '@/app/components/company-form';
import Modal, { ModalProps } from '@/app/components/modal';

// export interface CompanyFormModalProps extends ModalProps {
//   onSubmit: CompanyFormProps['onSubmit'];
// }

// export default function CompanyFormModal({
//   onSubmit,
//   ...rest
// }: CompanyFormModalProps) {
export default function CompanyFormModal({ onClose, ...rest }: ModalProps) {
  return (
    // <Modal {...rest}>
    //   <CompanyForm onSubmit={onSubmit} />
    <Modal {...rest} onClose={onClose}>
      <CompanyForm onSubmit={() => onClose()} />
    </Modal>
  );
}
