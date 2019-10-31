// MIT License

// Copyright (c) 2018 Neutralinojs

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

let myapp = {
    myfunction : function () {
        //static features

        let d = new Date();
        document.getElementById('date').innerText = "Mai dátum: " + d.toLocaleDateString();

        let request = new XMLHttpRequest();
        request.open("GET", "https://api.sunrise-sunset.org/json?lat=47.4979&lng=19.0402", false);
        request.send(null);
        let twilight = request.responseText;
        twilight = JSON.parse(twilight);
        let sunset = twilight.results.sunset;
        document.getElementById('twilight').innerText = "A nap ekkor megy le: " + sunset;
    }
};

let isDark = true;

document.getElementById('btn').addEventListener('click', function() {
    if (isDark == true) {
        isDark = false;
        document.getElementById('body').classList.add('dark');
    } else {
        isDark = true;
        document.getElementById('body').classList.remove('dark');
    }
}); 

setInterval(function () {
    //Updating features

    const d = new Date();
    document.getElementById('time').innerText = d.toTimeString().split(' ')[0];

    //Assuming that you work from 9:00-17:00. Change this to configure
    const end = new Date(d);
    end.setHours(17,0,0);

    let remaining = Math.floor((end.getTime() - d.getTime()) / 1000);

    document.getElementById('remaining').innerHTML = "A munkaidőből még ennyi idő van hátra: <b>" + remaining + "</b> másodperc";
}, 1000);

Neutralino.init({
    load: function() {
        myapp.myfunction();
    },
    pingSuccessCallback : function() {

    },
    pingFailCallback : function() {

    }
});