//Globally used variables

let myArray = document.querySelectorAll(".element");
let cmps = document.querySelector(".counter");
let mode = 'Sort';
let delayInMilliseconds = 10;
//Assign random height to each element
function randomize(){
    for (let i=0; i<myArray.length; i++){
        let randHeight = Math.floor(Math.random()*300);
        myArray[i].style.height = randHeight.toString()+"px";
        let newTop = 250-randHeight;
        myArray[i].style.top=newTop.toString()+"px";
    }
}

function increment(){
    let c=parseInt(cmps.innerHTML);
    c++;
    cmps.innerHTML = c.toString();
}

function resetSpeed(){
    let sp = document.querySelector(".speed");
    sp = parseInt(sp.value);
    if (sp<=0){
        alert("Speed must be positive.");
        return;
    }
    else if (sp>200){
        alert("Please, insert a value up to 200.");
        return;
    }
    delayInMilliseconds = parseInt(1000/sp);
    alert("Speed is reset.");
    document.querySelector(".speed").value = "";
}

function clearCount(){
    cmps.innerHTML="0";
}


function min(a,b){
    if (a<b)
        return a;
    return b;
}

function max(a,b){
    if (a>b)
        return a;
    return b;
}

function getHeight(el){
    let res = parseInt(el.style.height);
    return res;
}

let abort = false;

function bubbleSort(){
    clearCount();
    abort=false;
    let i=myArray.length-1;
    let j=0;
    let myTimer = setInterval(function(){
        if (abort){
            for (let k=0; k<myArray.length; k++){
            myArray[k].style.backgroundColor="blueviolet";
            }
            clearInterval(myTimer);
            return;
        }
        for (let k=0; k<myArray.length; k++){
            myArray[k].style.backgroundColor="blueviolet";
        }
        myArray[j].style.backgroundColor="orange";
        myArray[j+1].style.backgroundColor="orange";
        increment();
        if (getHeight(myArray[j])>getHeight(myArray[j+1])){
            let leftHeight = getHeight(myArray[j]);
            let rightHeight = getHeight(myArray[j+1]);
            myArray[j].style.height = rightHeight.toString()+"px";
            myArray[j+1].style.height = leftHeight.toString()+"px"; 
            let leftTop = 250-leftHeight;
            let rightTop = 250-rightHeight;
            myArray[j].style.top = rightTop.toString()+"px";
            myArray[j+1].style.top = leftTop.toString()+"px";        
        }
        j++;
        if (j==i){
            i--;
            j=0;
        }
        if (i==0){
            for (let k=0; k<myArray.length; k++){
            myArray[k].style.backgroundColor="blueviolet";
            }
            clearInterval(myTimer);
        }
    }, delayInMilliseconds);
}


function paint(a, b){
    for (let i=0; i<myArray.length; i++){
        myArray[i].style.backgroundColor = "blueviolet";
    }
    myArray[a].style.backgroundColor = "orange";
    myArray[b].style.backgroundColor = "orange";
}

function clearPaint(){
    for (let i=0; i<myArray.length; i++){
        myArray[i].style.backgroundColor = "blueviolet";
    }
}

function insertionSort(){
    clearCount();
    abort=false;
    let i=1;
    let j=i;
    let myTimer = setInterval(function(){
    if (abort){
            for (let k=0; k<myArray.length; k++){
            myArray[k].style.backgroundColor="blueviolet";
            }
            clearInterval(myTimer);
            return;
        }
        for (let k=0; k<myArray.length; k++){
            myArray[k].style.backgroundColor="blueviolet";
        }
        myArray[j].style.backgroundColor="orange";
        myArray[j-1].style.backgroundColor="orange";  
        increment();
        if (getHeight(myArray[j])<getHeight(myArray[j-1])){
            let leftHeight = getHeight(myArray[j]);
            let rightHeight = getHeight(myArray[j-1]);
            myArray[j].style.height = rightHeight.toString()+"px";
            myArray[j-1].style.height = leftHeight.toString()+"px"; 
            let leftTop = 250-leftHeight;
            let rightTop = 250-rightHeight;
            myArray[j].style.top = rightTop.toString()+"px";
            myArray[j-1].style.top = leftTop.toString()+"px";
            j--;
        }
        else {
            i++;
            j=i;
        }
        if (j==0){
            i++;
            j=i;
        }
        if (i==myArray.length){
            for (let k=0; k<myArray.length; k++){
            myArray[k].style.backgroundColor="blueviolet";
            }
            clearInterval(myTimer);
        }
    }, delayInMilliseconds);
}

