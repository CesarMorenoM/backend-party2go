import app from './app'
import db from './database/database'


db.sync({force : true}).then(async () => {
    app.listen(3000,() => console.log(`server is running at 3000`))
})