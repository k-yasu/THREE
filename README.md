**THREE.js**

three.jsで描画するために必要な概念

* レンダラー
* シーン

## レンダラー
仮想的な3次元空間における物体を2次元平面のディスプレイに描画することをレンダリングと呼ぶ。  
three.jsには「Canvas 2D Context」と「WebGL Context」によるレンダラーが用意されている。


1 レンダラーオブジェクトを作成  
 主なクラス  
  new THREE.WebGLRenderer();  
  new THREE.CanvasRenderer();  

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
