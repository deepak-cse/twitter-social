/*var xhr= new XMLHttpRequest();
xhr.open("GET","http://contesttrackerapi.herokuapp.com/",true);
xhr.readystatechange=function(){
	if(xhr.readystate==4){
		var resp=JSON.parse(xhr.responseText);
        //document.getElementById("d1").innerHTML(resp);
        windows.alert(resp);
	}
}
xhr.send();
*/








var contextsList = ["selection", "link", "image", "page"];
var i = 0;


function myFunction(data, tab) {
    "use strict";
    //window.alert();
    switch (data.menuItemId) {
    case "selection":
         chrome.windows.create({url : "https://twitter.com/intent/tweet?text=" + encodeURIComponent(data.selectionText), type: "panel"});
        break;
    case "link":
        chrome.windows.create({url : "https://twitter.com/intent/tweet?url=" + encodeURIComponent(data.linkUrl), type: "panel"});
        break;
    case "image":
        chrome.windows.create({url : "https://twitter.com/intent/tweet?url=" + encodeURIComponent(data.srcUrl), type: "panel"});
        break;
    case "page":
        chrome.windows.create({url : "https://twitter.com/intent/tweet?text=MyPage" + encodeURIComponent(tab.title) + " &url=" + (data.pageUrl), type: "panel"});
        break;

    }
    
}

for (i = 0; i < contextsList.length; i = i + 1) {
    //window.alert(i);
    var context = contextsList[i];
    var titleX = "twitter social : Share this " + context + " on your profiles ";
    chrome.contextMenus.create({ title: titleX, contexts: [context], onclick: myFunction, id: context });
}
/*chrome.contextMenus.create({
    title: "twitter Social",
    contexts: ["selection"],
    onclick: myFunction,
    id: "selection"
});*/

