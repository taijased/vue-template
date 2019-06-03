

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
    // controls.zoomSpeed = 3.2;
    controls.panSpeed = 0.8;
    controls.noZoom = true;
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

        setTrackballController();
        setupUtilities()

        windowResizing()
        /////////////////////////////////////////
        // Lighting
        /////////////////////////////////////////

        var iphone_color  = '#FAFAFA',
            ambientLight  = new THREE.AmbientLight( 'red' ),
            hemiLight     = new THREE.HemisphereLight( iphone_color, iphone_color, 0 ),
            light         = new THREE.PointLight( iphone_color, 1, 100 );

        hemiLight.position.set( 0, 50, 0 );
        light.position.set( 0, 20, 10 );

        scene.add( ambientLight );
        scene.add( hemiLight );
        scene.add( light );

        // loadCollada('https://ari.arq.su/models/174533c2-3cea-4a61-8b29-b85a8f7d605b/Sofa1.DAE');
        loadCollada('https://s3-us-west-2.amazonaws.com/s.cdpn.io/392/iphone6.dae');
    },
    setResize(size) {
        camera.position.set(100 - size, 100 - size, 100 - size);
        camera.lookAt( scene.position );
        renderer.render( scene, camera );
    },
    setCameraPosition(payload) {
        function animationLoop() {
            requestAnimationFrame(animationLoop);
            controls.update();
        }
        switch(payload) {
            //left
            case 1: 
                camera.position.set(10, 0, 0);
                controls.removeEventListener( 'change', renderPhone );
                break;
            // right
            case 2: 
                camera.position.set(0, 0, 10);
                controls.removeEventListener( 'change', renderPhone );
                break;
            // top
            case 3: 
                camera.position.set(0, 10, 0);    
                controls.removeEventListener( 'change', renderPhone );
                break;
            // free
            case 4: 
                camera.position.set(0, 2, 10);  
                controls.addEventListener( 'change', renderPhone );
                animationLoop(); 
                break;
            default: break
        }
        camera.lookAt( scene.position );
        renderer.render( scene, camera );
    }
}

export default WorkerWebGL

