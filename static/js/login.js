async function login() {

    const username =
        document.getElementById("username").value;

    const password =
        document.getElementById("password").value;

    const response = await fetch(
        "http://127.0.0.1:8000/api/login/",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                username,
                password
            })
        }
    );

    const data = await response.json();

    if (data.access) {

        localStorage.setItem(
            "token",
            data.access
        );

        alert("Login Successful");

        window.location.href = "/dashboard/";

    } else {

        alert("Invalid Credentials");
    }
}