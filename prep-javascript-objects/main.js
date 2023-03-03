const person = {
  firstName: 'Homer',
  lastName: 'Simpson',
  hobby: 'watching TV'
};

console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log('The person\'s name is:', fullName);

person.job = 'nuclear safety inspector';
console.log('The person\'s job is:', person.job);
person['previousJob'] = 'none';
console.log('The person\'s previous job is:', person['previousJob']);
console.log('The complete person object:', person);
