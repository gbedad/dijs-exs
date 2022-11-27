// Exercise 2

const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' },
];

const welcomeStudents = users.map((item) => {
  return `Hello ${item.firstName}`;
});

console.log(welcomeStudents);

const filtered = users.filter((item) => {
  return item.role.includes('Full Stack');
});

const filtered1 = users
  .filter((item) => {
    return item.role.includes('Full Stack');
  })
  .map((elem) => {
    return elem.lastName;
  });

console.log(filtered);

// Exercise 3

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const epicString = epic.reduce((concat, item) => {
  return concat + item;
});

console.log(epicString);

// 🌟 Exercise 4 : Employees #2

const students = [
  { name: 'Ray', course: 'Computer Science', isPassed: true },
  { name: 'Liam', course: 'Computer Science', isPassed: false },
  { name: 'Jenner', course: 'Information Technology', isPassed: true },
  { name: 'Marco', course: 'Robotics', isPassed: true },
  { name: 'Kimberly', course: 'Artificial Intelligence', isPassed: false },
  { name: 'Jamie', course: 'Big Data', isPassed: false },
];

const hasPassed = students.filter((item) => {
  return item.isPassed;
});

const hasPassedCongrats = students
  .filter((item) => {
    return item.isPassed;
  })
  .forEach((elem) => {
    console.log(
      `Good job ${elem.name}, you passed the course in ${elem.course}.`
    );
  });

console.log(hasPassed);
