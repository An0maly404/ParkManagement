<template>
    <header>
        <h1>{{ isLogin ? "Login" : "Register" }}</h1>
    </header>

    <form @submit.prevent="handleSubmit">
        <fieldset>
            <label>Username </label>
            <input v-model="username" type="text" id="username" placeholder="maverick" required />
            <br /><br />

            <label>Password </label>
            <input v-model="password" type="password" id="password" required />
            <br /><br />

            <!-- Rewrite Password field for Register -->
            <label v-if="!isLogin">Rewrite Password </label>
            <input v-if="!isLogin" v-model="passwordVerification" type="password" id="passverif" required />
            <br v-if="!isLogin" /><br v-if="!isLogin" />

            <button type="reset">Reset</button>
            <button type="submit">{{ isLogin ? "Login" : "Register" }}</button>
        </fieldset>
    </form>
    <br /><br />

    <div>
        <label>
            <input type="checkbox" v-model="isLogin" />
            Switch to {{ isLogin ? "Register" : "Login" }}
        </label>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            isLogin: false, // Tracks whether it's in Login or Register mode
            username: "",
            password: "",
            passwordVerification: "",
        };
    },
    methods: {
        async handleSubmit() {
            try {
                if (!this.isLogin) {
                    // Register mode
                    if (this.password !== this.passwordVerification) {
                        alert("Passwords do not match!");
                        return;
                    }

                    const response = await axios.post("http://localhost:3000/users", {
                        name: this.username,
                        password: this.password,
                    });

                    if (response.status === 201) {
                        alert("User registered successfully!");
                        localStorage.setItem("loggedInUser", this.username); // Store username
                        this.$router.push("/TicketsOwned"); // Redirect to TicketsOwned page
                    }
                } else {
                    // Login mode
                    const response = await axios.post("http://localhost:3000/users/login", {
                        name: this.username,
                        password: this.password,
                    });

                    if (response.status === 200) {
                        alert("Login successful!");
                        localStorage.setItem("loggedInUser", this.username); // Store username
                        this.$router.push("/TicketsOwned"); // Redirect to TicketsOwned page
                    }
                }
            } catch (error) {
                // Handle error response
                if (error.response && error.response.status === 400) {
                    alert("Error: " + (error.response.data || "Invalid username or password."));
                } else {
                    alert("An unexpected error occurred. Please try again.");
                }
                console.error(error);
            }
    },
    resetForm() {
        this.username = "";
        this.password = "";
        this.passwordVerification = "";
    },
},
};
</script>

<style>
form {
    margin: 0 auto;
    max-width: auto;
}
</style>
