// Задача 1.

function parseCount(value) {
  const parsed = Number.parseFloat(value);
  if (Number.isNaN(parsed)) {
    throw new Error("Невалидное значение");
  }
  return parsed;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error; //ошибка
  }
}

// Задача 2.
class Triangle {
  constructor(a, b, c) {
    if (
      a + b <= c ||
      a + c <= b ||
      b + c <= a
    ) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    const s = this.perimeter / 2;
    const areaCalc = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    return Number(areaCalc.toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    const triangle = new Triangle(a, b, c);
    return triangle; // возвращаем  объект класса
  } catch (error) {
    // ошибка
    return {
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
      get area() {
        return "Ошибка! Треугольник не существует";
      }
    };
  }
}