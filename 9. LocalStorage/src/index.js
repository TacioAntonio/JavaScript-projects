(() => {
    const $ = element => document.querySelector(element);
    const form = $('form');
    const list = $('ul');
    const items = JSON.parse(localStorage.getItem('items')) || [];

    list.innerHTML = `<li class="loading">Loading...</li>`;

    function reloadPage () {
        list.innerHTML = items.length ? 
        items.map((item, i) => {
            return `<li>
                <input data-key=${i} type="checkbox" ${item.done ? 'checked' : ''} />
                ${item.value}
            </li>`;
        }).join('') 
        : `<li>Empty</li>`;
    }

    function toogleItem (e) {
        const el = e.target;
        const key = el.dataset.key;
        items[key].done = !items[key].done;
        localStorage.setItem('items', JSON.stringify(items));
        reloadPage();
    }

    function addItem (e) {
        e.preventDefault();

        const value = this.querySelector('input').value;

        const item = {
            value,
            done: false
        }

        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));

        reloadPage();
    }

    setTimeout(reloadPage, 2 * 1000);
    list.addEventListener('click', toogleItem);
    form.addEventListener('submit', addItem);
})()