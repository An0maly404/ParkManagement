<template>
    <div class="auth-container">
        <!-- Header -->
        <header class="auth-header">
            <h1>{{ isLogin ? "Login" : "Register" }}</h1>
        </header>

        <!-- Form Section -->
        <form @submit.prevent="handleSubmit" class="auth-form">
            <!-- Username -->
            <div class="form-group">
                <label for="username">Username</label>
                <input v-model="username" type="text" id="username" placeholder="Enter your username" required />
            </div>

            <!-- Password -->
            <div class="form-group">
                <label for="password">Password</label>
                <input v-model="password" type="password" id="password" placeholder="Enter your password" required />
            </div>

            <!-- Password Verification (Register Only) -->
            <div v-if="!isLogin" class="form-group">
                <label for="passverif">Rewrite Password</label>
                <input v-model="passwordVerification" type="password" id="passverif" placeholder="Rewrite your password"
                    required />
            </div>

            <!-- Buttons -->
            <div class="form-actions">
                <button type="reset" class="btn-secondary">Reset</button>
                <button type="submit" class="btn-primary">{{ isLogin ? "Login" : "Register" }}</button>
            </div>
        </form>

        <!-- Switch Between Modes -->
        <div class="switch-container">
            <label>
                <input type="checkbox" v-model="isLogin" />
                Switch to {{ isLogin ? "Register" : "Login" }}
            </label>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            isLogin: false, // Tracks Login or Register mode
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
                        this.$router.push("/TicketsOwned"); // Redirect
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
                        this.$router.push("/TicketsOwned"); // Redirect
                    }
                }
            } catch (error) {
                // Handle errors
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

<style scoped>
/* General Container */
.auth-container {
  max-width: 800px; /* Increased width to make the form larger on the sides */
  margin: 50px auto; /* Center the form horizontally and vertically */
  padding: 20px 40px; /* Balanced padding (horizontal increased slightly) */
  background-color: #ffffff;
  border-radius: 10px; /* Keeps it modern with subtle curves */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
  font-family: 'Poppins', Arial, sans-serif;
}

/* Header */
.auth-header {
  text-align: center;
  margin-bottom: 30px;
}

.auth-header h1 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #2b2d42;
}

/* Form Group */
.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
  color: #555;
}

.form-group input {
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.form-group input:focus {
  border-color: #2646d7;
  outline: none;
}

/* Buttons */
.form-actions {
  display: flex;
  justify-content: space-between;
  gap: 15px;
}

.btn-primary,
.btn-secondary {
  flex: 1;
  padding: 12px;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-primary {
  background-color: #2646d7;
  color: #fff;
}

.btn-primary:hover {
  background-color: #1e38a1;
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: #e0e0e0;
  color: #333;
}

.btn-secondary:hover {
  background-color: #d4d4d4;
  transform: translateY(-2px);
}

/* Switch Container */
.switch-container {
  margin-top: 30px;
  text-align: center;
}

.switch-container label {
  font-size: 1rem;
  font-weight: 600;
  color: #555;
  cursor: pointer;
}

.switch-container input {
  margin-right: 8px;
  transform: scale(1.2);
}

</style>