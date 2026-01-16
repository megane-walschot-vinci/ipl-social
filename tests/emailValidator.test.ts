import { isValidEmail } from "../src/emailValidator";

/**
 * a. Il doit contenir au moins un @ 
 * b. Il doit contenir au moins un point dans le nom de domaine (et pas le dernier caractère 
 * c. Il ne peut contenir aucun espace 
 * d. Il doit avoir du texte avant et après le @ 
 */

//a.
describe("Validation d'email", () => {
    let email: string;

    test("valid email (test@email.com)", () => {
        email = "test@email.com"; 
        expect(isValidEmail(email)).toBe(true);
    });

    test("without @ (testemail.com)", () => {
        email = "test.com";
        expect(isValidEmail(email)).toBe(true);
    });
    
});