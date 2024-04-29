import React from 'react';
import clsx from 'clsx';

export enum Status {
  Active = 'active',
  NotActive = 'notActive',
  Pending = 'pending',
  Suspended = 'suspended',
}

export interface StatusLabelProps {
  children: React.ReactNode;
  status: Status;
  disabled?: boolean;
}

function StatusLabel({ children, status, disabled }: StatusLabelProps) {
  console.log(process.env.CRM_SECRET_KEY);
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
        status === Status.Active && 'text-green-700 bg-green-100',
        status === Status.NotActive && 'text-red-700 bg-red-100',
        status === Status.Pending && 'text-orange-700 bg-orange-100',
        status === Status.Suspended && 'text-blue-700 bg-blue-100',
        '',
        {
          ['opacity-75 cursor-not-allowed']: disabled,
        },
      )}
    >
      {/* bullet */}
      <div className="w-1 h-1 mr-2 rounded-full bg-current" />
      {children}
    </div>
  );
}

export default StatusLabel;

/*clsx принимает любое количество аргументов, которые могут быть строками, объектами или массивами, и возвращает одну строку с классами, игнорируя все ложные значения (такие как false, null, undefined и пустые строки).

В этом примере:

Основные стили ('inline-flex items-center py-1 px-3.5 rounded-3xl text-sm font-medium') всегда применяются.
Статусы: Дополнительные классы добавляются на основе значения status. Если ни одно из условий не выполнено (например, статус не соответствует ни одному из перечисленных), то в результате получится false и clsx просто игнорирует этот аргумент.
Пустая строка в вашем списке аргументов ('') игнорируется.
Условие disabled: Классы opacity-75 cursor-not-allowed добавляются, если disabled истинно. */
