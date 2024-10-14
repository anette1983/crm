// export const getSummaryStats = () => {
//   return Promise.resolve({
//     promotions: 427,
//     categories: 8,
//     newCompanies: 28,
//     activeCompanies: 670,
//   });
// };
// export const getSummarySales = (): Promise<
//   { companyId: number; companyTitle: string; sold: number; income: number }[]
// > => {
//   const items = [];
//   for (let i = 0; i < 6; i++) {
//     items.push({
//       companyId: i + 1,
//       companyTitle: 'Costco Wholesale',
//       sold: 459,
//       income: 600,
//     });
//   }
//   return Promise.resolve(items);
// };
// export const getSummaryPromotions = () => {
//   const items = [];
//   for (let i = 0; i < 7; i++) {
//     items.push({
//       promotionId: i + 1,
//       promotionName: 'Lorem ipsum dolor',
//       companyTitle: 'Costco Wholesale',
//       discount: 40,
//     });
//   }
//   return Promise.resolve(items);
// };
// export const getSummaryCategories = () => {
//   return Promise.resolve([
//     {
//       categoryId: 1,
//       categoryTitle: 'Products',
//       count: 4,
//     },
//     {
//       categoryId: 2,
//       categoryTitle: 'Products',
//       count: 8,
//     },
//     {
//       categoryId: 3,
//       categoryTitle: 'Products',
//       count: 26,
//     },
//     {
//       categoryId: 4,
//       categoryTitle: 'Products',
//       count: 1,
//     },
//     {
//       categoryId: 5,
//       categoryTitle: 'Products',
//       count: 37,
//     },
//     {
//       categoryId: 6,
//       categoryTitle: 'Products',
//       count: 22,
//     },
//     {
//       categoryId: 7,
//       categoryTitle: 'Products',
//       count: 4,
//     },
//     {
//       categoryId: 8,
//       categoryTitle: 'Products',
//       count: 4,
//     },
//   ]);
// };
// export const getSummaryCountries = () => {
//   return Promise.resolve([
//     {
//       countryId: 1,
//       countryTitle: 'Canada',
//       count: 4,
//     },
//     {
//       countryId: 2,
//       countryTitle: 'USA',
//       count: 4,
//     },
//     {
//       countryId: 3,
//       countryTitle: 'Italia',
//       count: 2,
//     },
//     {
//       countryId: 4,
//       countryTitle: 'Ukraine',
//       count: 2,
//     },
//     {
//       countryId: 5,
//       countryTitle: 'Spain',
//       count: 2,
//     },
//   ]);
// };

export interface SummaryStats {
  promotions: number;
  categories: number;
  newCompanies: number;
  activeCompanies: number;
}
export interface SummarySales {
  id: string;
  companyId: string;
  companyTitle: string;
  sold: number;
  income: number;
}
export interface Country {
  id: string;
  title: string;
}
export interface Category {
  id: string;
  title: string;
}
export enum CompanyStatus {
  Active = 'active',
  NotActive = 'notActive',
  Pending = 'pending',
  Suspended = 'suspended',
}
export interface Company {
  id: string;
  title: string;
  description: string;
  status: CompanyStatus;
  joinedDate: string;
  hasPromotions: boolean;
  categoryId: string;
  categoryTitle: string;
  countryId: string;
  countryTitle: string;
  avatar?: string;
}
export interface Promotion {
  id: string;
  title: string;
  description: string;
  discount: number;
  companyId: string;
  companyTitle: string;
  avatar?: string;
}
const PROJECT_TOKEN = process.env.NEXT_PUBLIC_PROJECT_TOKEN;
const buildUrl = (...paths: string[]) =>
  `https://${PROJECT_TOKEN}.mockapi.io/api/v1/${paths.join('/')}`;

const stringifyQueryParams = (params: Record<string, string>) =>
  new URLSearchParams(params).toString();

