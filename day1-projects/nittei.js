function getRandomDate(start, end) {
    // startとendの間のランダムな日付を生成
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    // 日付のフォーマットを調整（例: 2024/01/01）
    const formattedDate = date.getFullYear() + '/' + 
                          ('0' + (date.getMonth() + 1)).slice(-2) + '/' + 
                          ('0' + date.getDate()).slice(-2);
    return formattedDate;
}

// 関数を使ってHTMLに日付を表示
document.addEventListener('DOMContentLoaded', function() {
    // 日付の範囲を設定（例えば、2020年から2025年まで）
    const startDate = new Date(2020, 0, 1); // 2020年1月1日
    const endDate = new Date(2025, 11, 31); // 2025年12月31日

    // HTML内の特定の要素（ここではidが'result'の要素）に日付を表示
    document.getElementById('result').textContent = getRandomDate(startDate, endDate);
});
