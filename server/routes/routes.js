module.exports = function (app, express) {

    //index
    // app.get('/', (req,res) => {
    //     res.send ("ciaoooooo")
    // })
    
    //middleware routing
    app.use('/movies', require('../resource/movies/index.js'));

}