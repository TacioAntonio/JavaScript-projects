class ClickCounter {
     count = 0;

    registerClick = () => {
        this.count++;
        alert(this.count);
    }
}
var clickCounter = new ClickCounter();
document.getElementById('target').addEventListener('click', clickCounter.registerClick)

console.log('TS')