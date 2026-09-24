function inputCleaner(req, res, next) {
    if (req.body.username) {
        req.body.username = req.body.username.toLowerCase();
    }

    if (req.body.comment) {
        req.body.comment = req.body.comment.replaceAll(/<[^>]*>/g, "")
    }

    next();
}

function inputValidator(req,res,next) {
    req.body.username.length >= 3 ? next() : res.redirect("/form?error=Username must be at least 3 characters.");
}

module.exports = {
    inputCleaner,
    inputValidator
}
