document.getElementById('roll-button').addEventListener('click', function() {
    var dice = document.getElementById('dice');

    // X軸で5回以上回転させるための角度を計算（1800度は5回転）
    var xRotation = 1800 + getRandomInt(0, 5) * 90; // X軸の追加回転を加える

    // Y軸は常に同じ角度（0度、90度、180度、270度）のいずれかで停止させ、サイコロが正面を向くようにする
    var yRotation = getRandomInt(0, 3) * 90; // Y軸の回転を設定

    dice.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
});

// 最小値と最大値の間でランダムな整数を取得する関数
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
