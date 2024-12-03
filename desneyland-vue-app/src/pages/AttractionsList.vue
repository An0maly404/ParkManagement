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
                    name:'TOUTATIS',
                    image: require('@/assets/TOUTATIS1.jpg'),
                    description:'TOUTATIS l attraction phare du parc asterix',
                    additionalImages:[require('@/assets/TOUTATIS2.jpg'),require('@/assets/TOUTATIS3.jpg')],
                    difficulty:'hard',
                },
                {
                    name:'OZIRIS',
                    image: require('@/assets/OZIRIS1.jpg'),
                    description:'OZIRIS, the most impressive attraction in the park',
                    additionalImages:[require('@/assets/OZIRIS2.jpg'),require('@/assets/OZIRIS3.jpg')],
                    difficulty:'hard',
                },
                {
                    name:'OBLIVION',
                    image: require('@/assets/OBLIVION1.jpg'),
                    description:'OBLIVION, a jump in the void',
                    additionalImages:[require('@/assets/OBLIVION2.jpg'),require('@/assets/OBLIVION3.jpg')],
                    difficulty:'hard',
                },
                {
                    name:'NEMESIS',
                    image: require('@/assets/NEMESIS1.jpg'),
                    description:'Your head will spin, spin and spin arround and arround',
                    additionalImages:[require('@/assets/NEMESIS2.jpg'),require('@/assets/NEMESIS3.jpg')],
                    difficulty:'hard',
                },
                {
                    name:'OBLIVION',
                    image: require('@/assets/OBLIVION1.jpg'),
                    description:'OBLIVION, a jump in the void',
                    additionalImages:[require('@/assets/OBLIVION2.jpg'),require('@/assets/OBLIVION3.jpg')],
                    difficulty:'medium',
                },
                {
                    name:'NEMESIS',
                    image: require('@/assets/NEMESIS1.jpg'),
                    description:'Your head will spin, spin and spin arround and arround',
                    additionalImages:[require('@/assets/NEMESIS2.jpg'),require('@/assets/NEMESIS3.jpg')],
                    difficulty:'medium',
                },
                {
                    name:'TOUTATIS',
                    image: require('@/assets/TOUTATIS1.jpg'),
                    description:'TOUTATIS l attraction phare du parc asterix',
                    additionalImages:[require('@/assets/TOUTATIS2.jpg'),require('@/assets/TOUTATIS3.jpg')],
                    difficulty:'easy',
                },
                {
                    name:'OZIRIS',
                    image: require('@/assets/OZIRIS1.jpg'),
                    description:'OZIRIS, the most impressive attraction in the park',
                    additionalImages:[require('@/assets/OZIRIS2.jpg'),require('@/assets/OZIRIS3.jpg')],
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
    margin-top: 200px;
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