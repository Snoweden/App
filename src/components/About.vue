<template>
    <section>
        <h2>About the Developers</h2>
            <div class="profiles">
                <div>
                    <span>Shaba</span>
                    <img src="../assets/shaba.png" id="shaba" alt="image of shaba">
                </div>
                <div>
                    <span>Connor</span>
                    <img src="../assets/connor.png" id="shaba" alt="image of connor">
                </div>
                <div>
                    <span>Lance</span>
                    <img src="../assets/lance.png" id="shaba" alt="image of lance">
                </div>
                <div>
                    <span>Chris</span>
                    <img src="../assets/chris.png" id="shaba" alt="image of chris">
                </div>   
            </div> 
    </section>

</template>

<script>
export default {

};
</script>

<style>
section {
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
}
h2 {
    text-align: center;
    font-size: 3em;
    color: white;
}
.profiles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
.profiles div {
    margin: 10px;
    padding: 5px;
}
img {
    /* border-radius: 45%; */
    width: 100%;
}
span {
    text-align: center;
    text-emphasis: bold;
    color: white;
    display: block;
    width: 100%;
}
</style>