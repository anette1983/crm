import React from 'react';

import { Status } from '@/app/components/status-label';
// import Header from '@/app/components/header';
// import Toolbar from '@/app/components/toolbar';
// import SearchInput from '@/app/components/search-input';
import CompanyTable from '@/app/components/company-table';
import CompanyRow from '@/app/components/company-row';
// import AddCompanyButton from '@/app/components/add-company-button';

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      {/* <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar> */}
      {/* використовуємо готоу кнопку, яка викликає форму для створення компанії */}
      <CompanyTable>
        <CompanyRow
          id={1}
          category="Products"
          company="Costco"
          status={Status.Pending}
          promotion={true}
          country="USA"
          joinedDate="02.19.2023"
        />
      </CompanyTable>
    </>
  );
};

export default Page;
