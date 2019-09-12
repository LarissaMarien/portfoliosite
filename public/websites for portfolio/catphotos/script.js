var myPics = document.getElementsByTagName("div");

var teller = 0;
while (teller < myPics.length) {

      myPics[teller].onclick = function() {
            var teller1 = 0;
            var myButtons = document.getElementsByTagName("button");
            while (teller1 < myButtons.length) {
                  console.log("hoi");
                  myButtons[teller1].className = "onzichtbaar";
                  teller1++;

            }
            this.childNodes[3].className = "geselecteerd";
      }
      teller++;
}
