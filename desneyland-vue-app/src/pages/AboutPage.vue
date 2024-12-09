<template>
    <div class="about-container">
        <header>
            <h1>Info About Us!</h1>
            <h2 class="story-title">The Story of DEFUNCTLAND</h2>
        </header>

        <section>
            <p class="intro-text">
                Welcome to <strong>DEFUNCTLAND</strong>, a park like no other. Behind its magic lies a story of
                visionaries,
                challenges, and boundless imagination.
            </p>
        </section>

        <section class="content-section">
            <h3>Our Origins</h3>
            <p>
                DEFUNCTLAND was born from the dreams of two childhood friends, <em>Arthur Fields</em> and <em>Evelyn
                    Hart</em>,
                who shared a love for forgotten amusement parks and vintage attractions. Growing up in the small town of
                <strong>Meadowbrook</strong>, they spent their summers exploring abandoned fairgrounds and imagining how
                they
                could restore their faded glory.
            </p>
            <p>
                In <strong>1998</strong>, after years of dreaming and saving, Arthur and Evelyn purchased an old,
                decaying
                amusement park on the outskirts of <span>[your region]</span>. With a small team of enthusiasts, they
                began
                breathing life into what would become DEFUNCTLAND. Their mission? To create a park that celebrated
                nostalgia
                while embracing innovation, giving old attractions a new purpose and offering visitors experiences
                they'd never
                forget.
            </p>
        </section>

        <section class="content-section">
            <h3>A Park Like No Other</h3>
            <p>
                When DEFUNCTLAND opened its gates in <strong>2003</strong>, it was an instant success. What made it
                unique was
                its blend of restored vintage rides and state-of-the-art attractions. The park was designed as a journey
                through
                time, with each zone reflecting a different era of amusement park history.
            </p>
        </section>

        <section class="content-section">
            <h3>Innovation and Growth</h3>
            <p>
                Over the years, DEFUNCTLAND grew from a modest project into a globally recognized destination. In
                <strong>2015</strong>, the park introduced its <em>Interactive Map</em>, allowing visitors to explore
                the park
                digitally and plan their adventures in real-time. In <strong>2020</strong>, DEFUNCTLAND became one of
                the first
                parks to integrate <strong>AI-driven attractions</strong>, offering personalized experiences for every
                guest.
            </p>
            <p>
                The park continues to innovate, combining its rich history with a forward-thinking approach. From
                seasonal
                festivals to new attractions, there’s always something exciting happening at DEFUNCTLAND.
            </p>
        </section>

        <section class="content-section">
            <h3>Our Mission</h3>
            <p>
                At DEFUNCTLAND, we believe in the power of nostalgia and imagination. Our mission is to honor the past,
                celebrate
                the present, and inspire the future. Whether you're here to relive childhood memories, create new ones,
                or simply
                escape into a world of wonder, DEFUNCTLAND is a place where magic never fades.
            </p>
        </section>

        <section class="content-section">
            <h3>Visit Us</h3>
            <p>
                You’ll find DEFUNCTLAND just outside <span>[your major city]</span>, at the heart of adventure:
            </p>
            <address>
                <strong>123 Imagination Lane</strong><br />
                Nostalgia Hills, NY 12804, USA
            </address>
            <p>
                We’re only a short drive from downtown, with ample parking and easy access to public transportation.
            </p>
        </section>

        <section class="content-section">
            <h3>Join Our Story</h3>
            <p>
                Every visitor who steps through our gates becomes a part of the DEFUNCTLAND legacy. So come and explore,
                discover, and make memories that will last a lifetime.
            </p>
            <blockquote>"Where yesterday meets tomorrow, and dreams never end."</blockquote>
        </section>
    </div>
</template>

<style>
/* Importing Font */
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Roboto:wght@300;400;700&display=swap');

/* General Reset */
body,
html {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #f9f9f9;
    color: #333;
    line-height: 1.7;
}

/* Container */
.about-container {
    max-width: 900px;
    margin: 40px auto;
    padding: 20px;
    background: #ffffff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    animation: fadeIn 1.5s ease-in-out;
}

/* Header Section */
header {
    text-align: center;
    margin-bottom: 30px;
}

h1 {
    font-family: 'Lilita One', cursive;
    color: #2c3e50;
    font-size: 2.5em;
}

.story-title {
    font-size: 2em;
    color: #34495e;
    margin-top: 10px;
}

.intro-text {
    font-size: 1.2em;
    text-align: center;
    margin-bottom: 20px;
}

/* Content Sections */
.content-section {
    margin: 30px 0;
}

h3 {
    font-size: 1.8em;
    color: #2c3e50;
    border-bottom: 2px solid #3498db;
    padding-bottom: 8px;
    margin-bottom: 15px;
}

p {
    margin: 15px 0;
}

strong {
    color: #34495e;
}

em {
    color: #7f8c8d;
}

/* Address Styling */
address {
    font-style: normal;
    margin-top: 10px;
    line-height: 1.5;
    color: #555;
}

/* Blockquote */
blockquote {
    font-style: italic;
    color: #2980b9;
    margin: 20px 0;
    padding-left: 15px;
    border-left: 4px solid #3498db;
}

/* Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive Design */
@media (max-width: 768px) {
    h1 {
        font-size: 2em;
    }

    .story-title {
        font-size: 1.5em;
    }

    h3 {
        font-size: 1.5em;
    }

    .about-container {
        padding: 15px;
    }
}
</style>