function includeHTML() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");

    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("include-html");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    elmnt.innerHTML = this.responseText;
                    includeHTML();
                }

                else if (this.readyState == 4 && this.status == 200) {
                    elmnt.innerHTML = "./404.html";
                    includeHTML();
                }
                elmnt.removeAttribute("include-html");
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        } 
    }
}
// 출처: https://www.w3schools.com/howto/howto_html_include.asp
// 상기 내용을 바탕으로 알맞게 수정함.