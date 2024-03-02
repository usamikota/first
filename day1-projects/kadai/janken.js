if (playerSelect == comSelect) {
    result = 2;
} else {
    // 違うので条件によって勝敗を振り分ける
    if (playerSelect == 0) {
        // プレイヤーはグー
        if (comSelect == 1) {
            // コンピューターはチョキ
            result = 1;
        } else {
            // コンピューターはパー
            result = 0;
        }
    } else if (playerSelect == 1) {
        // プレイヤーはチョキ
        if (comSelect == 0) {
            // コンピューターはグー
            result = 0;
        } else {
            // コンピューターはパー
            result = 1;
        }
    } else {
        // プレイヤーはパー
        if (comSelect == 0) {
            // コンピューターはグー
            result = 1;
        } else {
            // コンピューターはチョキ
            result = 0;
        }
    }
}
console.log(result);

if (playerSelect == 0) {
    playerSelectHand = 'グー';
} else if (playerSelect == 1) {
    playerSelectHand = 'チョキ';
} else 

{
    playerSelectHand = 'パー';
}

if (comSelect == 0) {
    comSelectHand = 'グー';
} else if (comSelect == 1) {
    comSelectHand = 'チョキ';
} else {
    comSelectHand = 'パー';
}

if (result == 0) {
    resultString = '負け';
} else if (result == 1) {
    resultString = '勝ち';
} else {
    resultString = 'あいこ';
}

document.getElementById('player').innerHTML = 'あなたは ' + playerSelectHand;
document.getElementById('computer').innerHTML =
    'コンピューターは ' + comSelectHand;
document.getElementById('resultMsg').innerHTML = '結果は ' + resultString;


