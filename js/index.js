const benefit_block = document.querySelector('.benefit_for_the_customer_block');
const stiky_info_block = document.querySelector('.sticky_info_block_wrapper');
const windowInnerWidth = window.innerWidth
const windowInnerHeight = window.innerHeight
const navbar_menu = document.querySelector(".header_menu")
const open_menu_btn = document.querySelector(".btn_click")
const goTopBtn = document.querySelector(".circle_btn");

document.addEventListener('scroll', () => {
    const navbar = document.querySelector('.sticky_header_wrapper');
    if (window.scrollY > window.innerHeight * 1.1 && window.scrollY < window.innerHeight + benefit_block.offsetHeight) {
        navbar.classList.add('wh');
        navbar.classList.add('scrolled');
    } else if (window.scrollY > window.innerHeight * 1.1 + benefit_block.offsetHeight + navbar.offsetHeight || window.scrollY < window.innerHeight * 1.1) {
        navbar.classList.remove('wh');
        navbar.classList.remove('scrolled');
    } else if (window.scrollY < window.innerHeight * 1.1 + benefit_block.offsetHeight + navbar.offsetHeight || window.scrollY > window.innerHeight * 1.1) {
        navbar.classList.add('wh');
        navbar.classList.add('scrolled');
    }
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
})

window.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(document.querySelectorAll('.tel'), function (input) {
        let keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            let pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            let matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            let reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5) this.value = ""
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)

    });
});

goTopBtn.addEventListener("click", goTop);
function goTop() {
    if (window.scrollY > 0) {
        window.scrollBy(0, -75);
        setTimeout(goTop, 0);
    }
}


open_menu_btn.onclick = function () {
    if (open_menu_btn.checked) {
        navbar_menu.style.left = "0%"
        document.querySelector("body").style.overflowY = "hidden"
    } else {
        navbar_menu.style.left = "-115vw"
        document.querySelector("body").style.overflowY = "auto"
    }
}
