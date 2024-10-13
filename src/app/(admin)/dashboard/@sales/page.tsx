import React from 'react';
import { getSummarySales } from '@/lib/api';
import SummaryTable from '@/app/components/summary-table';
import SummaryTableHeader from '@/app/components/summary-table-header';
import SummaryTableCell from '@/app/components/summary-table-cell';
import DashboardCard from '@/app/components/dashboard-card';
import MagicButton from '@/app/components/magic-button';

export interface PageProps {}
export default async function Page({}: PageProps) {
  // const data = await getSummarySales();

  const data = await new Promise<
    { companyId: number; companyTitle: string; sold: number; income: number }[]
  >((res) => {
    setTimeout(async () => {
      const result = await getSummarySales();
      res(result);
    }, 4300);
  });

  return (
    <DashboardCard
      label={
        <>
          Sales Details
          <MagicButton />
        </>
      }
    >
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align="center">Sold</SummaryTableHeader>
            <SummaryTableHeader align="center">Income</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ companyId, companyTitle, sold, income }) => (
          <tr key={companyId}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell align="center">{sold}</SummaryTableCell>
            <SummaryTableCell align="center">{`$${income}`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
