class Person {
  constructor(fName, lName, dob) {
    this.firstName = fName;
    this.lastName = lName;
    this.birthday = new Date(dob);
  }
  greeting() {
    return `hello there ${this.firstName} ${this.lastName}`;
  }
  calculateAge() {
    const diff = new Date().getTime() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  getsMarried(newLastName) {
    this.lastName = newLastName;
  }
}

const UImfaP = document.querySelector('.mfa-object');
// instantiate an object
const mfa = new Person('mostafa', 'ibrahem', '12-6-1993');
const xWoman = new Person('xWoman', 'xMan', '12-10-80');


UImfaP.innerHTML = `
                    <span> note that <br> functions in the class are put in the prototype automatickally </span>
                    <p>object greeting function ========> ${mfa.greeting()}</p>
                    <p>object calculate age function ========> ${mfa.calculateAge()}</P>
                    <p>object new x woman greeting =====> ${xWoman.greeting()}</p>
                  `;

xWoman.getsMarried('yMan');
document.write(`after married y man ====> ${xWoman.greeting()}`);