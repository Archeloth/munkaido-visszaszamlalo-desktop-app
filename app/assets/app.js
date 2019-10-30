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
        let d = new Date();
        document.getElementById('date').innerText = "Mai dátum: " + d.toISOString().split('T')[0];
    }
};

setInterval(function () {
    let d = new Date();
    document.getElementById('time').innerText = d.toTimeString().split(' ')[0];
    //Assuming that you work from 9:00-17:00. Change this to configure
    const start = new Date(new Date(d).setHours(9,0,0));
    const end = new Date(new Date(d).setHours(17,0,0));
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