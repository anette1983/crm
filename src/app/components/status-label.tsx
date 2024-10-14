import React from 'react';
import clsx from 'clsx';

// export enum Status {
//   Active = 'active',
//   NotActive = 'notActive',
//   Pending = 'pending',
//   Suspended = 'suspended',
// }

import { CompanyStatus } from '@/lib/api';

export interface StatusLabelProps {
  // children: React.ReactNode;
  // status: Status;
  status: CompanyStatus;
  disabled?: boolean;
  styled?: boolean;
}

// function StatusLabel({ children, status, disabled }: StatusLabelProps) {
// console.log('env in status label', process.env.CRM_SECRET_KEY);
// Всі компоненти за замовчуванням серверні
// Під час рендерингу тобто можемо отримати доступ до ресурсів серверу
// Проте з клієнта – бразуера – ці ресурси не будуть доступні
// змінна доступна лише в консолі, не в консолі браузера
// створили: export CRM_SECRET_KEY=123
// потім перезапустили проект

const labelByStatus = {
  [CompanyStatus.Active]: 'Active',
  [CompanyStatus.NotActive]: 'Not Active',
  [CompanyStatus.Pending]: 'Pending',
  [CompanyStatus.Suspended]: 'Suspended',
};

// export default function StatusLabel({ status, disabled }: StatusLabelProps) {
export default function StatusLabel({
  status,
  disabled,
  styled = true,
}: StatusLabelProps) {
  const label = labelByStatus[status];

  if (!styled) return <>{label}</>;

  return (
    <div
      // className={clsx(
      //   'inline-flex items-center py-1 px-3.5 rounded-3xl text-sm font-medium',
      //   { 'opacity-75 cursor-not-allowed': disabled },
      //   (status === Status.Active && 'text-green-700 bg-green-100') ||
      //     (status === Status.NotActive && 'text-red-700 bg-red-100') ||
      //     (status === Status.Pending && 'text-orange-700 bg-orange-100') ||
      //     (status === Status.Suspended && 'text-blue-700 bg-blue-100') ||
      //     '',
      // )}
      className={clsx(
        'inline-flex items-center py-1 px-3.5 rounded-3xl text-sm font-medium',
        // status === Status.Active && 'text-green-700 bg-green-100',
        // status === Status.NotActive && 'text-red-700 bg-red-100',
        // status === Status.Pending && 'text-orange-700 bg-orange-100',
        // status === Status.Suspended && 'text-blue-700 bg-blue-100',
        status === CompanyStatus.Active && 'text-green-700 bg-green-100',
        status === CompanyStatus.NotActive && 'text-red-700 bg-red-100',
        status === CompanyStatus.Pending && 'text-orange-700 bg-orange-100',
        status === CompanyStatus.Suspended && 'text-blue-700 bg-blue-100',
        '',
        {
          ['opacity-75 cursor-not-allowed']: disabled,
        },
      )}
    >
      {/* bullet */}
      <div className="w-1 h-1 mr-2 rounded-full bg-current" />
      {/* {children} */}
      {/* {labelByStatus[status]} */}
      {label}
    </div>
  );
}

/*clsx принимает любое количество аргументов, которые могут быть строками, объектами или массивами, и возвращает одну строку с классами, игнорируя все ложные значения (такие как false, null, undefined и пустые строки).

В этом примере:

Основные стили ('inline-flex items-center py-1 px-3.5 rounded-3xl text-sm font-medium') всегда применяются.
Статусы: Дополнительные классы добавляются на основе значения status. Если ни одно из условий не выполнено (например, статус не соответствует ни одному из перечисленных), то в результате получится false и clsx просто игнорирует этот аргумент.
Пустая строка в вашем списке аргументов ('') игнорируется.
Условие disabled: Классы opacity-75 cursor-not-allowed добавляются, если disabled истинно. */
