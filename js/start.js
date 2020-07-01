let scene, camera, renderer, starGeo, stars;

function init() {

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 1;
    camera.rotation.x = Math.PI / 2;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    starGeo = new THREE.Geometry();
    for (let i = 0; i < 5000; i++) {
        let star = new THREE.Vector3(
            Math.random() * 600 - 300,
            Math.random() * 600 - 300,
            Math.random() * 600 - 300
        );
        star.velocity = 0;
        star.acceleration = 0.03;
        starGeo.vertices.push(star);
    }

    let starMaterial = new THREE.PointsMaterial({
        color: 0xeeeeeee,
        size: 0.7,
        map: new THREE.TextureLoader().load('image/star.png'),
        transparent: true

    });

    stars = new THREE.Points(starGeo, starMaterial);
    scene.add(stars);
    animate();
}

$(window).resize(function () {
    //使用者可見整個場景物件改變大小
    camera.aspect = window.innerWidth / window.innerHeight;
    //更新投影矩陣
    camera.updateProjectionMatrix();
    //呈現器改變介面大小
    renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
    starGeo.vertices.forEach(p => {
        p.velocity += p.acceleration
        p.y -= p.velocity;

        if (p.y < -200) {
            p.y = 200;
            p.velocity = 0;
        }
    });
    starGeo.verticesNeedUpdate = true;
    stars.rotation.y += 0.002;
    renderer.render(scene, camera);
    requestAnimationFrame(animate)
};
init();