
function showTypeForm(){
    var script = document.createElement('script');
    script.src = "https://embed.typeform.com/next/embed.js"
    var div = document.createElement('div');
    div.setAttribute("id", "typeForm");
    div.setAttribute("data-tf-widget", "rg47Zv5N");
    div.setAttribute("data-tf-opacity", 100);
    div.setAttribute("data-tf-width", "100%");
    div.setAttribute("data-tf-height", "500px");
    div.setAttribute("data-tf-medium", "snippet")
    div.setAttribute("data-tf-button-text", "Feedback")
    div.setAttribute("data-tf-iframe-props", "title=credMantra")

    script.append(div);
    document.getElementsByTagName('head')[0].appendChild(script);
}
