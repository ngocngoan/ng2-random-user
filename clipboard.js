// This is just stuff to copy/paste during the presentation
// because nobody wants to watch someone type out data...

var fred = {
  name: {
    first: 'Fred',
    last: 'Mertz'
  },
  username: 'TheFredMertz',
  email: 'freddie@aol.com'
};

var ethel = {
  name: {
    first: 'Ethel',
    last: 'Mertz'
  },
  username: 'maegrl',
  email: 'maebebaby@aol.com'
};

// Random User API URL
var url = 'http://api.randomuser.me';

// just in case there's no internet...
var url = 'http://localhost:3000';



// Function to make the names/addresses be upper case
// use only if there's time...
function upperWords(string) {
  return string.split(' ').map(word => {
    return word.substr(0, 1).toUpperCase() + word.substr(1);
  }).join(' ');
}


// copy this only if you're running out of time...
this.properties = [
  {
    title: 'Name',
    getVal: user => upperWords(`${user.name.first} ${user.name.last}`)
  },
  {
    title: 'Username',
    getVal: user => user.username
  },
  {
    title: 'Email',
    getVal: user => user.email
  },
  {
    title: 'Address',
    getVal: user => (
      upperWords(`${user.location.street}, ${user.location.city}, ${user.location.state} ${user.location.zip}`)
    )
  },
  {
    title: 'Birthday',
    getVal: user => moment(user.dob * 1000).format('MMMM Do, YYYY')
  },
  {
    title: 'Cell Phone Number',
    getVal: user => user.cell
  }
];