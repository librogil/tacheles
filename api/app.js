const express = require('express');
const app = express();
const path = require("path");

const { mongoose } = require('./db/mongoose');
const bodyParser = require('body-parser');
const { User, Argument,Temp, Term, FalseArgument } = require('./db/models');
const jwt = require('jsonwebtoken');
 
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, _id");

    res.header(
        'Access-Control-Expose-Headers',
        'x-access-token, x-refresh-token'
    );
    next();
});

app.use("", express.static(path.join(__dirname, "../front/dist/tacheles")));

app.get('/api/false-arguments', (req, res) => {
    Argument.find({type: 'false'
    }).then((arguments) => {
        res.send(arguments);
    });
})

app.get('/api/true-arguments', (req, res) => {
  Argument.find({type: 'true'
  }).then((arguments) => {
      res.send(arguments);
  });
})

app.get('/api/irrefutable-arguments', (req, res) => {
  Argument.find({type: 'irrefutable'
  }).then((arguments) => {
      res.send(arguments);
  });
})

app.get("/api/dictionary", (req, res) => {
    Term.find({}).sort('title').then((terms) => {
      res.send(terms);
    });
  });

  app.get('/api/arguments', (req, res) => {
    // gets all the arguments
    Argument.find({
    }).then((argument) => {
        res.send(argument);
    })
});

  app.get('/api/arguments/:argumentID', (req, res) => {
    // gets all the answers of an argument
    Argument.findOne({
        _id: req.params.argumentID
    }).then((argument) => {
        res.send(argument);
    })
});

app.get('/api/arguments/:argumentID/:answerID', (req, res) => {
  // gets a specific answer of an argument
  Argument.findOne({
      _id: req.params.argumentID
  }).then((argument) => {
      res.send(argument);
  })
});

app.get("/api/search/:searchTerm", (req, res) => {
  Argument.find({}).then((arguments) => {
      Term.find({}).then((terms) => {
        let data = {
          arguments: arguments,
          terms: terms
          };
          res.send(data);
      });
  });
});

app.post('/api/new', (req, res) => {
  // submits new argument
  let title = req.body.title;
  let answer = req.body.answer;
  let email = req.body.email;
  let newArgument = new Temp({
    title,
    answer,
    email
  });
  newArgument.save().then((temp) => {
    res.send(temp);
  });
});

app.post('/api/new/:argumentID', (req, res) => {
  // submits new answer
  let argumentID = req.body.argumentID;
  let title = req.body.title;
  let answer = req.body.answer;
  let email = req.body.email;
  let tempNewAnswer = new Temp({
      argumentID,
      title,
      answer,
      email

  });
  tempNewAnswer.save().then((temp) => {
    res.send(temp);
  });
});

app.get('/api/dictionary/:termID', (req, res) => {
  // gets a specific term
  Term.findOne({
      _id: req.params.termID
  }).then((term) => {
      res.send(term);
  })
});


app.get('/api/edit/:argumentID/:answerID', (req, res) => {
  // gets a specific answer for editing purposes
  Argument.findOne({
      _id: req.params.argumentID
  }).then((argument) => {
      res.send(argument);
  })
});

app.post('/api/edit/:argumentID/:answerID', (req, res) => {
  // submits an edited answer
  let argumentID = req.body.argumentID;
  let answerID = req.body.answerID;
  let title = req.body.title;
  let answer = req.body.answer;
  let email = req.body.email
  let tempNewAnswer = new Temp({
      argumentID,
      answerID,
      title,
      answer,
      email
  });
  tempNewAnswer.save().then((temp) => {
    res.send(temp);
  });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../front/dist/tacheles', 'index.html'));
});

const d_port = 3000; // for developing
const p_port = process.env.PORT || 8080; // for production

app.listen(p_port, () => {
  console.log("Server is listening on PORT or 8080");
});