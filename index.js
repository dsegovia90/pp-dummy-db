var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/chingu-pp');

var Schema = mongoose.Schema;

var User = new Schema({
  slack: {
    id: String,
    displayName: String,
    email: String,
    image: String,
    team: Object
  },
  profile: {
    timezone: Number, // UTC -5 entered as -5
    fccScore: Number, // Based on FCC levels completed?
  },
  pending: {
    created: Date
  }
});

var UserConstructor = mongoose.model('User', User)

var user1 = new UserConstructor(
  {
    slack: {
      id: 'U5RCWV0L1', // Unique
      displayName: 'User1 Lorem', // Unique
      email: 'user1@example.com', //Unique
      image: '',
      team: {
        image_original: 'https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2017-06-09/195331322580_cc610918d8ef413f35b0_original.jpg',
        domain: 'chingu-honeybadgers',
        name: 'Chingu-HoneyBadgers',
        id: 'T5P5QHJKB'
      }
    },
    profile: {
      timezone: 5, 
      fccScore: 300
    },
    pending: {
      created: '2017-07-06T10:18:23.070-05:00',
    }
  }
)
var user2 = new UserConstructor(
  {
    slack: {
      id: 'U5RCWV0L2', // Unique
      displayName: 'User2 Lorem', // Unique
      email: 'user2@example.com', //Unique
      image: '',
      team: {
        image_original: 'https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2017-06-09/195331322580_cc610918d8ef413f35b0_original.jpg',
        domain: 'chingu-honeybadgers',
        name: 'Chingu-HoneyBadgers',
        id: 'T5P5QHJKB'
      }
    },
    profile: {
      timezone: 5, 
      fccScore: 300
    },
    pending: {
      created: '2017-07-06T10:18:23.070-05:00',
    }
  }
)
var user3 = new UserConstructor(
  {
    slack: {
      id: 'U5RCWV0L3', // Unique
      displayName: 'User3 Lorem', // Unique
      email: 'user3@example.com', //Unique
      image: '',
      team: {
        image_original: 'https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2017-06-09/195331322580_cc610918d8ef413f35b0_original.jpg',
        domain: 'chingu-honeybadgers',
        name: 'Chingu-HoneyBadgers',
        id: 'T5P5QHJKB'
      }
    },
    profile: {
      timezone: 8, 
      fccScore: 300
    },
    pending: {
      created: '2017-07-06T10:18:23.070-05:00',
    }
  }
)
var user4 = new UserConstructor(
  {
    slack: {
      id: 'U5RCWV0L4', // Unique
      displayName: 'User4 Lorem', // Unique
      email: 'user4@example.com', //Unique
      image: '',
      team: {
        image_original: 'https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2017-06-09/195331322580_cc610918d8ef413f35b0_original.jpg',
        domain: 'chingu-honeybadgers',
        name: 'Chingu-HoneyBadgers',
        id: 'T5P5QHJKB'
      }
    },
    profile: {
      timezone: 8, 
      fccScore: 300
    },
    pending: {
      created: '2017-07-06T10:18:23.070-05:00',
    }
  }
)
var user5 = new UserConstructor(
  {
    slack: {
      id: 'U5RCWV0L5', // Unique
      displayName: 'User5 Lorem', // Unique
      email: 'user5@example.com', //Unique
      image: '',
      team: {
        image_original: 'https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2017-06-09/195331322580_cc610918d8ef413f35b0_original.jpg',
        domain: 'chingu-honeybadgers',
        name: 'Chingu-HoneyBadgers',
        id: 'T5P5QHJKB'
      }
    },
    profile: {
      timezone: 8, 
      fccScore: 300
    },
    pending: {
      created: '2017-07-06T10:18:23.070-05:00',
    }
  }
)
var user6 = new UserConstructor(
  {
    slack: {
      id: 'U5RCWV0L6', // Unique
      displayName: 'User6 Lorem', // Unique
      email: 'user6@example.com', //Unique
      image: '',
      team: {
        image_original: 'https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2017-06-09/195331322580_cc610918d8ef413f35b0_original.jpg',
        domain: 'chingu-honeybadgers',
        name: 'Chingu-HoneyBadgers',
        id: 'T5P5QHJKB'
      }
    },
    profile: {
      timezone: -5, 
      fccScore: 300
    },
    pending: {
      created: '2017-07-06T10:18:23.070-05:00',
    }
  }
)
var user7 = new UserConstructor(
  {
    slack: {
      id: 'U5RCWV0L7', // Unique
      displayName: 'User7 Lorem', // Unique
      email: 'user7@example.com', //Unique
      image: '',
      team: {
        image_original: 'https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2017-06-09/195331322580_cc610918d8ef413f35b0_original.jpg',
        domain: 'chingu-honeybadgers',
        name: 'Chingu-HoneyBadgers',
        id: 'T5P5QHJKB'
      }
    },
    profile: {
      timezone: -4, 
      fccScore: 300
    },
    pending: {
      created: '2017-07-06T10:18:23.070-05:00',
    }
  }
)
var user8 = new UserConstructor(
  {
    slack: {
      id: 'U5RCWV0L8', // Unique
      displayName: 'User8 Lorem', // Unique
      email: 'user8@example.com', //Unique
      image: '',
      team: {
        image_original: 'https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2017-06-09/195331322580_cc610918d8ef413f35b0_original.jpg',
        domain: 'chingu-honeybadgers',
        name: 'Chingu-HoneyBadgers',
        id: 'T5P5QHJKB'
      }
    },
    profile: {
      timezone: 0, 
      fccScore: 300
    },
    pending: {
      created: '2017-07-06T10:18:23.070-05:00',
    }
  }
)
var user9 = new UserConstructor(
  {
    slack: {
      id: 'U5RCWV0L9', // Unique
      displayName: 'User9 Lorem', // Unique
      email: 'user9@example.com', //Unique
      image: '',
      team: {
        image_original: 'https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2017-06-09/195331322580_cc610918d8ef413f35b0_original.jpg',
        domain: 'chingu-honeybadgers',
        name: 'Chingu-HoneyBadgers',
        id: 'T5P5QHJKB'
      }
    },
    profile: {
      timezone: 0, 
      fccScore: 300
    },
    pending: {
      created: '2017-07-06T10:18:23.070-05:00',
    }
  }
)
var user10 = new UserConstructor(
  {
    slack: {
      id: 'U5RCWV0LA', // Unique
      displayName: 'User10 Lorem', // Unique
      email: 'user10@example.com', //Unique
      image: '',
      team: {
        image_original: 'https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2017-06-09/195331322580_cc610918d8ef413f35b0_original.jpg',
        domain: 'chingu-honeybadgers',
        name: 'Chingu-HoneyBadgers',
        id: 'T5P5QHJKB'
      }
    },
    profile: {
      timezone: 10, 
      fccScore: 300
    },
    pending: {
      created: '2017-07-06T10:18:23.070-05:00',
    }
  }
)
var user11 = new UserConstructor(
  {
    slack: {
      id: 'U5RCWV0LB', // Unique
      displayName: 'User11 Lorem', // Unique
      email: 'user11@example.com', //Unique
      image: '',
      team: {
        image_original: 'https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2017-06-09/195331322580_cc610918d8ef413f35b0_original.jpg',
        domain: 'chingu-honeybadgers',
        name: 'Chingu-HoneyBadgers',
        id: 'T5P5QHJKB'
      }
    },
    profile: {
      timezone: 5, 
      fccScore: 300
    },
    pending: {
      created: '2017-07-06T10:18:23.070-05:00',
    }
  }
)

UserConstructor.create(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11, function(err){
  if (err) throw err
  process.exit()
})
