(function () {
    // シーンを生成
    var scene = new THREE.Scene();

    // カメラを生成
    var fov    = 75;
    var aspect = window.innerWidth / window.innerHeight;
    var zNear  = 1;
    var zFar   = 3000;
    var camera = new THREE.PerspectiveCamera(fov, aspect, zNear, zFar);
    camera.position.y = 100;
    camera.position.z = 150;
    camera.lookAt({
        x: 0,
        y: 0,
        z: 0
    });

    // ライトを生成
    var light = new THREE.DirectionalLight(0xffffff);
    light.position.set(10, 100, 10);
    light.castShadow = true;

    // 地面を生成
    var planeGeometry = new THREE.PlaneBufferGeometry(1000, 1000, 1000);
    var planeMaterial = new THREE.MeshLambertMaterial({
        color: 0xdddddd
    });
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);

    plane.position.y = -100;
    plane.rotation.x = -Math.PI / 2;
    plane.receiveShadow = true;

    // キューブを生成
    // キューブの色
    var cubeColor = new THREE.Color(0x3333aa);
    var boxGeometry = new THREE.BoxGeometry(50, 50, 50);
    var boxMaterial = new THREE.MeshLambertMaterial({
        color: cubeColor
    });

    var cube = new THREE.Mesh(boxGeometry, boxMaterial);
    cube.castShadow = true;

    scene.add(plane);
    scene.add(cube);
    scene.add(light);

    // レンダラーを生成
    var renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });
    
    renderer.setClearColor(0x000000, 0.0);

    renderer.setSize(window.innerWidth, window.innerHeight);

    // レンダラーの影レンダリングを有効化
    renderer.shadowMapEnabled = true;

    document.body.appendChild(renderer.domElement);

    (function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.005;

        render();
    }());

    function render() {
        renderer.render(scene, camera);
    }

}());
