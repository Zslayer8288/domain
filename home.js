var pageNum = 1;

function checkNav() {
 if (pageNum == 1) {
  page1();
 }
 else {
  pageEmpty();
 }
}

function pageEmpty() {

}

function page1() {
 document.getElementById('navHeader').innerHTML = '<a href="#" onclick=""><<</a><a href="http://projects.codark.com">Projects</a><a href="http://deathClicker.codark.com">Death Clicker</a><a href="#" onclick="addOne()">>></a>';
}
