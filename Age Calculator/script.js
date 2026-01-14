document.getElementById("age-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const birthdateValue = document.getElementById("birthdate").value;
    if (!birthdateValue) {
        document.getElementById("result").textContent = "Please enter your birth date.";
        return;
    }

    const birthdate = new Date(birthdateValue);
    const today = new Date();

    let age = today.getFullYear() - birthdate.getFullYear();

    const monthDifference = today.getMonth() - birthdate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    document.getElementById("result").textContent = `You are ${age} years old.`;
});