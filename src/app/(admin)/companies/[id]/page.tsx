import Header from '@/app/components/header';
import React from 'react';

export interface PageProps {
  params: { id: string };
}

// Ця функція повертає список параметрів для динамічних сторінок. Наприклад, для кожної компанії з id 1, 2 і 3 створюються динамічні маршрути.
export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

const Page = ({ params }: PageProps) => {
  return (
    <>
      <Header>Companies ({params.id})</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
};

export default Page;

// Цей код створює сторінку для кожної компанії з динамічним id. Next.js дозволяє створювати маршрути для таких сторінок динамічно на основі параметрів, які генеруються функцією generateStaticParams. Компонент Page використовує ці параметри для відображення відповідної компанії на сторінці, а також показує поточний час.
// у контексті Next.js функція generateStaticParams (у попередніх версіях Next.js називалася getStaticPaths) використовується для динамічної генерації сторінок під час процесу статичної генерації (Static Site Generation, SSG). Її не потрібно явно викликати, оскільки вона автоматично викликається фреймворком під час побудови проєкту.
// Next.js автоматично використовує функцію generateStaticParams під час компіляції, щоб створити статичні сторінки для кожного параметра, який вона повертає.
// У цьому випадку функція повертає масив із трьома об'єктами { id: '1' }, { id: '2' }, { id: '3' }, що означає, що буде створено три сторінки за маршрутами /companies/1, /companies/2, і /companies/3.
