class ValidationError extends Error{}

const handleError = (err, req, res, next) => {
    /*
    if (err instanceof NotFoundError) {
        res
            .status(404)
            .render('error', {
                message: 'Nie można znaleźć',
            });
        return;
    }

     */
    console.error(err);

    res
        .status(err instanceof ValidationError ? 400 : 500)
        .send('error', {
            message: err instanceof ValidationError ? err.message : 'przepraszamy, spróbuj później',
    })
}
module.exports = {
    handleError,
    ValidationError,
};