var pageLoading=document.querySelector(".pageLoading");var frame=document.querySelector(".frame");var iframeLoads=0;var loadingDisplay="flex";var bkgColor="white";frame.onload=function(){iframeLoads++;if(iframeLoads==1){document.body.style.backgroundImage="none";document.body.style.backgroundColor=bkgColor;}
pageLoading.style.display="none";frame.contentWindow.onunload=unloading;}
function unloading(){pageLoading.style.display=loadingDisplay;}
