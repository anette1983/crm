'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import CompanyFormModal from '@/app/components/company-form-modal';

export interface PageProps {}

export default function Page({}: PageProps) {
  const router = useRouter();
  // return (
  //   <Modal show={true} onClose={() => router.back()}>
  //     <CompanyForm onSubmit={console.log} />
  //   </Modal>
  // );
  return <CompanyFormModal show={true} onClose={() => router.back()} />;
}
