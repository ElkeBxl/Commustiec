import app from "./app";

// We use Heroku's port or our own for when we dev local
const port = process.env.PORT || 4040;

app.listen(port, function() {
    console.log('Express server listening on port ' + port);
});