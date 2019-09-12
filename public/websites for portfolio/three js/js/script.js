// Scene en rendering initialiseren
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// pacman
var geometry = new THREE.SphereGeometry( 1.25, 19, 9 );
var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var pacman = new THREE.Mesh( geometry, material );
scene.add( pacman );

// pac man position
pacman.position.x = 2;
pacman.position.y = 1;
pacman.position.z = -15;

// pacman mouth
var geometry = new THREE.ConeGeometry( 1, 1, 3 );
var material = new THREE.MeshBasicMaterial( {color: 0x000000} );
var mouth = new THREE.Mesh( geometry, material );
scene.add( mouth );

// pac man mouth
mouth.position.x = 1.2;
mouth.position.y = 1;
mouth.position.z = -14;
mouth.rotation.z += 4.6;

// function for cubes
function makeCube( color ) {

	var geometry = new THREE.BoxGeometry( 0.5, 0.5, 0.5 ); //B,D,H
	var material = new THREE.MeshBasicMaterial( { color: color } );

	return cube = new THREE.Mesh( geometry, material );
}

// make white cubes
var cWhite1 = makeCube( 0xFFFFFF );
var cWhite2 = makeCube( 0xFFFFFF );
var cWhite3 = makeCube( 0xFFFFFF );

// add white cubes to scene
scene.add( cWhite1 );
scene.add( cWhite2 );
scene.add ( cWhite3 );

// position white cubes
cWhite1.position.x = -2.5;
cWhite1.position.y = 1;
cWhite1.position.z = -15;

cWhite2.position.x = -1.5;
cWhite2.position.y = 1;
cWhite2.position.z = -15;

cWhite3.position.x = -0.5;
cWhite3.position.y = 1;
cWhite3.position.z = -15;

// spooky
var geometry = new THREE.SphereGeometry( 1, 19, 9 );
var material = new THREE.MeshBasicMaterial( {color: 0xff0000} );
var spooky = new THREE.Mesh( geometry, material );
scene.add( spooky );

var geometry = new THREE.TorusGeometry( 0.5, 0.5, 10, 50 );
var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
var body = new THREE.Mesh( geometry, material );
scene.add( body );

// spooky position
spooky.position.x = -5;
spooky.position.y = 1;
spooky.position.z = -15;

body.position.x = -5;
body.position.y = 0.7;
body.position.z = -15;
body.rotation.x = 1.5;

// spooky eyes
function makeSphere( color, size ) {

	var geometry = new THREE.SphereGeometry( size, size, size ); //B,D,H
	var material = new THREE.MeshBasicMaterial( { color: color } );

	return sphere = new THREE.Mesh( geometry, material );
}
var eye1 = makeSphere( 0xffffff, 0.2 );
scene.add( eye1 );
var eye2 = makeSphere( 0xffffff, 0.2 );
scene.add( eye2 );

var pupil1 = makeSphere( 0x0000ff, 0.1 );
scene.add( pupil1 );
var pupil2 = makeSphere( 0x0000ff, 0.1 );
scene.add( pupil2 );

// position eyes
eye1.position.x = -4.8;
eye1.position.y = 1;
eye1.position.z = -13;

eye2.position.x = -4;
eye2.position.y = 1;
eye2.position.z = -13;

pupil1.position.x = -4.35;
pupil1.position.y = 0.85;
pupil1.position.z = -12;

pupil2.position.x = -3.6;
pupil2.position.y = 0.85;
pupil2.position.z = -12;

//spooky legs
function makeCone( color ) {

	var geometry = new THREE.ConeGeometry( 0.5, 1, 3 ); //B,D,H
	var material = new THREE.MeshBasicMaterial( { color: color } );

	return cone = new THREE.Mesh( geometry, material );
}

// make legs
var cone1 = makeCone( 0xff0000 );
scene.add( cone1 );
var cone2 = makeCone( 0xff0000 );
scene.add( cone2 );
var cone3 = makeCone( 0xff0000 );
scene.add( cone3 );

// position legs
cone1.position.x = -5.35;
cone1.position.y = 0.2;
cone1.position.z = -14;
cone1.rotation.x = 1.5;

cone2.position.x = -4.85;
cone2.position.y = 0.2;
cone2.position.z = -14;
cone2.rotation.x = 1.5;

cone3.position.x = -4.35;
cone3.position.y = 0.2;
cone3.position.z = -14;
cone3.rotation.x = 1.5;

// camera positie
camera.position.z = 10;


// animatie opstarten
function animate() {
	requestAnimationFrame( animate );

	// mouth animation
	mouth.rotation.x += 0.01;

	// camera animation
	if (camera.position.z > 0) {
  	camera.position.z -= 0.1;
	}

	// start render
	renderer.render( scene, camera );
}
animate();
