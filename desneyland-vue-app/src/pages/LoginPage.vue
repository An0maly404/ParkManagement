<template>
    <header>
        <h1>{{ isLogin ? "Login" : "Register" }}</h1>
    </header>

    <form :action="isLogin ? '/login' : '/register'" method="POST">
        <fieldset>
            <label>Username </label>
            <input type="text" id="username" name="username" placeholder="maverick" required />
            <br /><br />

            <!-- Email field for Login -->
            <label v-if="isLogin">Email </label>
            <input
                v-if="isLogin"
                type="email"
                id="email"
                name="email"
                placeholder="abc@example.com"
                required
            />
            <br v-if="isLogin" /><br v-if="isLogin" />

            <label>Password </label>
            <input type="password" id="password" name="password" required />
            <br /><br />

            <!-- Rewrite Password field for Register -->
            <label v-if="!isLogin">Rewrite Password </label>
            <input
                v-if="!isLogin"
                type="password"
                id="passverif"
                name="passverif"
                required
            />
            <br v-if="!isLogin" /><br v-if="!isLogin" />

            <button type="reset">Reset</button>
            <button type="submit">
                {{ isLogin ? "Login" : "Register" }}
            </button>
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
export default {
    data() {
        return {
            isLogin: false, // Tracks whether it's in Login or Register mode
        };
    },
};
</script>

<style>
/* Optional: Add some basic styling for visual clarity */
form {
    margin: 0 auto;
    max-width: auto;
}
</style>
