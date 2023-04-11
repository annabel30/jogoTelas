document.addEventListener("DOMContentLoaded", function() {
    // let startTime = System.currentTimeMillis()
    const enemy = document.querySelectorAll(".enemy");
    // const friend = document.querySelector(".friend");

    if(localStorage.getItem("enemyQty") == null){
        localStorage.setItem("enemyQty", 0);
    }
    // if(localStorage.getItem("friendQty") == null){
    //     localStorage.setItem("friendQty", 0);;
    // }

    for (let i = 0; i < enemy.length; i++) {
        let x = Math.random() * 40;
        let y = Math.random() * 20;
        let z = Math.random() * 20;
        let a = Math.random() * 2;
        let b = Math.random() * 2;
        let c = Math.random() * 2;
        // if (x > x2 && (x + 10) < x2) {
        //     x2 += 10;
        // } else if (y > y2 && (y + 10) < y2) {
        //     y2 += 10;
        // } else if (z > z2 && (z + 10) < z2) {
        //     z2 += 10;
        // }
        // if (a) {
        //     x *= -1;
        // }
        // if (b) {
        //     y *= -1;
        // }
        // if (c) {
        //     z *= -1;
        // }
        enemy[i].setAttribute('position', {x: x, y: y, z: z});
        enemy[i].addEventListener('click', () => {
        let addValue = (parseInt(localStorage.getItem("enemyQty")) + 1);
        localStorage.setItem("enemyQty", addValue);
        alert(localStorage.getItem("enemyQty"))
        });
    }

    // startTime.addEventListener('time')

    // friend.addEventListener('click', () => {
    // });
});