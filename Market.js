function Scroll(el, content) {
    $(window).scroll(function () {
        let sumOfHeight = Math.ceil(window.scrollY + window.innerHeight);
        let bodyHeight = document.querySelector("body").scrollHeight;
        // console.log(sumOfHeight, bodyHeight);
        let g = 0;
        if (sumOfHeight == bodyHeight) {
            // console.log("scrolling");
            if (g < el.length - 10) {
                for (var i = 10; i < el.length - 10; i++) {
                    var div = document.createElement("div");
                    div.classList.add("width-20");
                    div.classList.add("p-3");
                    var box = document.createElement("div");
                    box.classList.add("box");
                    var ad = document.createElement("p");
                    ad.innerHTML = `<p><span class = "badge rounded-pill bg-primary" >Ad</span>:${el[i].ad}</p>`;
                    var yeni = document.createElement("p");
                    yeni.innerHTML = `<p><span class = "badge rounded-pill bg-primary" >Yenidir</span>:${el[i].yeni}</p>`;
                    var telefon = document.createElement("p");
                    telefon.innerHTML = `<p><span class = "badge rounded-pill bg-primary" >Telefon</span><span id="small">:${el[i].telefon}</span></p>`;
                    var qiymet = document.createElement("p");
                    qiymet.innerHTML = `<p><span class = "badge rounded-pill bg-primary" >Qiymet</span>:${el[i].qiymet}</p>`
                    var buton = document.createElement("button");
                    buton.classList.add("btn");
                    buton.classList.add("btn-primary");
                    buton.classList.add("ms-4");
                    // buton.setAttribute("id","buttton");
                    buton.classList.add("button");
                    buton.innerText = "Ətraflı";
                    buton.setAttribute("tabindex", i)
                    var img = document.createElement("img");
                    img.setAttribute("src", `images/${content}.jpg`);
                    box.appendChild(img);
                    box.appendChild(ad);
                    box.appendChild(telefon);
                    box.appendChild(yeni);
                    box.appendChild(qiymet);
                    box.appendChild(buton);
                    div.appendChild(box);
                    nav.appendChild(div)
                    // console.log(el.length);
                }
            }
            g++;

        }

    });
}
var arrBrand = ["Acer", "Asus", "Dell", "HP", "Lenovo"]
var acer = [{
    ad: "acer", tesvir: "tesvir", qiymet: "2480 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "acer", tesvir: "tesvir", qiymet: "1180 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "acer", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "acer", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "acer", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "acer", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "acer", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "acer", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "acer", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "acer", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "acer", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "acer", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "acer", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "acer", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "acer", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "acer", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "acer", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "acer", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "acer", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "acer", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "acer", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "acer", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "acer", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "acer", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "acer", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}
];
var asus = [{
    ad: "asus", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "asus", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "Asus", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "Asus", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "Asus", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}, {
    ad: "Asus", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
}];
var dell = [
    {
        ad: "dell", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "dell", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "dell", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "dell", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "dell", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "dell", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "dell", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "dell", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "dell", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "dell", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "dell", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "dell", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "dell", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "dell", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "dell", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "dell", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "dell", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "dell", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "dell", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "dell", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "dell", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "dell", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "dell", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "dell", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "dell", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }
]
var hp = [
    {
        ad: "hp", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "hp", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "hp", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "hp", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "hp", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "hp", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "hp", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "hp", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "hp", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "hp", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "hp", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "hp", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "hp", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "hp", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "hp", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "hp", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "hp", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "hp", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "hp", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "hp", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "hp", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "hp", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "hp", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "hp", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "hp", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    },
];
var lenovo = [
    {
        ad: "lenovo", tesvir: "tesvir", qiymet: "1380 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "lenovo", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "lenovo", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "lenovo", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "lenovo", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "lenovo", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "lenovo", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "lenovo", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "lenovo", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "lenovo", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "lenovo", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "lenovo", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "lenovo", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "lenovo", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "lenovo", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "lenovo", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "lenovo", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "lenovo", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "lenovo", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "lenovo", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "lenovo", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "lenovo", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "lenovo", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "lenovo", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "lenovo", tesvir: "tesvir", qiymet: "2780 AZN", telefon: "055-867-3567", yeni: "bəli", əməliyaddaş: "16GB", CPU: "Core i9", daimiyaddaş: "500GB", daimitipi: "SSD", emeliyyat: "win 10", GPU: "Intel Iris Xe Graphics"
    },
]

