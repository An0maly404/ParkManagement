<template>
    <h1 class="attractionstype">ATTRACTIONS BY DIFFICULTY</h1>
    <div v-for="(group,level) in groupedAttractions" :key="level">
        <h2 class="difficulty-header">{{ level }}</h2>
        <div class="attractions">
            <div v-for="(attraction,index) in group" :key="index" class="attraction-card">
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
                    <img v-for="(image,index) in selectedAttraction.additionalImages" 
                    :key="index" 
                    :src="image" />
                </div>
                <button @click="closeDetails">Close</button>
            </div>
        </div>
    </div>
</template>    


<script>
export default{
    data(){
        return{
            selectedAttraction:null,
            attractions: [
                {
                    name:'SON OF BEAST',
                    image: require('@/assets/SONOFBEAST1.jpg'),
                    description:'Son of Beast was a record-breaking wooden roller coaster, notable for being the first of its kind to include a vertical loop. Known for its intense speed and rough ride, it closed in 2012 due to safety concerns and high maintenance costs.',
                    additionalImages:[require('@/assets/SONOFBEAST2.jpg'),require('@/assets/SONOFBEAST3.jpg')],
                    difficulty:'hard',
                },
                {
                    name:'THE BIG DIPPER',
                    image: require('@/assets/BIGDIPPER1.jpg'),
                    description:'This iconic wooden roller coaster thrilled guests with its classic out-and-back design. Operating for over 80 years, it was a centerpiece of the park until Geauga Lake’s closure in 2007.',
                    additionalImages:[require('@/assets/BIGDIPPER2.jpg'),require('@/assets/BIGDIPPER3.jpg')],
                    difficulty:'hard',
                },
                {
                    name:'JOURNEY TO ATLANTIS',
                    image: require('@/assets/JOURNEYTOATLANTIS1.jpg'),
                    description:' A hybrid water ride and coaster, Journey to Atlantis offered a mix of thrilling drops and gentle splashes. It combined storytelling and aquatic elements, making it a fan favorite before its closure.',
                    additionalImages:[require('@/assets/JOURNEYTOATLANTIS2.jpg'),require('@/assets/JOURNEYTOATLANTIS3.jpg')],
                    difficulty:'medium',
                },
                {
                    name:'TIDAL WAVE',
                    image: require('@/assets/TIDALWAVE1.jpg'),
                    description:'This shoot-the-chute water ride gave riders a dramatic drop into a giant wave, soaking both passengers and onlookers. It closed in 2017 to make room for new developments.',
                    additionalImages:[require('@/assets/TIDALWAVE2.jpg'),require('@/assets/TIDALWAVE3.jpg')],
                    difficulty:'medium',
                },
                {
                    name:'DISASTER TRANSPORT',
                    image: require('@/assets/DISASTERTRANSPORT1.jpg'),
                    description:'Disaster Transport was an indoor roller coaster themed as a futuristic transport gone awry. Its mix of mild thrills and dark ride elements made it a unique experience before its demolition in 2012.',
                    additionalImages:[require('@/assets/DISASTERTRANSPORT2.jpg'),require('@/assets/DISASTERTRANSPORT3.jpg')],
                    difficulty:'medium',
                },
                {
                    name:'SKYRIDE',
                    image: require('@/assets/SKYRIDE1.jpg'),
                    description:'A classic cable car attraction that offered scenic views of the park from above. It was a relaxing and nostalgic ride before its closure to accommodate newer attractions.',
                    additionalImages:[require('@/assets/SKYRIDE2.jpg'),require('@/assets/SKYRIDE3.jpg')],
                    difficulty:'easy',
                },
                {
                    name:'ASTROWHEEL',
                    image: require('@/assets/ASTROWHEEL1.jpg'),
                    description:'A Ferris wheel providing gentle thrills and panoramic views, it was a staple of AstroWorld until the park shut down in 2005.',
                    additionalImages:[require('@/assets/ASTROWHEEL2.jpg'),require('@/assets/ASTROWHEEL3.jpg')],
                    difficulty:'easy',
                },
                {
                    name:'SUBMARINE VOYAGE',
                    image: require('@/assets/SUBMARINEVOYAGE1.jpg'),
                    description:'This underwater adventure immersed guests in a simulated deep-sea journey. The attraction was beloved for its creativity but closed in 1998 to make way for modern rides.',
                    additionalImages:[require('@/assets/SUBMARINEVOYAGE2.jpg'),require('@/assets/SUBMARINEVOYAGE3.jpg')],
                    difficulty:'easy',
                },
            ]
        };  
    },
    computed:{
        groupedAttractions(){
            return this.attractions.reduce((groups, attraction)=>{
                const level=attraction.difficulty;
                if (!groups[level]){
                    groups[level]=[];
                }
                groups[level].push(attraction);
                return groups;
            },{});
        },
    },
    mounted(){
        this.applyBackgroundColors();
    },
    methods:{
        applyBackgroundColors(){
            const cards = document.querySelectorAll('.attraction-card');
            cards.forEach((card,index)=>{
                const difficulty=this.attractions[index].difficulty;
                if (difficulty==='easy'){
                    card.style.backgroundColor='#d4edda';
                } else if(difficulty==='medium'){
                    card.style.backgroundColor='#fff3cd';
                } else if(difficulty==='hard'){
                    card.style.backgroundColor='#f8d7da';
                } else{
                    card.style.backgroundColor='#ddd';
                }
            });
        },
        selectAttraction(attraction){
            this.selectedAttraction=attraction;
        },
        closeDetails(){
            this.selectedAttraction=null;
        },
    },
};

</script>


<style scoped>
.difficulty-header{
    color: rgba(0, 0, 0, 0.363);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-transform: uppercase;
}
.attractionstype{
    color: #545ddd;
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.attractions{
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
}

.attraction-card{
    margin: 15px;
    text-align: center;
    position: relative;
    padding: 5px;
    background-color:rgba(221, 221, 221, 0.521);
    border-radius: 3%;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #00000080;
}


.attraction-image{
    border-radius: 5%;
    width: 300px;
    height: 250px;
    object-fit: cover;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
}

.attraction-card:hover .attraction-image{
    transform: scale(1.05);
}



.attraction-details{
    margin-top: 110px;
    background:white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    position: fixed;
    top:10%;
    left: 50%;
    transform: translateX(-50%);
    max-width: 100%;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 1.5rem;
}

.attraction-details button{
    background-color: #2646d7;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
}

.attraction-details button:hover{
    background-color: #d4b920;
}

.additional-images img{
    border-radius: 2%;
    margin: 2px;
    width:350px;
    height:250px;
    object-fit:cover;
}
</style>