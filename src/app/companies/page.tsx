import React from 'react';
import Header from '../components/header';
import Toolbar from '../components/toolbar';
import AddCompanyButton from '../components/add-company-button';
import CompanyTable from '../components/company-table';
import CompanyRow from '../components/company-row';
import { Status } from '@/app/components/status-label';
import SearchInput from '../components/search-input';

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
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
