const app = document.getElementById('typewriter');

const typewriter = new typewriter( app,{
    loop: true,
    delay:75
});

typewriter
.typeString( 'La perla del Oeste')
.pauseFor(200)
.start();