// import ActiveLabel from './components/active-label';
// import NotActiveLabel from './components/not-active-label';
import { headers } from 'next/headers';
// import StatusLabel, { Status } from './components/status-label';
// import AddCompanyButton from './components/add-company-button';
import MagicButton from './components/magic-button';

export default function Home() {
  console.log(headers()); //динамічна функція, що дозволяє читати заголовки з вхідного хттп запиту. Також cockies(), useSearchParams(), searchParams
  // через цю функцію вся сторінка переключена на динамічний рендеринг

  return (
    <main>
      <h1 className="text-xl">Home page {new Date().toTimeString()}</h1>
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
      <MagicButton />
    </main>
  );
}