function min(a, b){
    if (a<b)
        return a;
    return b;
}

function mergeSort(){
    clearCount();
    abort = false;
    let n = myArray.length;
    let step1=true;
    let step2=false;
    let step3=false;
    let step4=false;
    let step5=false;
    let curLen=2;
    let i=0;
    let k=0;
    let temp=[];
    let left=i;
    let t=left;
    let right=i+curLen-1;
    let mid=parseInt((left+right)/2);
    mid = min(mid, n-1);
    right = min(right, n-1);
    let l=left;
    let r=mid+1;
    let myTimer = setInterval(function(){
            if (abort){
                clearPaint();
                clearInterval(myTimer);
                return;
            }
            if (step1===true){
                if (l<=mid && r<=right){
                    paint(l, r);
                    increment();
                    if (getHeight(myArray[l])>getHeight(myArray[r])){
                        temp.push(getHeight(myArray[r]));
                        r++;
                    }
                    else {
                       temp.push(getHeight(myArray[l]));
                        l++; 
                    }
                }
                else {
                    step1=false;
                    step2=true;
                }
            }
            if (step2===true){
                if (l<=mid){
                    paint(l,l);
                    temp.push(getHeight(myArray[l]));
                    l++;
                }
                else {
                    step2=false;
                    step3=true;
                }
            }
            if (step3===true){
                if (r<=right){
                    paint(r,r);
                    temp.push(getHeight(myArray[r]));
                    r++;
                }
                else {
                    step3=false;
                    step4=true;
                }
            }
            if (step4===true){
                if (k<temp.length){
                    paint(t,t);
                    myArray[t].style.height=temp[k].toString()+"px";
                    let newTop = 250-temp[k];
                    myArray[t].style.top=newTop.toString()+"px";
                    t++; k++;
                }
                else {
                    step4=false;
                    step5=true;
                }
            }
            if (step5===true){  
                i+=curLen;
                if (i>=n){
                    curLen*=2;
                    i=0;
                }
                if (curLen>=2*n){
                    clearPaint();
                    clearInterval(myTimer);
                }
                step1=true;
                step2=false;
                step3=false;
                step4=false;
                step5=false;
                k=0;
                temp=[];
                left=i;
                t=left;
                right=i+curLen-1;
                mid=parseInt((left+right)/2);
                mid = min(mid, n-1);
                right = min(right, n-1);
                l=left;
                r=mid+1;
            }
        }
    , delayInMilliseconds);
}


function mergeSortBackup(){
    let n = myArray.length;
    for (let curLen=2; curLen<2*n; curLen*=2){
        for (let i=0; i<n; i+=curLen){
            let temp=[];
            let left=i;
            let right=i+curLen-1;
            let mid=parseInt((left+right)/2);
            mid = min(mid, n-1);
            right = min(right, n-1);
            let l=left;
            let r=mid+1;
            while (l<=mid && r<=right){
                if (getHeight(myArray[l])>getHeight(myArray[r])){
                    temp.push(getHeight(myArray[r]));
                    r++;
                }
                else {
                   temp.push(getHeight(myArray[l]));
                    l++; 
                }
            }
            while (l<=mid){
                temp.push(getHeight(myArray[l]));
                l++;
            }
            while (r<=right){
                temp.push(getHeight(myArray[r]));
                r++;
            }
            let t=left;
            for (let k=0; k<temp.length; k++){
                myArray[t].style.height=temp[k].toString()+"px";
                let newTop = 250-temp[k];
                myArray[t].style.top=newTop.toString()+"px";
                t++;
            }
        }
    }
}



function makeModeSort(){
    abort = true;
    mode='Sort';
    document.getElementById("insertionSortButton").innerHTML='Insertion Sort';
    document.getElementById("bubbleSortButton").innerHTML='Bubble Sort';
}

function changeMode(str){
    if (mode==='Sort'){
        if (str==="insertion")
            insertionSort();
        else if (str==="bubble")
            bubbleSort();
        else if (str==="merge")
            mergeSort();
        mode='Stop';
        if (str==="insertion")
            document.getElementById("insertionSortButton").innerHTML=mode;
        else if (str==="bubble")
            document.getElementById("bubbleSortButton").innerHTML=mode;
        else if (str==="merge")
            document.getElementById("mergeSortButton").innerHTML=mode;
    }
    else {
        abort = true;
        mode='Sort';
        document.getElementById("insertionSortButton").innerHTML='Insertion Sort';
        document.getElementById("bubbleSortButton").innerHTML='Bubble Sort';
        document.getElementById("mergeSortButton").innerHTML="Merge Sort";
    }
}

randomize();