document.getElementById('shiftForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const employeeName = document.getElementById('employeeName').value;
    const workDays = document.getElementById('workDays').value;
    const shifts = Array.from(document.querySelectorAll('input[name="shiftType"]:checked'))
                        .map(checkbox => checkbox.value);

    console.log("従業員名:", employeeName);
    console.log("希望シフト:", shifts);
    console.log("希望出勤日数:", workDays);

    // ここでデータをExcelに送信する処理を追加
});