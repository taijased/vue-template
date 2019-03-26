


    
            
  


   

const THREE = require('three')

let container;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 1, 1000 );
const TrackballControls = require('three-trackballcontrols')
const controls = new TrackballControls( camera );


let renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});

function setTrackballController() {
    /////////////////////////////////////////
    // Trackball Controller
    ///////////////////////////////////////
    controls.rotateSpeed = 5.0;
    controls.zoomSpeed = 3.2;
    controls.panSpeed = 0.8;
    controls.noZoom = false;
    controls.noPan = true;
    controls.staticMoving = false;
    controls.dynamicDampingFactor = 0.2;

   
}

function loadCollada(path) {
    /////////////////////////////////////////
    // Object Loader
    /////////////////////////////////////////

    var ColladaLoader = require('three-collada-loader');
    let loader = new ColladaLoader();

    loader.options.convertUpAxis = true;
    loader.load( path, collada => {
        let dae = collada.scene;
        dae.position.set(0.4, 0, 0.8);
        scene.add(dae);
        renderPhone();
    });

}

function windowResizing() {
    /////////////////////////////////////////
    // Window Resizing
    /////////////////////////////////////////

    window.addEventListener( 'resize', function () {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( container.innerWidth, container.innerHeight );
        controls.handleResize();
        renderPhone();
    }, false );
}

function setupUtilities() {
    var axisHelper = new THREE.AxisHelper( 3 );
    scene.add( axisHelper );

    var gridHelper = new THREE.GridHelper( 20, 20 );
    scene.add( gridHelper );
}

function renderPhone() {
    renderer.render( scene, camera );
}

function setCameraPosition(x, y, z) {
    camera.position.set(x, y, z);
    camera.lookAt( scene.position );
    renderer.render( scene, camera );
}

const WorkerWebGL = {
    setupScene (id) {

        /////////////////////////////////////////
        // Scene Setup
        /////////////////////////////////////////

        container = document.getElementById(id);
        camera.position.set(0, 2, 10);
        camera.lookAt( scene.position );

        renderer.setPixelRatio( window.devicePixelRatio );
        // renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.setSize( container.offsetWidth, window.innerHeight );
        container.appendChild( renderer.domElement );

        let stats = new Stats();
		container.appendChild( stats.dom );
        // setTrackballController();
        setupUtilities()
        windowResizing()
        /////////////////////////////////////////
        // Lighting
        /////////////////////////////////////////

        var iphone_color  = '#FAFAFA',
            ambientLight  = new THREE.AmbientLight( '#EEEEEE' ),
            hemiLight     = new THREE.HemisphereLight( iphone_color, iphone_color, 0 ),
            light         = new THREE.PointLight( iphone_color, 1, 100 );

        hemiLight.position.set( 0, 50, 0 );
        light.position.set( 0, 20, 10 );

     

        scene.add( ambientLight );
        scene.add( hemiLight );
        scene.add( light );


        /////////////////////////////////////////
        // Render Loop
        /////////////////////////////////////////


        // controls.addEventListener( 'change', renderPhone );

        // // Avoid constantly rendering the scene by only 
        // // updating the controls every requestAnimationFrame
        // function animationLoop() {
        //     requestAnimationFrame(animationLoop);
        //     controls.update();
        // }

        // animationLoop();

        loadCollada('https://s3-us-west-2.amazonaws.com/s.cdpn.io/392/iphone6.dae');
  }
}

export default WorkerWebGL

