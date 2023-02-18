function navigateToOtherPage(){
    window.location.href = 'http://127.0.0.1:5500/blog.html';
};

document.getElementById('btn-calculate').addEventListener('click', function () {


    const triangleBase = document.getElementById('base');
    const triangleBaseValue = triangleBase.value;
    triangleBase.value = '';

    //triangleBaseValue validation part;

    if (isNaN(triangleBaseValue) || triangleBaseValue == 0 || triangleBaseValue == '' ){
        alert ('Not a Number!');
      };

    const triangleHeight = document.getElementById('height');
    const triangleHeightValue = triangleHeight.value;
    triangleHeight.value = '';

    //triangleHeightValue validation part;

    if (isNaN(triangleHeightValue) || triangleHeightValue == 0 || triangleHeightValue == '') {
        alert('Not a Number!');
    };


    const areaOfTriangle = document.getElementById('area-triangle');
    const triangleAreaValue = 0.5 * triangleBaseValue * triangleHeightValue;
    areaOfTriangle.innerText = triangleAreaValue.toFixed(2);

   
});

//rectangle part;

document.getElementById('rect-btn-calculate').addEventListener('click',function(){
    const rectAngleWidth = document.getElementById('width');
    const rectAngleWidthValue = rectAngleWidth.value;
    rectAngleWidth.value = '';
    
    //rectAngleWidthValue validation part;

    if (isNaN(rectAngleWidthValue) || rectAngleWidthValue == 0 || rectAngleWidthValue == '' ){
        alert ('Not a Number!');
      };

    const rectAngleHeight = document.getElementById('rect-height');
    const rectAngleHeightValue = rectAngleHeight.value;
    rectAngleHeight.value = '';

    //rectAngleHeightValue validation part;

    if (isNaN(rectAngleHeightValue) || rectAngleHeightValue == 0 || rectAngleHeightValue == '') {
        alert('Not a Number!');
    };

    const rectAngleArea = document.getElementById('area-rectangle');
    const rectAngleAreaValue = rectAngleWidthValue * rectAngleHeightValue;
    rectAngleArea.innerText = rectAngleAreaValue.toFixed(2);
    
});

//Parallelogram part;

document.getElementById('para-btn-calculate').addEventListener('click',function(){
    const parallelogramBase = document.getElementById('parallelogram-base');
    const parallelogramBaseValue = parallelogramBase.value;
    parallelogramBase.value = '';
 
    //parallelogramBaseValue validation part;
 
    if (isNaN(parallelogramBaseValue) || parallelogramBaseValue == 0 || parallelogramBaseValue == '' ){
     alert ('Not a Number!');
   };
 
    const parallelogramHeight = document.getElementById('parallelogram-height');
    const parallelogramHeightValue = parallelogramHeight.value;
    parallelogramHeight.value = '';
 
    //parallelogramHeightValue validation part;
 
    if (isNaN(parallelogramHeightValue) || parallelogramHeightValue == 0 || parallelogramHeightValue == '' ){
     alert ('Not a Number!');
   };
 
    const areaOfParallelogram = document.getElementById('area-parallelogram');
     const parallelogramAreaValue = parallelogramBaseValue * parallelogramHeightValue;
     areaOfParallelogram.innerText = parallelogramAreaValue.toFixed(2);
 });

 
 //rhombus part;

 document.getElementById('rhombus-btn-calculate').addEventListener('click',function(){
    const rhombusd1 = document.getElementById('rhombusd1');
    const rhombusd1Value = rhombusd1.value;
    console.log(rhombusd1Value);

    //rhombusd1Value validation part;

    if (isNaN(rhombusd1Value) || rhombusd1Value == 0 || rhombusd1Value == '' ){
        alert ('Not a Number!');
      };

    const rhombusd2 = document.getElementById('rhombusd2');
    const rhombusd2Value = rhombusd2.value;
    console.log(rhombusd2Value);

    //rhombusd2Value validation part;

    if (isNaN(rhombusd2Value) || rhombusd2Value == 0 || rhombusd2Value == '' ){
        alert ('Not a Number!');
      };

    const rhombusArea = document.getElementById('area-rhombus');
    const rhombusAreaValue = 0.5 * rhombusd1Value * rhombusd2Value;
    rhombusArea.innerText = rhombusAreaValue.toFixed(2);
});


//Pentagon part

document.getElementById('pentagon-btn-calculate').addEventListener('click',function(){
    const pentagonRange = document.getElementById('pentagon-p');
    const pentagonRangeValue = pentagonRange.value;
    pentagonRange.value = '';

    //pentagonRangeValue validation part;

    if (isNaN(pentagonRangeValue) || pentagonRangeValue == 0 || pentagonRangeValue == '' ){
        alert ('Not a Number!');
      };

    const pentagonBase = document.getElementById('pentagon-b');
    const pentagonBaseValue = pentagonBase.value;
    pentagonBase.value = '';

    //pentagonBaseValue validation part;

    if (isNaN(pentagonBaseValue) || pentagonBaseValue == 0 || pentagonBaseValue == '' ){
        alert ('Not a Number!');
      };

    const pentagonArea = document.getElementById('area-pentagon');
    const pentagonAreaValue = 0.5 * pentagonRangeValue * pentagonBaseValue;
    pentagonArea.innerHTML =  pentagonAreaValue.toFixed(2);
});

//Ellipse part;

document.getElementById('ellipse-btn-calculate').addEventListener('click', function () {
    const majorAxis = document.getElementById('major-axis');
    const majorAxisValue = majorAxis.value;
    majorAxis.value = '';

    //majorAxisValue validation part;

    if (isNaN(majorAxisValue) || majorAxisValue == 0 || majorAxisValue == '') {
        alert('Not a Number!');
    };

    const minorAxis = document.getElementById('minor-axis');
    const minorAxisValue = minorAxis.value;
    minorAxis.value = '';

    //minorAxisValue validation part;

    if (isNaN(minorAxisValue) || minorAxisValue == 0 || minorAxisValue == '') {
        alert('Not a Number!');
    };

    const areaOfEllipse = document.getElementById('area-ellipse');
    const areaOfEllipseValue = 3.1416 * majorAxisValue * minorAxisValue;
    areaOfEllipse.innerText = areaOfEllipseValue.toFixed(2);
});






