// Задача 1

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state *= 1.5;
	}

	set state(number) {
		if (number < 0) {
			this.state = 0;
		} else if (number > 100) {
			this.state = 100;
		} else {
			this._state = number;
		}
	}

	get state() {
		return this._state;
	}
}


class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "book";
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

// Задача 2

class Library {
	constructor(name, books) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		let finding = this.books.find(book => book[type] === value);
		if (finding !== undefined) {
			return finding;
		} else {
			return null;
		}
	}

	giveBookByName(bookName) {
		let finding = this.books.find(book => book.name === bookName);
		if (finding !== undefined) {
			this.books.splice(this.books.findIndex(book => book.name === finding), 1)
			return finding;
		} else {
			return null;
		}
	}
}

//Задача 3
class Student {
  constructor(name) {
    this.name = name;
    this.marks = {}; // Хранит оценки по предметам
  }

  addMark(mark, subject) {
    // Валидируем оценку (от 2 до 5)
    if (typeof mark !== 'number' || mark < 2 || mark > 5) {
      return; // Неверный формат или вне диапазона
    }

    // Если предмет ещё не добавлен, создаём массив оценок
    if (!this.marks.hasOwnProperty(subject)) {
      this.marks[subject] = [];
    }

    // Добавляем оценку
    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    // Проверяем наличие предмета
    if (!this.marks.hasOwnProperty(subject) || this.marks[subject].length === 0) {
      return 0; // Нет оценок по предмету
    }

    // Считаем сумму оценок через reduce
    const total = this.marks[subject].reduce((sum, mark) => sum + mark, 0);
    // Возвращаем среднее
    return total / this.marks[subject].length;
  }

  getAverage() {
    const subjects = Object.keys(this.marks);
    if (subjects.length === 0) return 0;

    // Суммируем средние оценки по всем предметам
    const totalAverage = subjects.reduce((sum, subject) => {
      return sum + this.getAverageBySubject(subject);
    }, 0);

    return totalAverage / subjects.length;
  }
}

// Пример использования:

const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика"); // Не добавится, так как >5
console.log(student.getAverageBySubject("физика")); // 4.5
console.log(student.getAverageBySubject("биология")); // 0
console.log(student.getAverage()); // (4.5 + 5) / 2 = 4.75