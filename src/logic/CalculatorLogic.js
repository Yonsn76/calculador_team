export const evaluateExpression = (expression) => {
    try {
     const result = eval(expression); 
     return result.toString();
    } catch {
     return "Error";
    }
   
   };