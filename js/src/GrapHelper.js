function GrapHelper() {
            
    // this.header = header;
    // this.data = data;
    // this.options = options;
    
    // Contructor
    function GrapHelper(){
        
    }

    this.getHtml = function (url) {
        ret = $("<div>");
        $body = ("<img src ="+url+"><br>");
        ret.append($body);
        return ret.html();
    };

 

  // container: dove inserire il grafico
  // url : immagine da inserire
    this.drawGraph = function(container, url) {
        container.html(this.getHtml(url));
    };
}
        