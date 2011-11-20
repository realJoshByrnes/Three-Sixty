var url = 'http://upload.wikimedia.org/wikipedia/commons/9/9f/Lichtenstein_360_degree_panorama_%28aka%29.jpg';

function loadimg() {
    var pos = 0;
    var img = new Image();
    img.src = url;
    img.onload = function() {
        var img1 = document.createElement('div');
        img1.className = 'pan';
        img1.id = 'imgx';
        img1.style.backgroundImage = "url("+url+")";
        document.body.appendChild(img1);
        
        window.onkeydown = function(e) {
            e = e || window.event;
            switch(e.keyCode) {
                case 37:
                    pos+=100;
                    break;
                case 39:
                    pos-=100;
                    break;
            }
            var extreme=Math.round(img.width / (img.height / document.body.clientHeight));
            /* // I prefer this as it keeps pos relatively low.
             * // It doesn't look as nice with CSS transitions.
             * 
             * if (pos >= extreme) {
             *     pos -= extreme;
             * }
             * else if (pos <= -(extreme)) {
             *     pos += extreme;
             * }
             */
            var imgx=document.getElementById('imgx');
            imgx.style.backgroundPositionX = pos+'px';
        };
    };
    return img;
}

var img = loadimg();