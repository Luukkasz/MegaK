"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = exports.ValidationError = void 0;
class ValidationError extends Error {
}
exports.ValidationError = ValidationError;
const handleError = (err, req, res, next) => {
    console.error(err);
    res
        .status(err instanceof ValidationError ? 400 : 500)
        .render('error', {
        message: err instanceof ValidationError ? err.message : 'Przepraszamy, spróbuj ponownie za kilka minut.',
    });
};
exports.handleError = handleError;
//# sourceMappingURL=error.js.map