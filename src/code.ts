// import * as Rx from "rxjs";

// console.log('RX', Rx.observable);


import { Observable } from 'rxjs';

var observable = Observable.create(
    (observer:any) =>{
        try {
            observer.next('Hey guys!');
            observer.next('How are you?');
           setInterval(() => {
               observer.next('tutto a posto')
           }, 1500);
        } catch (err) {
            observer.error(err);
        }

    });


var observer = observable.subscribe(
    (x:any) => addItem(x),
    (error:any) => addItem(error),
    () => addItem('Completed')
    );

    var observer2 = observable.subscribe(
    (x:any) => addItem(x),
    );

observer.add(observer2)

setTimeout(() =>{
    observer.unsubscribe();
},6000);

function addItem(val:any) {
    var node = document.createElement("li")
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById("output").appendChild(node);
}