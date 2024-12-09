<template>
    <div class="attractions-container">
        <header>
            <h1 class="attractionstype">ATTRACTIONS BY DIFFICULTY</h1>
        </header>

        <div v-for="(group, level) in groupedAttractions" :key="level">
            <h2 class="difficulty-header">{{ level }}</h2>
            <div class="attractions">
                <div 
                    v-for="(attraction, index) in group" 
                    :key="index" 
                    class="attraction-card"
                    :style="getCardStyle(attraction.difficulty)"
                >
                    <img 
                        :src="attraction.image" 
                        :alt="attraction.name"
                        @click="selectAttraction(attraction)"
                        class="attraction-image"
                    />
                    <h3>{{ attraction.name }}</h3>
                </div>

                <div v-if="selectedAttraction" class="attraction-details">
                    <h2>{{ selectedAttraction.name }}</h2>
                    <p>{{ selectedAttraction.description }}</p>
                    <div class="additional-images">
                        <img v-for="(image, index) in selectedAttraction.additionalImages" 
                        :key="index" 
                        :src="image" />
                    </div>
                    <button @click="closeDetails">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedAttraction: null,
            attractions: [
                {
                    name: 'SON OF BEAST',
                    image: require('@/assets/SONOFBEAST1.jpg'),
                    description: 'Son of Beast was a record-breaking wooden roller coaster, notable for being the first of its kind to include a vertical loop...',
                    additionalImages: [require('@/assets/SONOFBEAST2.jpg'), require('@/assets/SONOFBEAST3.jpg')],
                    difficulty: 'hard',
                },
                {
                    name: 'THE BIG DIPPER',
                    image: require('@/assets/BIGDIPPER1.jpg'),
                    description: 'This iconic wooden roller coaster thrilled guests with its classic out-and-back design...',
                    additionalImages: [require('@/assets/BIGDIPPER2.jpg'), require('@/assets/BIGDIPPER3.jpg')],
                    difficulty: 'hard',
                },
                {
                    name: 'JOURNEY TO ATLANTIS',
                    image: require('@/assets/JOURNEYTOATLANTIS1.jpg'),
                    description: 'A hybrid water ride and coaster, Journey to Atlantis offered a mix of thrilling drops and gentle splashes...',
                    additionalImages: [require('@/assets/JOURNEYTOATLANTIS2.jpg'), require('@/assets/JOURNEYTOATLANTIS3.jpg')],
                    difficulty: 'medium',
                },
                {
                    name: 'TIDAL WAVE',
                    image: require('@/assets/TIDALWAVE1.jpg'),
                    description: 'This shoot-the-chute water ride gave riders a dramatic drop into a giant wave...',
                    additionalImages: [require('@/assets/TIDALWAVE2.jpg'), require('@/assets/TIDALWAVE3.jpg')],
                    difficulty: 'medium',
                },
                {
                    name: 'DISASTER TRANSPORT',
                    image: require('@/assets/DISASTERTRANSPORT1.jpg'),
                    description: 'Disaster Transport was an indoor roller coaster themed as a futuristic transport gone awry...',
                    additionalImages: [require('@/assets/DISASTERTRANSPORT2.jpg'), require('@/assets/DISASTERTRANSPORT3.jpg')],
                    difficulty: 'medium',
                },
                {
                    name: 'SKYRIDE',
                    image: require('@/assets/SKYRIDE1.jpg'),
                    description: 'A classic cable car attraction that offered scenic views of the park from above...',
                    additionalImages: [require('@/assets/SKYRIDE2.jpg'), require('@/assets/SKYRIDE3.jpg')],
                    difficulty: 'easy',
                },
                {
                    name: 'ASTROWHEEL',
                    image: require('@/assets/ASTROWHEEL1.jpg'),
                    description: 'A Ferris wheel providing gentle thrills and panoramic views...',
                    additionalImages: [require('@/assets/ASTROWHEEL2.jpg'), require('@/assets/ASTROWHEEL3.jpg')],
                    difficulty: 'easy',
                },
                {
                    name: 'SUBMARINE VOYAGE',
                    image: require('@/assets/SUBMARINEVOYAGE1.jpg'),
                    description: 'This underwater adventure immersed guests in a simulated deep-sea journey...',
                    additionalImages: [require('@/assets/SUBMARINEVOYAGE2.jpg'), require('@/assets/SUBMARINEVOYAGE3.jpg')],
                    difficulty: 'easy',
                },
            ]
        };
    },
    computed: {
        groupedAttractions() {
            return this.attractions.reduce((groups, attraction) => {
                const level = attraction.difficulty;
                if (!groups[level]) {
                    groups[level] = [];
                }
                groups[level].push(attraction);
                return groups;
            }, {});
        },
    },
    methods: {
        selectAttraction(attraction) {
            this.selectedAttraction = attraction;
        },
        closeDetails() {
            this.selectedAttraction = null;
        },
        getCardStyle(difficulty) {
            if (difficulty === 'hard') {
                return { backgroundColor: '#f8d7da' };  // Red for hard
            } else if (difficulty === 'medium') {
                return { backgroundColor: '#fff3cd' };  // Orange for medium
            } else if (difficulty === 'easy') {
                return { backgroundColor: '#d4edda' };  // Green for easy
            }
            return {};
        },
    },
};
</script>

<style scoped>
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
.attractions-container {
    max-width: 1200px;
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

.attractionstype {
    font-family: 'Lilita One', cursive;
    color: #2c3e50;
    font-size: 2.5em;
}

/* Difficulty Header */
.difficulty-header {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-transform: uppercase;
    font-size: 1.8em;
    color: #3498db;
    border-bottom: 2px solid #3498db;
    padding-bottom: 8px;
    margin-bottom: 15px;
}

/* Attractions Section */
.attractions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.attraction-card {
    margin: 15px;
    text-align: center;
    position: relative;
    padding: 5px;
    background-color: rgba(221, 221, 221, 0.521);
    border-radius: 3%;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #00000080;
    transition: background-color 0.3s ease;
    cursor: pointer;
}

.attraction-image {
    border-radius: 5%;
    width: 300px;
    height: 250px;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
}

.attraction-card:hover .attraction-image {
    transform: scale(1.05);
}

.attraction-details {
    margin-top: 110px;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    max-width: 100%;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 1.5rem;
}

.attraction-details button {
    background-color: #2646d7;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
}

.attraction-details button:hover {
    background-color: #d4b920;
}

.additional-images img {
    border-radius: 2%;
    margin: 2px;
    width: 350px;
    height: 250px;
    object-fit: cover;
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
</style>
