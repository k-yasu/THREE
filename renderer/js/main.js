(function () {
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
