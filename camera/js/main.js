(function () {
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

    // シーンを生成
    var scene = new THREE.Scene();
}());
