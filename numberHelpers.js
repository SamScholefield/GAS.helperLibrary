var minInArray = Math.min.apply(Math, array);

var maxInArry = Math.max.apply(Math, array);

function modeArray(array)
{
    if (array.length == 0)
        return null;
    var modeMap = {},
        maxCount = 1, 
        modes = [array[0]];

    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];

        if (modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;

        if (modeMap[el] > maxCount)
        {
            modes = [el];
            maxCount = modeMap[el];
        }
        else if (modeMap[el] == maxCount)
        {
            modes.push(el);
            maxCount = modeMap[el];
        }
    }
    return modes;
}

function pad(n){

    if(n<10)
        return "0" + n;
    return n;
}