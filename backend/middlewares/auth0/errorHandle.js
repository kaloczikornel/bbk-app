const errorHandler = (error, req, res, next) => {
    if (
        error &&
        error.status &&
        error.status === 401 &&
        error.code &&
        error.code === 'credentials_required'
    ) {
        res.status(error.status).json({ message: 'Requires authentication', status: error.status });
        next(error);
        return;
    }

    if (error && error.status && error.status === 401) {
        res.status(error.status).json({ message: 'Bad credentials', status: error.status });
        next(error);
        return;
    }

    const status = error.statusCode || error.code || 500;
    const message = error.message || 'internal error';

    res.status(status).json({ message, status });
    next(error);
};

module.exports = {
    errorHandler,
};
