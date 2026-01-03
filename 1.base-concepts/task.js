"use strict";

function solveEquation(a, b, c) {
    let arr = [];
    const d = b ** 2 - 4 * a * c; // Вычисляем дискриминант

    if (d < 0) {
        // Нет решений
        return [];
    } else if (d === 0) {
        // Один корень
        const root = -b / (2 * a);
        return [root];
    } else {
        // Два решения
        const sqrtD = Math.sqrt(d);
        const root1 = (-b + sqrtD) / (2 * a);
        const root2 = (-b - sqrtD) / (2 * a);
        return [root1, root2];
    }
}
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Проверка и преобразование входных данных
  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);
  countMonths = Number(countMonths);

  if (
    isNaN(percent) ||
    isNaN(contribution) ||
    isNaN(amount) ||
    isNaN(countMonths)
  ) {
    return false;
  }

  if (
    percent < 0 ||
    percent > 100 ||
    contribution < 0 ||
    amount < 0 ||
    countMonths <= 0
  ) {
    return false;
  }

  // Преобразование ставки
  const monthlyRate = (percent / 100) / 12;
  const creditAmount = amount - contribution;

  if (creditAmount <= 0) {
    // Если первоначальный взнос равен или больше суммы кредита
    return 0;
  }

  // Расчет ежемесячного платежа по формуле
  const pow = Math.pow(1 + monthlyRate, countMonths);
  const monthlyPayment =
    creditAmount *
    (monthlyRate + (monthlyRate / (pow - 1)));

  const totalPayment = monthlyPayment * countMonths;

  // Округление до двух знаков
  return +totalPayment.toFixed(2);
}