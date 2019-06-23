const   bodyParser  = require('body-parser'),
        mongoose    = require('mongoose'),
        express     = require('express'),
        app         = express();
mongoose.connect('mongodb://localhost/RESTful_Blog_App', {useNewUrlParser: true})
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))




app.listen(3000, ()=> console.log('server is running'))
