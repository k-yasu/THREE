**THREE.js**

three.jsで描画するために必要な概念

* レンダラー
* シーン
* カメラ
* オブジェクト
* ライト



## レンダラー
仮想的な3次元空間における物体を2次元平面のディスプレイに描画することをレンダリングと呼ぶ。  
three.jsには「Canvas 2D Context」と「WebGL Context」によるレンダラーが用意されている。

1 レンダラーオブジェクトを作成  
主なクラス  
THREE.WebGLRenderer();
THREE.CanvasRenderer();

2 自動生成されるcanvas要素の横幅、縦幅を設定  
主なメソッド  
setSize(横幅, 縦幅)

3 クリアカラー（背景色とアルファ値）の設定  
主なメソッド  
setClearColor(背景色, アルファ値);



## シーン
WebGLにおける仮想3次元空間そのものを指す。  
シーンオブジェクトに追加したオブジェクトのみが、空間内に配置され実際の描画対象になる。

1 シーンオブジェクトを作成  
主なクラス  
new THREE.Scene();



##カメラ
仮想の3次元空間からどのように2次元平面に射影するかを指定するのがカメラ。

### 透視投影
視点から手前の物体を大きく、遠くの物体を小さく描画する遠近感を生み出す方式。  
通常生活の物の見方と同じ。

### 正投影
物体の見た目の大きさかが視点かの距離によらず描画する方式。

1 カメラオブジェクトを作成  
主なクラス  
透視投影カメラオブジェクト  
THREE.PerspectiveCamera(視野角(fov), アスペクト(幅 / 高さ), カメラから視体積の手前までの距離(near), カメラから視体積の奥までの距離(far));

正投影カメラオブジェクト  
THREE.OrthographicCamera(カメラ中心座標から左側の長さ(left), カメラ中心座標から右側の長さ(right), カメラ中心座標から上側の長さ(top), カメラ中心座標から下側の長さ(bottom), カメラから視体積の手前までの距離(near), カメラから視体積の奥までの距離(far));

2 カメラの位置座標(x, y, z)  
プロパティ  
position.x  
position.y  
position.z  

Vector3クラスのコンストラクタを利用して指定もできる  
new THREE.Vector3(x, y, x)  

2 カメラの視野の中心座標(x, y, z)  
メソッド  
lookAt({x: value, y: value, z: value});

3 カメラ上のベクトル(x, y, z)  
プロパティ  
up.x  
up.y  
up.z  

Vector3クラスのコンストラクタを利用して指定もできる  
new THREE.Vector3(x, y, x)  

4 カメラの性質を示すパラメータ  



##立体オブジェクトの描画
3次元オブジェクトを描画する際に必要な情報は、ポリゴンと呼ばれる三角形の集合で表現される**形状**と、表面の色合いを表す**材質**
形状オブジェクトと材質オブジェクトを組み合わせて3次元オブジェクトを生成する。

###形状オブジェクト(Geometry)  
立方体、球、円柱、平面、円錐等様々な形状オブジェクトが用意されている。  

###材質オブジェクト(Material)  
オブジェクトの表面の色合いを表す材質は、用途において各種用意されている。  
発行材質、ランバート材質、フォン反射材質、法線材質等。  

1 形状オブジェクトを作成(立方体)  
主なクラス  
THREE.BoxGeometry(width, height, depth);  

2 材質オブジェクト作成(法線材質)  
主なクラス  
THREE.MeshNormalMaterial(parameters);  

3 形状オブジェクトと材質オブジェクトから立体オブジェクトを作成  
主なクラス  
THREE.Mesh({形状オブジェクト, 材質オブジェクト});  

4 立体オブジェクトをシーンに追加  
シーンオブジェクトのメソッドadd()の引数に立体オブジェクトを与える



##描画
レンダラーオブジェクトのレンダリングを実行するメソッドrenderer()の引数にシーンオブジェクトとカメラオブジェクトを与えて実行する。


##平行光源
無限の彼方にある点光源から照射される光を生成する光源。  
平行光源を特徴づけるパラメータ  

1 光源の光源色(r, g, b)  
2 光源の光強度(intensity)  
3 光源の位置座標(x, y, z)  
4 光源の中心とするオブジェクト(target)  

1、2は平行光オブジェクトを作成するDirectionalLightクラスのコンストラクタで指定。    
3、4はプロパティで指定する。  

###光源設定
1 平行光源の設定  
主なクラス  
THREE.DirectionalLight(光源色, 光強度);

2 平行光源のベクトル設定  
プロパティ  
position.set(x, y, z);

3 光源をシーンに追加  
シーンオブジェクトのメソッドadd()の引数に平行光源オブジェクトを与える




