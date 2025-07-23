export const checkValidation = (email, password, name = "") => {
    const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

    // Optional: Validate name only if provided
    if (name && name.trim().length < 2) return "Name must be at least 2 characters long";

    if (!isEmailValid) return "Email is not valid";
    if (!isPasswordValid)
        return "Password must be at least 8 characters long and include uppercase, lowercase, and a number";

    return null; // Valid
};
