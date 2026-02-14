/*
 * =================
 *   START OF HW-6
 * =================
 *
 * ---------- TASKS ----------
 * 1. Вивести в консоль всі числа від 1 до 10 за допомогою циклу while.
 * 2. Вивести в консоль всі парні числа від 2 до 20 за допомогою циклу for. Якщо число парне, пропустити ого за допомогою continue.
 * 3. Вивести в консоль таблицю множення числа 7 за допомогою циклу for.
 * 4. Створити скрипт, який виводить в консоль всі числа , які менші за n. Якщо зустрічається число, що більше або дорівнює n, цикл повинен бути закінчений за допомогою break.
 * 5. За допомогою циклу while вивести в консоль всі числа від 1 до 20, крім чисел, кратних 3. Якщо зустрінете число, кратне 3, цикл повинен продовжити виконання за допомогою оператора continue.
 */

const labelStyle =
  "margin-top: 20px; background: #334155; color: #f8fafc; padding: 4px 10px; border-radius: 5px 0 0 5px; font-weight: bold; font-family: 'Segoe UI', Tahoma, sans-serif;";
const iconStyle =
  "background: #0ea5e9; color: white; padding: 4px 12px; border-radius: 0 5px 5px 0; font-weight: 900; font-family: monospace;";
/*
 * ==========
 *   TASK 1
 * ==========
 *
 * Вивести в консоль всі числа від 1 до 10 за допомогою циклу while.
 */

console.log("%cTASK%c1", labelStyle, iconStyle);

let n = 0;

while (n <= 10) {
  console.log(n);
  n++;
}

/*
 * ==========
 *   TASK 2
 * ==========
 *
 * Вивести в консоль всі парні числа від 2 до 20 за допомогою циклу for. Якщо число парне, пропустити ого за допомогою continue.
 */

console.log("%cTASK%c2", labelStyle, iconStyle);

for (let i = 2; i <= 20; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

/*
 * ==========
 *   TASK 3
 * ==========
 * Вивести в консоль таблицю множення числа 7 за допомогою циклу for.
 */

console.log("%cTASK%c3", labelStyle, iconStyle);

const number = 7;
for (let i = 1; i <= 10; i++) {
  console.log(`${number}x${i}=${number * i}`);
}

/*
 * ==========
 *   TASK 4
 * ==========
 * Створити скрипт, який виводить в консоль всі числа , які менші за n. Якщо зустрічається число, що більше або дорівнює n, цикл повинен бути закінчений за допомогою break.
 */

console.log("%cTASK%c4", labelStyle, iconStyle);

const n2 = 15;
for (let i = 0; i <= n2; i++) {
  if (i >= n2) {
    break;
  }
  console.log(i);
}

/*
 * ==========
 *   TASK 5
 * ==========
 * За допомогою циклу while вивести в консоль всі числа від 1 до 20, крім чисел, кратних 3. Якщо зустрінете число, кратне 3, цикл повинен продовжити виконання за допомогою оператора continue.
 */

console.log("%cTASK%c5", labelStyle, iconStyle);

let i = 1;
while (i <= 20) {
  if (i % 3 === 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}

/*
 * ===============
 *   END OF HW-6
 * ===============
 */