var nav = document.querySelector("#nav-tabContent");
var cont = document.querySelector("#list-tab");
var item = document.querySelectorAll(".list-group-item");
for (var i = 0; i < 10; i++) {
    var div = document.createElement("div");
    div.classList.add("width-20");
    div.classList.add("p-3");
    var box = document.createElement("div");
    box.classList.add("box");
    var ad = document.createElement("p");
    ad.innerHTML = `<p><span class = "badge rounded-pill bg-primary" >Ad</span>:${acer[i].ad}</p>`;
    var yeni = document.createElement("p");
    yeni.innerHTML = `<p><span class = "badge rounded-pill bg-primary" >Yenidir</span>:${acer[i].yeni}</p>`;
    var telefon = document.createElement("p");
    telefon.innerHTML = `<p><span class = "badge rounded-pill bg-primary" >Telefon</span><span id="small">:${acer[i].telefon}</span></p>`;
    var qiymet = document.createElement("p");
    qiymet.innerHTML = `<p><span class = "badge rounded-pill bg-primary" >Qiymet</span>:${acer[i].qiymet}</p>`
    var buton = document.createElement("button");
    buton.classList.add("btn");
    buton.classList.add("btn-primary");
    buton.classList.add("ms-4");
    buton.classList.add("button");
    buton.innerText = "Ətraflı";
    buton.setAttribute("tabindex", i)
    var img = document.createElement("img");
    img.setAttribute("src", "images/Acer.jpg");
    box.appendChild(img);
    box.appendChild(ad);
    box.appendChild(telefon);
    box.appendChild(yeni);
    box.appendChild(qiymet);
    box.appendChild(buton);
    div.appendChild(box);
    nav.appendChild(div)
}
var input = document.querySelector("#search");
input.addEventListener("keyup", function (e) {
    // console.log(e.keyCode);
    if (e.keyCode > 64 && e.keyCode < 91 || e.keyCode == 8) {
        $('#list-tab').empty();
        for (var i = 0; i < arrBrand.length; i++) {
            var g = input.value;
            // var h = arrBrand[i];
            if (arrBrand[i].toLowerCase().includes(g.toLowerCase())) {
                // console.log("sda");
                var f = document.createElement("li");
                f.classList.add("list-group-item");
                f.classList.add("list-group-item-action");
                // f.setAttribute("id","")
                f.innerText = arrBrand[i];
                cont.appendChild(f);

            }
        }
        if (cont.children.length == 0) {
            var j = document.createElement("li");
            j.classList.add("list-group-item");
            j.classList.add("list-group-item-action");
            j.innerText = "Netice tapilmadi!";
            cont.appendChild(j);
        }

    } else if (input.value == "") {
        $('#list-tab').empty();

        for (var i = 0; i < arrBrand.length; i++) {
            var a = document.createElement("li");
            a.classList.add("list-group-item");
            a.classList.add("list-group-item-action");
            a.innerText = arrBrand[i];
            cont.appendChild(a);
        }
    }

});
var img1;
var item = document.querySelectorAll(".list-group-item");
for (var i = 0; i < 5; i++) {
    item[i].addEventListener("click", function () {
        // console.log("salam");
        $(`#nav-tabContent`).empty();
        let arr;
        var content = String(this.innerText);
        content = content.toLowerCase();
        if (content == "acer") {
            arr = acer;
            img1 = "Acer.png";

        } else if (content == "asus") {
            arr = asus;
            img1 = "Asus.png";

        } else if (content == "dell") {
            arr = dell;
            img1 = "Dell.png";

        } else if (content == "hp") {
            arr = hp;
            img1 = "HP.png";

        } else if (content == "lenovo") {
            arr = lenovo;
            img1 = "Lenovo.png";

        }
        for (var i = 0; i < 10; i++) {
            // console.log(arr);
            var div = document.createElement("div");
            div.classList.add("width-20");
            div.classList.add("p-3");
            var box = document.createElement("div");
            box.classList.add("box");
            var ad = document.createElement("p");
            ad.innerHTML = `<p><span class = "badge rounded-pill bg-primary" >Ad</span>:${arr[i].ad}</p>`;
            var yeni = document.createElement("p");
            yeni.innerHTML = `<p><span class = "badge rounded-pill bg-primary" >Yenidir</span>:${arr[i].yeni}</p>`;
            var telefon = document.createElement("p");
            telefon.innerHTML = `<p><span class = "badge rounded-pill bg-primary" >Telefon</span><span id="small">:${arr[i].telefon}</span></p>`;
            var qiymet = document.createElement("p");
            qiymet.innerHTML = `<p><span class = "badge rounded-pill bg-primary" >Qiymet</span>:${arr[i].qiymet}</p>`
            var buton = document.createElement("button");
            buton.classList.add("btn");
            buton.classList.add("btn-primary");
            buton.classList.add("ms-4");
            buton.innerText = "Ətraflı";
            buton.setAttribute("tabindex", i)
            buton.classList.add("button");
            var img = document.createElement("img");
            img.setAttribute("src", `images/${content}.jpg`);
            box.appendChild(img);
            box.appendChild(ad);
            box.appendChild(telefon);
            box.appendChild(yeni);
            box.appendChild(qiymet);
            box.appendChild(buton);
            div.appendChild(box);
            nav.appendChild(div)
        }
        Scroll(arr);
    })
}
var content;
for (var i = 0; i < 5; i++) {
    item[i].addEventListener("click", function () {
        // console.log("salam");
        $(`#nav-tabContent`).empty();
        let arr;
        content = String(this.innerText);
        content = content.toLowerCase();
        if (content == "acer") {
            arr = acer;
            img1 = "Acer.png";
        } else if (content == "asus") {
            arr = asus;
            img1 = "Asus.png";
        } else if (content == "dell") {
            arr = dell;
            img1 = "Dell.png";
        } else if (content == "hp") {
            arr = hp;
            img1 = "HP.png";
        } else if (content == "lenovo") {
            arr = lenovo;
            img1 = "Lenovo.png";
        }
        Scroll(arr, content);

        for (var i = 0; i < 10; i++) {
            // console.log(arr);
            var div = document.createElement("div");
            div.classList.add("width-20");
            div.classList.add("p-3");
            var box = document.createElement("div");
            box.classList.add("box");
            var ad = document.createElement("p");
            ad.innerHTML = `<p><span class = "badge rounded-pill bg-primary" >Ad</span>:${arr[i].ad}</p>`;
            var yeni = document.createElement("p");
            yeni.innerHTML = `<p><span class = "badge rounded-pill bg-primary" >Yenidir</span>:${arr[i].yeni}</p>`;
            var telefon = document.createElement("p");
            telefon.innerHTML = `<p><span class = "badge rounded-pill bg-primary" >Telefon</span><span id="small">:${arr[i].telefon}</span></p>`;
            var qiymet = document.createElement("p");
            qiymet.innerHTML = `<p><span class = "badge rounded-pill bg-primary" >Qiymet</span>:${arr[i].qiymet}</p>`
            var buton = document.createElement("button");
            buton.classList.add("btn");
            buton.classList.add("btn-primary");
            buton.classList.add("ms-4");
            // buton.setAttribute("id","buttton");
            buton.classList.add("button");
            buton.innerText = "Ətraflı";
            buton.setAttribute("tabindex", i)
            var img = document.createElement("img");
            img.setAttribute("src", `images/${content}.jpg`);
            box.appendChild(img);
            box.appendChild(ad);
            box.appendChild(telefon);
            box.appendChild(yeni);
            box.appendChild(qiymet);
            box.appendChild(buton);
            div.appendChild(box);
            nav.appendChild(div);

        }
        $('.button').click(function () {
            var tabindex = this.getAttribute("tabindex");
            // console.log(arr[tabindex].ad);
            $('#exampleModalLong').addClass("show");
            $('#exampleModalLong').addClass("modalStyle");
            $('#exampleModalLong').removeClass("d-none");

            // console.log(tabindex);
            var j = document.querySelector("#img");
            j.setAttribute("src", `images/${content}.jpg`);
            // setValue($(".Ad"),arr[tabindex].ad);
            $(".Ad").val(arr[tabindex].ad);
        });
        $("#exit").click(function () {
            $('#exampleModalLong').removeClass("show");
            $('#exampleModalLong').removeClass("modalStyle");
            $('#exampleModalLong').addClass("d-none");
        });

    })

}

$('.button').click(function () {
    if(arr==undefined){
        $('#exampleModalLong').addClass("show");
    $('#exampleModalLong').addClass("modalStyle");
    $('#exampleModalLong').removeClass("d-none");
    var tabindex = this.getAttribute("tabindex");
    var j = document.querySelector("#img");
    j.setAttribute("src", `images/acer.jpg`);
    setValue($(".Ad"), arr[tabindex].ad);
    }else{$('#exampleModalLong').addClass("show");
    $('#exampleModalLong').addClass("modalStyle");
    $('#exampleModalLong').removeClass("d-none");
    var tabindex = this.getAttribute("tabindex");
    // console.log(tabindex);
    var j = document.querySelector("#img");
    j.setAttribute("src", `images/${content}.jpg`);
    setValue($(".Ad"), arr[tabindex].ad);
    document.appendChild($(".Ad").val());
}
});
$("#exit").click(function () {
    
    $('#exampleModalLong').removeClass("show");
    $('#exampleModalLong').removeClass("modalStyle");
    $('#exampleModalLong').addClass("d-none");
});
function setValue(clas, local) {
    clas = local;
}

