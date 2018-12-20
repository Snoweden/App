<template>
    <section id="about">
        <h2 id="aboutdev"><u>About the Developers</u></h2>
            <div class="profiles">
                <div>
                    <span id="shaba">Shaba</span>
                    <img src="../assets/shaba.png" alt="image of shaba">
                    <p>THE FEARLESS</p>
                </div>
                <div>
                    <span id="connor">Connor</span>
                    <img src="../assets/connor.png" alt="image of connor">
                    <p>THE ADVENTURER</p>
                </div>
                <div>
                    <span id="lance">Lance</span>
                    <img src="../assets/lance.png" alt="image of lance">
                    <p>THE STRONG</p>
                </div>
                <div>
                    <span id="chris">Chris</span>
                    <img src="../assets/chris.png" alt="image of chris">
                    <p>THE BRAVE</p>
                </div>   
            </div> 
    </section>
</template>

<style>
#about {
    max-width: 100%;
    max-height: 100%;
    background-repeat: no-repeat;
}
#aboutdev {
    text-align: center;
    font-size: 3em;
    color: white;
    border: none;
    
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
    max-width: 100%;
}
#shaba {
    text-align: center;
    font-weight: bold;
    color: white;
    display: inline-block;
    border-top: 2px solid white;
    border-left: 2px solid white;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
    margin-bottom: 10px;
    font-size: 25px;
}
#connor {
    text-align: center;
    font-weight: bold;
    color: white;
    display: inline-block;
    border-top: 2px solid white;
    border-left: 2px solid white;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
    margin-bottom: 10px;
    font-size: 25px;
}
#lance {
    text-align: center;
    font-weight: bold;
    color: white;
    display: inline-block;
    border-top: 2px solid white;
    border-left: 2px solid white;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
    margin-bottom: 10px;
    font-size: 25px;
}
#chris {
    text-align: center;
    font-weight: bold;
    color: white;
    display: inline-block;
    border-top: 2px solid white;
    border-left: 2px solid white;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
    margin-bottom: 10px;
    font-size: 25px;
}

p {
    max-width: 100%;
    color: white;
}
</style>