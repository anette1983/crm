// import ActiveLabel from './components/active-label';
// import NotActiveLabel from './components/not-active-label';
// import { headers } from 'next/headers';
// import StatusLabel, { Status } from './components/status-label';
// import AddCompanyButton from './components/add-company-button';

import Link from 'next/link';

export default function Home() {
  // console.log(headers()); //динамічна функція, що дозволяє читати заголовки з вхідного хттп запиту. Також cockies(), useSearchParams(), searchParams
  // через цю функцію вся сторінка переключена на динамічний рендеринг
  // Функція повертає об'єкт заголовків (Headers), що дозволяє отримати конкретні значення заголовків за їх іменами.

  // Практичне використання:
  // Аутентифікація: отримання та обробка заголовків, таких як Authorization для перевірки токенів.
  // Фільтрація або кешування: на основі значень заголовків, таких як If-None-Match для перевірки змін контенту.
  // Cookie: доступ до куків, якщо вони передаються через заголовки.

  return (
    <main className="py-2.5 px-2.5">
      <h1 className="text-xl my-2.5">Home page {new Date().toTimeString()}</h1>
      <Link
        href="/dashboard"
        className="text-base py-2.5 px-5 bg-gray-900 text-zinc-50 text-center font-medium rounded hover:bg-gray-800 active:bg-gray-950"
      >
        Go to dashboard
      </Link>
      {/*after  every  update we recieve new time in dev! mode*/}
      {/* після білду і перезапуску командою нпм старт вже дата не змінюється, бо сторінка згенерована і нам повертається закешована версія */}
      {/* Коли необхідно відображати дані в реальному часі, використов динамічний рендеринг, або  коли необхідна дод інфа яка може бути відома тільки в момент запиту - кукі або параметри пошуку і урл */}
      {/* Некст джс автоматично переключиться на динамічний рендеринг, якщо виявлено динамічну фкцію або запит даних без кешування
       */}
      {/* <ActiveLabel>Active</ActiveLabel>
      <NotActiveLabel>Not active</NotActiveLabel> */}
      {/* <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel> */}
      {/* <AddCompanyButton /> */}
      {/* <MagicButton /> */}
    </main>
  );
}
