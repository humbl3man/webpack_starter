let checkName = (firstName, lastName) => {
  if (firstName.toLowerCase() === 'konstantin' || lastName.toLowerCase() === 'minevich') {
    return 'you ARE konstantin minevich!';
  } else {
    return 'you ARE NOT konstantin minevich';
  }
};

console.log(checkName('Konstantin', 'Minevich'));
