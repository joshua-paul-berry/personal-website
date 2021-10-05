function changeTab(tab) {
    var idx, tabContent, tabButtons;

    tabContent = document.getElementsByClassName("tabcontent");

    for (idx = 0; idx < tabContent.length; idx++) {
        tabContent[idx].style.display = "none";
    }
   
    document.getElementById(tab).style.display = "block";
}