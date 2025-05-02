export const evaluateExpression = (expression) => {
    try {
        const result = eval(expression);
        if (!isFinite(result) || isNaN(result)) {
            return "No da Papi";
        }
        return result.toString();
    } catch {
        return "Error";
    }

};