// Функція приймає на вхід об'єкт params, де ключі — це назви параметрів, а значення — відповідні значення параметрів, і перетворює їх у формат, який можна додати до URL.
// const params = {
//   category: 'electronics',
//   sort: 'price',
//   order: 'asc',
// };
// Функція stringifyQueryParams(params) перетворить цей об'єкт у рядок:
// category=electronics&sort=price&order=asc
// Цей рядок може бути використаний для формування URL із параметрами:
// const url = `https://example.com/products?${stringifyQueryParams(params)}`;
// Рез-т https://example.com/products?category=electronics&sort=price&order=asc
// new URLSearchParams(params) приймає об'єкт або інший формат параметрів і перетворює його в структуру, яка відповідає стандартному формату параметрів запиту для URL.
// Методи URLSearchParams
// Екземпляр URLSearchParams має кілька корисних методів для маніпуляції з параметрами запиту, таких як:

// append: додає новий параметр.
// delete: видаляє параметр.
// get: отримує значення певного параметра.
// toString: перетворює всі параметри в рядок у форматі, який можна використовувати в URL.

const sendRequest = async <T>(url: string, init?: RequestInit) => {
  const res = await fetch(url, init);
  if (!res.ok) {
    throw new Error(await res.text());
  }

  return (await res.json()) as T;
};

export const getSummaryStats = (init?: RequestInit) => {
  return sendRequest<SummaryStats>(buildUrl('summary-stats', '1'), init);
};
export const getSummarySales = (init?: RequestInit) => {
  return sendRequest<SummarySales[]>(buildUrl('summary-sales'), init);
};
export const getCountries = (init?: RequestInit) => {
  return sendRequest<Country[]>(buildUrl('countries'), init);
};
export const getCategories = (init?: RequestInit) => {
  return sendRequest<Category[]>(buildUrl('categories'), init);
};

export const getCompanies = (init?: RequestInit) => {
  return sendRequest<Company[]>(buildUrl('companies'), init);
};

export const getCompany = (id: string, init?: RequestInit) => {
  return sendRequest<Company>(buildUrl('companies', id), init);
};

export const getPromotions = async (
  params: Record<string, string> = {},
  init?: RequestInit,
) => {
  return sendRequest<Promotion[]>(
    `${buildUrl('promotions')}?${stringifyQueryParams(params)}`,
    init,
  );
};

// Параметр init у функціях sendRequest, getSummaryStats, getSummarySales та інших використовується для передачі об'єкта типу RequestInit. Це тип, який визначає налаштування для запитів, що відправляються за допомогою функції fetch.
// RequestInit — це інтерфейс, який використовується в функції fetch для налаштування HTTP-запиту. Він може містити наступні опції:

// method: HTTP-метод (наприклад, GET, POST, PUT, DELETE тощо).
// headers: HTTP-заголовки для запиту (наприклад, Content-Type).
// body: Тіло запиту (для POST або PUT-запитів).
// mode: Режим запиту, наприклад, cors, no-cors, або same-origin.
// credentials: Політика з обліковими даними, наприклад, include для передачі cookies.
// cache: Політика кешування для запиту.
// redirect: Політика перенаправлення.
// Якщо, наприклад, потрібно відправити POST-запит із певними заголовками або тілом, ви можете передати ці налаштування в параметр init:
// const postData = async () => {
//   const init: RequestInit = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ key: 'value' }),
//   };

//   await getSummaryStats(init);
// };

// Якщо init не передається, запит виконується за замовчуванням з методом GET.

export const createCompany = async (
  data: Omit<Company, 'id' | 'hasPromotions'>,
  init?: RequestInit,
) => {
  return sendRequest<Company>(buildUrl('companies'), {
    ...init,
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      ...(init && init.headers),
      'content-type': 'application/json',
    },
  });
};
export const createPromotion = async (
  data: Omit<Promotion, 'id'>,
  init?: RequestInit,
) => {
  return sendRequest<Promotion>(buildUrl('promotions'), {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      ...(init && init.headers),
      'content-type': 'application/json',
    },
  });
};
