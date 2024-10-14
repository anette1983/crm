// 'use client';

// import React, { useState } from 'react';
// import dynamic from 'next/dynamic';
// import Button from '@/app/components/button';
// import CompanyFormModal from '@/app/components/company-form-modal';

// const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
//   ssr: false,
// });

// export default function AddCompanyButton() {
//   const [show, setShow] = useState(false);
//   return (
//     <>
//       <Button onClick={() => setShow(true)}>Add company</Button>
//       <CompanyFormModal
//         onSubmit={console.log}
//         show={show}
//         onClose={() => setShow(false)}
//       />
//     </>
//   );
// }

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/app/components/button';

export default function AddCompanyButton() {
  const router = useRouter();
  return (
    // <Button onClick={() => router.push('/companies/new')}>Add company</Button>
    <Button onClick={() => router.push('/companies/new', { scroll: false })}>
      Add company
    </Button>
  );
}
