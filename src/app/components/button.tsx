'use client';
import React from 'react';
import clsx from 'clsx';

export interface ButtonProps
  extends Partial<React.ReactHTMLElement<HTMLButtonElement>> {
  disabled?: boolean;
}

/*опис форми об'єкту
extends вказує на те, що ButtonProps розширює або наслідує іншу структуру.
Partial<T> — це утиліта TypeScript, яка робить всі властивості типу T необов'язковими. У цьому випадку T є React.ReactHTMLElement<HTMLButtonElement>.
React.ReactHTMLElement<T> є загальним типом для React компонентів, які відображають HTML елементи. HTMLButtonElement — це тип DOM елементу кнопки, що вказує, що цей інтерфейс відноситься до HTML кнопки.
ButtonProps дозволяє вам передавати будь-які стандартні властивості HTML кнопки (як type, onClick, id тощо) завдяки розширенню React.ReactHTMLElement
 */

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   disabled?: boolean;
// }

export default function Button({ disabled, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded',
        !disabled && 'hover:bg-gray-800 active:bg-gray-950',
        disabled && 'text-zinc-100',
      )}
    />
  );
}
