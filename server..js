const express = require('express');
const bodyParser = require('body-parser');

const app = express();
let useGoal = 'Learn Docker!';

app.use(
    bodyParser.urlencoded({
        extended: false,
    })
)

app.use(express.static('public'));

app.get('/',(req, res) => {
    res.Send(`
    <html>
        <head>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <section>
                <h2>My Course Goal</h2>
                <h3>${useGoal}</h3>
            </section>
            <form action="/store-goal" method="POST">
                <div class="form-control">
                    <label>Course Goal</label>
                    <input type="text" name="goal">
                </div>
                <button>Set Course Goal</button>
            </form>
        </body>
    `);
});

app.post('/store-goal', (req, res) =>
{
    const enteredGoal = req.body.goal;
    console.log(enteredGoal);
    useGoal = enteredGoal;
    res.redirect('/');
});

app.listen(80);