document.getElementById('btn').addEventListener('click', append);

    let count = 0;
    function append(){
        let a = localStorage.getItem("clicknum");
        a++;
        document.getElementById('demo').innerHTML = `The button has been clicked ${a} times already`;
        localStorage.setItem("clicknum", a);

    }