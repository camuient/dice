document.getElementById('roll-button').addEventListener('click', function() {
    var dice = document.getElementById('dice');
    // サイコロを回転させる初期設定
    dice.style.transition = 'transform 3s ease-out';

    // 3秒後にサイコロが特定の面で停止するようにする
    setTimeout(function() {
        // サイコロの各面が上を向く回転角度の例
        var rotations = [
            'rotateX(0deg) rotateY(0deg)', // 1の面が上
            'rotateX(180deg) rotateY(0deg)', // 6の面が上
            'rotateX(90deg) rotateY(0deg)', // 2の面が上
            'rotateX(-90deg) rotateY(0deg)', // 5の面が上
            'rotateX(0deg) rotateY(90deg)', // 3の面が上
            'rotateX(0deg) rotateY(-90deg)' // 4の面が上
        ];

        // ランダムに選ばれた回転角度でサイコロを停止
        var randomRotation = rotations[Math.floor(Math.random() * rotations.length)];
        dice.style.transition = 'transform 0.5s ease-out'; // 停止時の滑らかな遷移
        dice.style.transform = randomRotation;
    }, 3000); // 3秒後に実行
});
