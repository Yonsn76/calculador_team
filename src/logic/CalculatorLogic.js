import { create, all } from 'mathjs';

const math = create(all);

export const evaluateExpression = (expression) => {
    try {
        const result = math.evaluate(expression);
        return result.toString();
    } catch (error) {
        return "Error";
    }
};